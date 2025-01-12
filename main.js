// Import Three.js
import * as THREE from 'three';
// import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

// Create the scene
const scene = new THREE.Scene();

// Set up the orthographic camera
const aspect = 2 * window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(
    -aspect, aspect, 2, -2, 0.1, 1000
);
camera.position.x = -3;
camera.position.z = 5;
camera.position.y = 3;
camera.lookAt(0, 0, 0);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the first cube
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
geometry1.translate(-0.5, 0, 0);
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube1 = new THREE.Mesh(geometry1, material1);
// cube1.translateX(-0.5);
// cube1.position.set(-0.5, 0, 0);

// Create the second cube
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
geometry2.translate(+0.5, 0, 0);
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const cube2 = new THREE.Mesh(geometry2, material2);
// cube2.translateX(+0.5);
// cube2.translate(+0.5, 0, 0);
// cube2.position.set(+0.5, 0, 0);

// Merge the geometries
const mergedGeometry = BufferGeometryUtils.mergeGeometries([cube1.geometry, cube2.geometry]);

// Create a mesh from the merged geometry
const material3 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mergedMesh = new THREE.Mesh(mergedGeometry, material3);

// Add the merged mesh to the scene
scene.add(cube1);
scene.add(cube2);
scene.add(mergedMesh);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.left = -aspect;
    camera.right = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
