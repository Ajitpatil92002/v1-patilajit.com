document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

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

let content = document.getElementsByClassName("tabcontent");
let tabs = document.getElementsByClassName("tabs");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", func);
}

function func() {
  Array.from(tabs).forEach((tab) => {
    tab.classList.remove("bg-light-navy");
    tab.classList.replace("md:border-l-green", "md:border-l-lightest-navy");
    tab.classList.replace("border-b-green", "border-b-lightest-navy");
  });
  let id = this.id;
  document.getElementById(id).classList.add("bg-light-navy");
  document
    .getElementById(id)
    .classList.replace("md:border-l-lightest-navy", "md:border-l-green");
  document
    .getElementById(id)
    .classList.replace("border-b-lightest-navy", "border-b-green");
  console.log(document.getElementById(id));
  func2(id);
}

function func2(id) {
  Array.from(content).forEach((cont) => {
    cont.classList.add("hidden");
  });
  if (id === "tab1") {
    document.getElementById("content1").classList.replace("hidden", "block");
  }
  if (id === "tab2") {
    document.getElementById("content2").classList.replace("hidden", "block");
  }
  if (id === "tab3") {
    document.getElementById("content3").classList.replace("hidden", "block");
  }
}
