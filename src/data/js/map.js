const svg = document.getElementById("Layer_1");
const centerX = svg.clientWidth / 2;
const centerY = svg.clientHeight / 2;

let isDragging = false;
let previousX, previousY;
let currentScale = 1;




function test(story) {
  if (story == "fsz") {
    document.getElementById("fsz").style.display = "block";
    document.getElementById("it").style.display = "none";
  } 
  if (story == "it") {
    document.getElementById("fsz").style.display = "none";
    document.getElementById("it").style.display = "block";
  } 
  if (story == "1m") {

  } else {
    
  }

}

//blue button
//DONT WORK NEEDS FIXING
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (btn) {
          btn.style.backgroundColor = "#222";
        });
        this.style.backgroundColor = "blue";
      });
    });
  });
//DONT WORK NEEDS FIXING


svg.addEventListener("wheel", (event) => {
    event.preventDefault();
    const zoomAmount = event.deltaY > 0 ? 0.9 : 1.1;
    currentScale *= zoomAmount;
    
    svg.style.transformOrigin = `${centerX}px ${centerY}px`;
    svg.style.transform = `scale(${currentScale})`;
});




svg.addEventListener("mousedown", (event) => {
    isDragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
});
document.addEventListener("mouseup", () => {
    isDragging = false;
});
document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        const deltaX = event.clientX - previousX;
        const deltaY = event.clientY - previousY;
        
        svg.viewBox.baseVal.x -= deltaX / currentScale;
        svg.viewBox.baseVal.y -= deltaY / currentScale;
        
        previousX = event.clientX;
        previousY = event.clientY;
    }
});
