import "../sass/all.scss";

const allCups = document.querySelectorAll(".cups");

allCups.forEach((el) => {
  el.addEventListener("click", function () {
    console.log("click");
    let level = Number(this.getAttribute("level"));
    level += 24;
    if (level <= 96) {
      this.style.backgroundPosition = "0" + level + "%";
    }
    this.setAttribute("poziom", level);
  });
});
