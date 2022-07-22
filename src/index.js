const nav = document.getElementById("navbar");

let currPos = window.scrollY;
document.addEventListener("scroll", () => {
  if (window.scrollY > currPos) {
    nav.classList.remove("sticky");
    //scroll down
  } else if (currPos < 50) {
    nav.classList.remove("sticky");
  } else {
    //scroll up
    nav.classList.add("sticky");
  }
  currPos = window.scrollY;
});