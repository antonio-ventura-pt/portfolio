import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Canva() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        // Set up the Three.js renderer
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Set up the scene, camera, and cube
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        // black background
        const background = new THREE.Color(0x498C8A);
        scene.background = background;
        const geometry = new THREE.BoxGeometry(2.5, 2.5, 0.1);
        const planeGeometry = new THREE.PlaneGeometry(2.5, 2.5, 0.1);
        const planeMaterial = new THREE.MeshStandardMaterial({
            color: 0x0000000,
            wireframe: false
        });

        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        scene.add(plane);
        const material = new THREE.MeshStandardMaterial({
            //white
            color: 0xffffff,
            wireframe: false
        });
        //add light

        const light2 = new THREE.SpotLight(0xffffff, 0.8);
        light2.position.set(2, 2, 0.8);
        light2.castShadow = true;
        scene.add(light2);

        // red light
        const light3 = new THREE.SpotLight(0xff1200, 0.8);
        light3.angle = Math.PI / 4;
        light3.position.set(-2, -2, 0.8);
        scene.add(light3);

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;

        // Define the animation function
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;

            renderer.render(scene, camera);
        }

        let isDragging = false;
        let previousMousePosition = {
            x: 0,
            y: 0
        };
        canvas.addEventListener('mousedown', event => {
            isDragging = true;
        });
        canvas.addEventListener('mouseup', event => {
            isDragging = false;
        });
        canvas.addEventListener('mousemove', event => {
            if (!isDragging) {
                return;
            }
            const { clientX, clientY } = event;
            const mouseX = clientX - canvas.offsetLeft;
            const mouseY = clientY - canvas.offsetTop;
            const deltaMousePosition = {
                x: mouseX - previousMousePosition.x,
                y: mouseY - previousMousePosition.y
            };
            cube.rotation.x += deltaMousePosition.y * 0.01;
            cube.rotation.y += deltaMousePosition.x * 0.01;
            previousMousePosition = {
                x: mouseX,
                y: mouseY
            };
        });

        // Start the animation loop
        animate();
    }, []);

    return (
        <div className="w-full h-screen">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export { Canva };