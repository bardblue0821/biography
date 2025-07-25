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
      fbxLoader.load('/biography/beachball2.FBX', (object) => {
        beachball = object;
        beachball.position.set(0, -20 + 4 * (1/3), 0);
        beachball.scale.set(0.1, 0.1, 0.1);
        const textureLoader = new THREE.TextureLoader();
        const baseColor = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_BaseColor.png');
        const normalMap = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_Normal.png');
        const metallicMap = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_Metallic.png');
        const roughnessMap = textureLoader.load('/biography/beachball2/Maps/PBR_Metalrough/Myach_DefaultMaterial_Roughness.png');
        
        beachball.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).castShadow = true;
            (child as THREE.Mesh).receiveShadow = true;
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
              map: baseColor,
              normalMap: normalMap,
              metalnessMap: metallicMap,
              roughnessMap: roughnessMap,
              metalness: 1.0,
              roughness: 0.1,
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
      ballLight.position.set(0, -20 + 6, 0); // 初期位置はボールの真上
      scene.add(ballLight);

      let frameId: number;
      let startTime = performance.now();
      function renderLoop() {
        const now = performance.now();
        const elapsed = (now - startTime) / 1000;
        water.material.uniforms['time'].value += 1.0 / 60.0;
        if (beachball) {
          beachball.position.y = -20 + 4 * (1/3) + Math.sin(elapsed * 1.2)/3;
          beachball.position.x = 20 + Math.sin(elapsed * 0.7)/2 + Math.sin(elapsed * 1.2)/2;
          ballLight.position.x = beachball.position.x;
          ballLight.position.z = beachball.position.z;
          ballLight.position.y = beachball.position.y + 2.5; // ボールの少し上
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
