// src/components/ThreeBackground.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    function main() {
      const width = mount!.clientWidth;
      const height = mount!.clientHeight;

      // シーン
      const scene = new THREE.Scene();

      // カメラ
      const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 10000);
      camera.position.set(-10, 30, 30);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera);

      // レンダラー
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 1);
      mount!.appendChild(renderer.domElement);

      // 環境光
      const ambient = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambient);

      // スポットライト
      const spotLight = new THREE.SpotLight(0xffffff, 2, 1000, Math.PI / 8, 0.4, 1);
      spotLight.position.set(100, 400, 300);
      spotLight.target.position.set(0, 0, 0);
      scene.add(spotLight);
      scene.add(spotLight.target);

      // 空
      const sky = new Sky();
      sky.scale.setScalar(50000);
      sky.material.uniforms.turbidity.value = 0.8;
      sky.material.uniforms.rayleigh.value = 0.4;
      sky.material.uniforms.mieCoefficient.value = 0.005;
      sky.material.uniforms.mieDirectionalG.value = 0.8;
      sky.material.uniforms.sunPosition.value.set(10000, 30000, -40000);
      scene.add(sky);

      // 水面
      const waterGeometry = new THREE.PlaneGeometry(200, 200, 1, 1);
      const water = new Water(waterGeometry, {
        textureWidth: 16,
        textureHeight: 16,
        waterNormals: new THREE.TextureLoader().load(
          '/biography/water_n.jpg',
          (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        alpha: 0.9,
        waterColor: 0x3344cc,
        sunColor: 0xffffff,
        distortionScale: 3.0,
        side: THREE.FrontSide,
      });
      water.rotation.x = -Math.PI / 2;
      water.position.set(0, -20, 0);
      water.material.uniforms.sunDirection.value.copy(sky.material.uniforms.sunPosition.value).normalize();
      scene.add(water);

      // FBXLoaderでbeachball2.fbxを読み込む
      let beachball: THREE.Object3D | null = null;
      const fbxLoader = new FBXLoader();
      // 浮遊アニメーションの基準点
      let floatBase: THREE.Vector3 | null = null;
      fbxLoader.load('/biography/beachball2.FBX', (object) => {
        beachball = object;
        // 初期位置を右上に調整
        const initialX = 10;
        const initialY = -16;
        const initialZ = 0;
        beachball.position.set(initialX, initialY, initialZ);
        beachball.scale.set(0.1, 0.1, 0.1);
        // floatBaseも同じ初期値で初期化
        floatBase = new THREE.Vector3(initialX, initialY, initialZ);

        const textureLoader = new THREE.TextureLoader();
        const baseColor = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_BaseColor.png');
        // const normalMap = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_Normal.png');
        // const metallicMap = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_Metallic.png');
        // const roughnessMap = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_Roughness.png');
        
        // sunDirectionを取得
        const sunDirection = sky.material.uniforms.sunPosition.value.clone().normalize();
        beachball.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).castShadow = true;
            (child as THREE.Mesh).receiveShadow = true;
            (child as THREE.Mesh).material = new THREE.ShaderMaterial({
              uniforms: {
                baseMap: { value: baseColor },
                sunDirection: { value: sunDirection },
                cameraPos: { value: camera.position },
                time: { value: 0 },
              },
              vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vWorldPos;
                void main() {
                  vUv = uv;
                  vNormal = normalize(normalMatrix * normal);
                  vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `,
              fragmentShader: `
                uniform sampler2D baseMap;
                uniform vec3 sunDirection;
                uniform vec3 cameraPos;
                uniform float time;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vWorldPos;
                void main() {
                  vec3 base = texture2D(baseMap, vUv).rgb;
                  vec3 N = normalize(vNormal);
                  vec3 L = normalize(sunDirection);
                  vec3 V = normalize(cameraPos - vWorldPos);
                  vec3 H = normalize(L + V);
                  float diff = 0.4 + 0.6 * max(dot(N, L), 0.0);
                  float spec = pow(max(dot(N, H), 0.0), 20.0);
                  float highlight = clamp(spec * 0.3, 0.0, 1.0);
                  vec3 color = base * diff + vec3(1.0) * highlight;
                  gl_FragColor = vec4(color, 1.0);
                }
              `,
            });
          }
        });
        scene.add(beachball!);
      });
      renderer.shadowMap.enabled = true;
      spotLight.castShadow = true;
      water.receiveShadow = true;

      // ボール専用ライト
      const ballLight = new THREE.PointLight(0xffffff, 2.5, 30); // 強めの白色ライト
      ballLight.position.set(10, -20 + 10, 10); // 右上から照らす
      scene.add(ballLight);

      // ボールの速度ベクトル
      let ballVelocity = new THREE.Vector3(0, 0, 0);
      // Gキーでボールを横に叩く
      function onKeyDown(event: KeyboardEvent) {
        if (event.key === 'g' || event.key === 'G') {
          const speed = 0.7 + Math.random() * 0.7;
          const angle = Math.random() * Math.PI * 2;
          ballVelocity.set(
            Math.cos(angle) * speed,
            0,
            Math.sin(angle) * speed
          );
        }
      }
      window.addEventListener('keydown', onKeyDown);

      let frameId: number;
      let startTime = performance.now();
      function renderLoop() {
        const now = performance.now();
        const elapsed = (now - startTime) / 1000;
        water.material.uniforms['time'].value += 1.0 / 60.0;
        if (beachball) {
          // 速度があれば移動（摩擦で減速）
          if (ballVelocity.lengthSq() > 0.0001) {
            beachball.position.add(ballVelocity);
            // 摩擦
            ballVelocity.multiplyScalar(0.90);
            // 水面より下に落ちない
            if (beachball.position.y < -20 + 4 * (1/3)) {
              beachball.position.y = -20 + 4 * (1/3);
            }
            // 移動が止まったら、その位置から揺れ成分を除いた値を新たな基準点に
            if (ballVelocity.lengthSq() <= 0.0001 && floatBase) {
              floatBase.set(
                beachball.position.x - (Math.sin(elapsed * 0.7)/4 + Math.sin(elapsed * 1.2)/4),
                beachball.position.y - Math.sin(elapsed * 1.2)/6,
                beachball.position.z
              );
            }
          } else if (floatBase) {
            // 浮遊アニメーション（基準点を中心に揺らす）
            beachball.position.y = floatBase.y + Math.sin(elapsed * 1.2)/6;
            beachball.position.x = floatBase.x + Math.sin(elapsed * 0.7)/4 + Math.sin(elapsed * 1.2)/4;
            beachball.position.z = floatBase.z;
          }
          // ゆらゆらとランダムに回転
          beachball.rotation.x = Math.sin(elapsed * 0.5) * 0.2 + Math.sin(elapsed * 1.1) * 0.1;
          beachball.rotation.y = Math.sin(elapsed * 0.7) * 0.3 + Math.cos(elapsed * 0.9) * 0.15;
          beachball.rotation.z = Math.cos(elapsed * 0.4) * 0.2 + Math.sin(elapsed * 0.8) * 0.1;
          // シェーダーのカメラ・時間を更新
          beachball.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material instanceof THREE.ShaderMaterial) {
              ((child as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.cameraPos.value.copy(camera.position);
              ((child as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.time.value = elapsed;
            }
          });
        }
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(renderLoop);
      }
      renderLoop();

      function resizeRenderer() {
        const width = mount!.clientWidth;
        const height = mount!.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      window.addEventListener('resize', resizeRenderer);
      resizeRenderer();

      // クリーンアップ
      return () => {
        window.removeEventListener('keydown', onKeyDown);
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', resizeRenderer);
        mount!.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }

    // main実行＆クリーンアップ
    const cleanup = main();
    return cleanup;
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full min-h-screen z-0 pointer-events-none" />;
};

export default ThreeBackground;
