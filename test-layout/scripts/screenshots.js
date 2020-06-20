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

  function getScreenStyle(element, value){
    return window.getComputedStyle(element).getPropertyValue(value);
  }

  function setStyle(element, property, value){
    element.style[property] = value;
  }

  function updateScreenshots(){
    for(var i = 1; i <= document.getElementsByClassName('screenshot').length; i++){
        screenshots[i-1] = new Screen(
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'display'),
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'left'),
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'right'),
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'width'),
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'height'),
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'top'),
          getScreenStyle(document.getElementsByClassName("screenshot-"+i)[0], 'z-index')
        );
    }
  }

  updateScreenshots();

  document.getElementsByClassName('screenshots__arrow-right')[0].onclick = function(){

    for(var i = 1; i <= document.getElementsByClassName('screenshot').length; i++){

      if(i===1){
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'display', screenshots[screenshots.length-1].display);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'left', screenshots[screenshots.length-1].posLeft);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'right', screenshots[screenshots.length-1].posRight);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'width', screenshots[screenshots.length-1].w);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'height', screenshots[screenshots.length-1].h);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'top', screenshots[screenshots.length-1].t);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'zIndex', screenshots[screenshots.length-1].zIndex);
      }
      else{
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'display', screenshots[i-2].display);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'left', screenshots[i-2].posLeft);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'right', screenshots[i-2].posRight);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'width', screenshots[i-2].w);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'height', screenshots[i-2].h);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'top', screenshots[i-2].t);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'zIndex', screenshots[i-2].zIndex);
      }
    }
    updateScreenshots();
  }

  document.getElementsByClassName('screenshots__arrow-left')[0].onclick = function(){

    for(var i = 1; i <= document.getElementsByClassName('screenshot').length; i++){

      if(i===screenshots.length){
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'display', screenshots[0].display);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'left', screenshots[0].posLeft);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'right', screenshots[0].posRight);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'width', screenshots[0].w);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'height', screenshots[0].h);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'top', screenshots[0].t);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'zIndex', screenshots[0].zIndex);
      }
      else{
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'display', screenshots[i].display);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'left', screenshots[i].posLeft);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'right', screenshots[i].posRight);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'width', screenshots[i].w);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'height', screenshots[i].h);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'top', screenshots[i].t);
        setStyle(document.getElementsByClassName("screenshot-"+i)[0], 'zIndex', screenshots[i].zIndex);
      }
    }

    updateScreenshots();
  }

}
