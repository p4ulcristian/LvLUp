

var startx = 0;
var starty = 0;

function dragging()




{


  interact('.draggable')

  .draggable({
    // enable inertial throwing
  /*  inertia: true,
    // keep the element within the area of it's parent
    onstart: function (event) {
      var target = event.target;

      startx = (parseFloat(target.getAttribute('data-x')) || 0);
      starty = (parseFloat(target.getAttribute('data-y')) || 0);
    },
    restrict: {
      restriction: ".gamers .system-row .exit",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
  /*  onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var target = event.target;
    target.style.webkitTransform =
      target.style.transform =
       'translate(0px, 0px)';

       target.setAttribute('data-x', startx);
       target.setAttribute('data-y', starty);
    }*/
  });

  function dragMoveListener (event) {



    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
}
