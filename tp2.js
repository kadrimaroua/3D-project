// Import Three.js (if using a module system, otherwise use script tags as above)

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(6, 1, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load(
  'testtube.glb', // Path to your .glb file
  function (gltf) {
    const model = gltf.scene;
    model.position.set(0, 0, 0); // Adjust model position if needed
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
const controls = new THREE.OrbitControls(camera, renderer.domElement);

