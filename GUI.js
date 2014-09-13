

function GUI( PARAMS ,  params ){

  this.params = _.defaults( params || {} ,{
    domElement: window.body,
  });

  this.PARAMS = PARAMS;

  var gui = new dat.GUI({autoPlace:false});

  this.domElement = this.params.domElement;
  this.domElement.appendChild(gui);


  this.soul = gui.addFolder( 'Soul' );
  this.body = gui.addFolder( 'Body' );




}

GUI.prototype.addColor = function( folder , u ){

}

GUI.prototype.addFloat = function( folder , u ){


}

