/**
  * FUNCTION FOR SCREENSHOT SECTION
  * ACTIVATION ON CLICK AT LEFT OR RIGHT ARROW
  */

window.onload=function(){
  var screenshots = [];

  function Screen(display, posLeft, posRight, w, h, t, zIndex){
    this.display= display;
    this.posLeft= posLeft;
    this.posRight= posRight;
    this.w= w;
    this.h= h;
    this.t=t;
    this.zIndex= zIndex;
  }

  function updateScreenshots(){
    for(var i = 1; i <= document.getElementsByClassName('screenshot').length; i++){
        function screenStyle(value){
          return window.getComputedStyle(document.getElementsByClassName("screenshot-"+i)[0]).getPropertyValue(value);
        }
        screenshots[i-1] = new Screen(screenStyle('display'), screenStyle('left'),
          screenStyle('right'), screenStyle('width'), screenStyle('height'),
          screenStyle('top'), screenStyle('z-index'));
    }
  }

  updateScreenshots();

  document.getElementsByClassName('screenshots__arrow-right')[0].onclick = function(){

    for(var i = 1; i <= document.getElementsByClassName('screenshot').length; i++){

      function setStyle(property, value){
        window.document.getElementsByClassName("screenshot-"+i)[0].style[property] = value;
      }

      if(i===1){
        setStyle('display', screenshots[screenshots.length-1].display);
        setStyle('left', screenshots[screenshots.length-1].posLeft);
        setStyle('right', screenshots[screenshots.length-1].posRight);
        setStyle('width', screenshots[screenshots.length-1].w);
        setStyle('height', screenshots[screenshots.length-1].h);
        setStyle('top', screenshots[screenshots.length-1].t);
        setStyle('zIndex', screenshots[screenshots.length-1].zIndex);
      }
      else{
        setStyle('display', screenshots[i-2].display);
        setStyle('left', screenshots[i-2].posLeft);
        setStyle('right', screenshots[i-2].posRight);
        setStyle('width', screenshots[i-2].w);
        setStyle('height', screenshots[i-2].h);
        setStyle('top', screenshots[i-2].t);
        setStyle('zIndex', screenshots[i-2].zIndex);
      }
    }
    updateScreenshots();
  }

  document.getElementsByClassName('screenshots__arrow-left')[0].onclick = function(){

    for(var i = 1; i <= document.getElementsByClassName('screenshot').length; i++){

      function setStyle(property, value){
        window.document.getElementsByClassName("screenshot-"+i)[0].style[property] = value;
      }

      if(i===screenshots.length){
        setStyle('display', screenshots[0].display);
        setStyle('left', screenshots[0].posLeft);
        setStyle('right', screenshots[0].posRight);
        setStyle('width', screenshots[0].w);
        setStyle('height', screenshots[0].h);
        setStyle('top', screenshots[0].t);
        setStyle('zIndex', screenshots[0].zIndex);
      }
      else{
        setStyle('display', screenshots[i].display);
        setStyle('left', screenshots[i].posLeft);
        setStyle('right', screenshots[i].posRight);
        setStyle('width', screenshots[i].w);
        setStyle('height', screenshots[i].h);
        setStyle('top', screenshots[i].t);
        setStyle('zIndex', screenshots[i].zIndex);
      }
    }

    updateScreenshots();
  }

}
