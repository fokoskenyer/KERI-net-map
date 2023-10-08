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