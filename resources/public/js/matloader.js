var loader = new THREE.TextureLoader();
var matstroke;
// load a resource


function initMat() {loader.load(
	// resource URL
	'img/test2.png',
	// Function when resource is loaded
	function ( texture ) {
		// do something with the texture
		matstroke = new THREE.MeshBasicMaterial( {
			map: texture
		 } );
	},
	// Function called when download progresses
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// Function called when download errors
	function ( xhr ) {
		console.log( 'An error happened' );
	}
);
}
