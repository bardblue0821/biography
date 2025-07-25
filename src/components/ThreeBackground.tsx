// src/components/ThreeBackground.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

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
      const camera = new THREE.PerspectiveCamera(20, width / height, 0.1, 10000);
      camera.position.set(-30, 80, 200);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera);

      // レンダラー
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 1);
      mount!.appendChild(renderer.domElement);

      // 環境光
      const ambient = new THREE.AmbientLight(0xffffff, 0.4);
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
      const waterGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
      const water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          '/water_n.jpg',
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

      let frameId: number;
      function renderLoop() {
        water.material.uniforms['time'].value += 1.0 / 20.0;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(renderLoop);
      }
      renderLoop();

      // クリーンアップ
      return () => {
        cancelAnimationFrame(frameId);
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
