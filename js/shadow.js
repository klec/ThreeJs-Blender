var camera, scene, renderer, geometry, material, mesh;

function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 2000 );
    camera.position.x = 0;
    camera.position.y = 150;
    camera.position.z = 600;

    // scene

var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 1024;
function createAreaEmitter( light ) {

        var geometry = new THREE.CubeGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: light.color.getHex(), vertexColors: THREE.FaceColors } );

        var backColor = 0x222222;

        geometry.faces[ 5 ].color.setHex( backColor );
        geometry.faces[ 4 ].color.setHex( backColor );
        geometry.faces[ 2 ].color.setHex( backColor );
        geometry.faces[ 1 ].color.setHex( backColor );
        geometry.faces[ 0 ].color.setHex( backColor );

        var emitter = new THREE.Mesh( geometry, material );

        emitter.position = light.position;
        emitter.quaternion = light.quaternion;
        emitter.scale.set( light.width * 2, 0.2, light.height * 2 );

        return emitter;

}
    var ambient = new THREE.AmbientLight( 0x101030 );
    scene.add( ambient );

    var light  = new THREE.SpotLight();
    light.position.set( -100, 300, 210 );
//    light.target.position.set( 10, 40, 20 );
    light.castShadow = true;
//
//    light.shadowCameraNear = 1200;
//    light.shadowCameraFar = 2500;
//    light.shadowCameraFov = 50;
//
//    //light.shadowCameraVisible = true;
//
//    light.shadowBias = 0.000001;
//    light.shadowDarkness = 0.5;
//
//    light.shadowMapWidth = SHADOW_MAP_WIDTH;
//    light.shadowMapHeight = SHADOW_MAP_HEIGHT;
//    scene.add( light );
//    
//    light2 = light.clone();
//    light2.position.set( 000, 300, 210 );
//    scene.add( light2 );
//
//    light3 = light.clone();
//    light3.position.set( 100, 300, 210 );
//    scene.add( light3 );
//    light4 = light.clone();
//    light4.position.set( 200, 300, 210 );
//    scene.add( light4 );
//
//    light5 = light.clone();
//    light5.position.set( -200, 300, 210 );
//    scene.add( light5 );

areaLight1 = new THREE.AreaLight( 0xffffff, 1 ); 
areaLight1.position.set( 100.0001, 200.0001, 318.5001 ); 
areaLight1.rotation.set( -0.74719, 0.0001, 0.0001 ); 
areaLight1.width = 100; 
areaLight1.height = 1; 
scene.add( areaLight1 );
var meshEmitter = createAreaEmitter( areaLight1 );

scene.add( meshEmitter );
//createHUD();
//createScene();
    // texture


    //var tera_material =  ;//{map: tera_texture});
    var tera = new THREE.Mesh(new THREE.PlaneGeometry(300, 300,500,500), new THREE.MeshLambertMaterial({color:0x008cf0}));
    tera.rotation.x = -Math.PI/2;
    tera.position.y = -50;
    tera.receiveShadow = true;
    tera.castShadow = false;
    scene.add(tera);
    
    var cube_geom = new THREE.CubeGeometry(50,50,50);
    cube = new THREE.Mesh(cube_geom, new THREE.MeshLambertMaterial({color:0xaabbcc}));
    cube.receiveShadow = false;
    cube.castShadow = true;
    scene.add(cube);


    // renderer

    renderer = new THREE.WebGLRenderer();
    renderer.shadowMapEnabled = true;
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    renderer.render( scene, camera );

    //

    window.addEventListener( 'resize', onWindowResize, false );


}

function animate() {

    // Include examples/js/RequestAnimationFrame.js for cross-browser compatibility.
    requestAnimationFrame( animate );
    cube.rotation.y += 0.01;
    camera.position.x += ( mouseX - camera.position.x ) * .1;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}

function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX ) / 2;
        mouseY = ( event.clientY - windowHalfY ) / 2;

}


