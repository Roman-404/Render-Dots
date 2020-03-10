
const createDot = point => {
    const dot = document.createElement('div')
    dot.classList.add('round')
    dot.style.position = 'absolute';
    dot.style.left = `${point.x}px`;
    dot.style.top = `${point.y}px`;
    return dot
};

points.map(e => {
    map.appendChild(createDot(e))
})

map.onmousedown = (e) => {

  const coords = getCoords(map);
  const shiftX = e.pageX - coords.left;
  const shiftY = e.pageY - coords.top;

  for (let i = 0; i <  map.childNodes.length; i++) {
    let dot = map.childNodes[i]
  
  dot.style.position = 'absolute';
  map.appendChild(dot);
  move(e);
  
   function move(e) {
    map.style.left = e.pageX - shiftX + 'px';
    map.style.top = e.pageY - shiftY + 'px';
  };
  
  document.onmousemove = (e) => {
    move(e);
  };
  
  map.onmouseup = () => {
      document.onmousemove = null;
      map.onmouseup = null;
    };
  };
  
  map.ondragstart = () => {
    return false;
  };
  
 function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    }
  }
};