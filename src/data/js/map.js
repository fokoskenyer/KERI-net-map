const fosz = document.getElementById("fsz");



function changeStory(story) {
  if (story === "fsz") {
    fosz.style.width = "1490px";
    fosz.style.position = "fixed";
    fosz.style.marginLeft = "10%"
    fosz.style.marginTop = "0px";
    fosz.innerHTML = `<img src="data/img/fsz.svg" alt="">`;
} else if (story === "it") {
    fosz.style.width = "1100px";
    fosz.style.position = "fixed";
    fosz.style.marginLeft = "21%";
    fosz.style.marginTop = "150px";
    fosz.innerHTML = `<img src="data/img/it.svg" alt="">`;
} else if (story === "1m") {
    fosz.style.width = "2000px";
    fosz.style.marginLeft = "7%";
    fosz.style.paddingRight = "4%";
    fosz.innerHTML = `<img src="data/img/1m.svg" alt="">`;

} else if (story === "2m") {
    fosz.style.width = "2000px";
    fosz.style.marginLeft = "7%";
    fosz.style.paddingRight = "4%";
    fosz.innerHTML = `<img src="data/img/2m.svg" alt="">`;
}
}

//blue button
//DONT WORK NEEDS FIXING
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
//DONT WORK NEEDS FIXING