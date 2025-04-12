// ---------------- Sistema do Dark Mode ----------------
const darkMode = "rgb(21, 21, 135)";
const lightMode = "rgb(66, 62, 62)"
const btn = document.querySelector("#btnDarkMode");
const root = document.documentElement;

const darkColor = "#1c1c1c";
const lightColor = "whitesmoke";

btn.addEventListener("click", () => {
    const indicator = document.querySelector(".indicator");
    var mode = getComputedStyle(indicator).getPropertyValue("background-color");

    console.log(mode)

    if(mode == lightMode) {
        console.log("passou para o modo escuro");
        document.getElementById("indicator").style.cssText = `transform: translateX(22px); background-color: ${darkMode};`
    }else {
        console.log("passou para o modo claro");
        document.getElementById("indicator").style.cssText = `background-color: ${lightMode};`
    }


    if(mode == darkMode) {
        // cor do site com o modo escuro desligado
        root.style.setProperty("--second-color", lightColor);
        root.style.setProperty("--main-color", darkColor);
    }else {
        // cor do site com o modo escuro ligado
        root.style.setProperty("--second-color", darkColor);
        root.style.setProperty("--main-color", lightColor);
    }
});

// ---------------- Sistema do Menu com "aside" ----------------
var menuOn = false;
const menu = document.querySelector("aside");
const fillet = document.querySelector(".fillet");
const btnMenu = document.querySelector("#menuBtn");
const closeMenuBtn = document.querySelector("#closeBtn");

btnMenu.addEventListener("click", () => {
    if(!menuOn) {
        fillet.style.display = 'block';
        menu.style.transform = 'translate(-300px, 0)';
        document.body.style.overflowY = 'hidden';
        menuOn = true;
    }
});

closeMenuBtn.addEventListener("click", () => {
    if(menuOn) {
        fillet.style.display = 'none';
        menu.style.transform = 'translate(0, 0)';
        document.body.style.overflowY = 'visible';
        menuOn = false;
    }
});

fillet.addEventListener("click", () => {
    if(menuOn) {
        fillet.style.display = 'none';
        menu.style.transform = 'translate(0, 0)';
        document.body.style.overflowY = 'visible';
        menuOn = false;
    }
});

// -- NAV MUDAR COM SCROLL
const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("navbar")
let prevScrollPos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos && currentScrollPos <= 200) {
    menuBtn.style.backgroundColor = 'transparent'
    menuBtn.style.color = '#fefffe'
    nav.style.backgroundColor = 'transparent'
  } else {
    menuBtn.style.backgroundColor = 'var(--alternative-color)'
    menuBtn.style.color = '#0a0b0b'
    nav.style.backgroundColor = '#0a0b0b'
  }

  prevScrollPos = currentScrollPos;
}