import { useEffect } from 'react';
import * as THREE from 'three';
import { colors } from '../styles/colors';

const ThreeDBackground = () => {
  useEffect(() => {
    //Texture Loader
    const loader = new THREE.TextureLoader();
    const circle = loader.load('./images/circle.png');

    // Canvas
    const canvas = document.querySelector('canvas.webgl');

    // Scene
    const scene = new THREE.Scene();

    // Objects
    // const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    //in the cyclone!
    // const geometry = new THREE.TorusKnotGeometry(5, 0.2, 1600, 100);
    //cyclone comes to you!
    const geometry = new THREE.TorusKnotGeometry(5, 1, 1000, 100);
    //wave dimension
    // const geometry = new THREE.TorusKnotGeometry(50, 10, 1600, 100);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const posArray = new Float32Array(particlesCount * 3);

    //add stars
    for (let i = 0; i < particlesCount * 3; i++) {
      //   posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3),
    );

    // Materials
    const material = new THREE.PointsMaterial({
      //change size of points
      color: colors.brightSkyBlue,
      size: 0.005,
    });
    // material.color = new THREE.Color(0xff0000);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: colors.brightSkyBlue,
      //   blending: THREE.AdditiveBlending,
      map: circle,
      transparent: true,
    });

    // Mesh
    const sphere = new THREE.Points(geometry, material);
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(sphere, particlesMesh);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100,
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      //@ts-ignore
      canvas: canvas,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //changes background color
    renderer.setClearColor(new THREE.Color('#fff'), 1);

    //Mouse
    let mouseX = 0;
    let mouseY = 0;

    const animateParticles = (event: any) => {
      mouseY = event.clientY;
      mouseX = event.clientX;
    };
    document.addEventListener('mousemove', animateParticles);

    /**
     * Animate
     */

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;
      particlesMesh.rotation.y = -0.1 * elapsedTime;

      if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
      }

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);
  return (
    <div className="flex w-full h-full absolute -z-10">
      <canvas className="webgl block overflow-hidden flex-1" />
    </div>
  );
};

export default ThreeDBackground;
