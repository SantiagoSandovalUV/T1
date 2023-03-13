// setup the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create the beam
var beamGeometry = new THREE.BoxGeometry( 2, 0.1, 0.1 );
var beamMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
var beam = new THREE.Mesh( beamGeometry, beamMaterial );
beam.position.y = -0.5;
scene.add( beam );

// add lights
var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 10, 10, 10 );
scene.add( light );
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

// simulate deflection
var deflection = 0.1;
var angle = 0;
var speed = 0.05;
var update = function () {
  angle += speed;
  beam.position.y = -0.5 + Math.sin(angle) * deflection;
  beam.rotation.z = Math.sin(angle) * deflection;
};

// render the scene
var render = function () {
  requestAnimationFrame( render );
  update();
  renderer.render( scene, camera );
};
render();
