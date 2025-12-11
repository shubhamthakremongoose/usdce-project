import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundBlocks() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // Create cubes
        const cubes = [];
        const geometry = new THREE.PlaneGeometry(0.3, 0.3);

        for (let i = 0; i < 40; i++) {
            const material = new THREE.MeshStandardMaterial({
                color: "#4f46e5",
                transparent: true,
                opacity: 0.1,
            });

            const cube = new THREE.Mesh(geometry, material);

            cube.position.set(
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                Math.random() * -20 // start cubes deep in background
            );

            scene.add(cube);
            cubes.push(cube);
        }

        // Lights
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(2, 3, 4);
        scene.add(light);

        // Mouse movement
        const mouse = { x: 0, y: 0 };
        window.addEventListener("mousemove", (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            cubes.forEach((cube) => {
                // Move cube toward camera
                cube.position.z += 0.02;

                // Reset cube when it reaches front
                if (cube.position.z > 5) {
                    cube.position.z = -20;
                }

                // Mouse parallax effect
                cube.position.x += mouse.x * 0.002;
                cube.position.y += mouse.y * 0.002;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 -z-10 w-screen h-screen pointer-events-none"
        />
    );
}
