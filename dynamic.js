import rulerInfo from "./array.js";

const allLeaders = document.querySelector(".all-leaders");
const generateRulerData = (rInfo) => {
  return `
    <div class="leader">
        <img src="${rInfo.img}"/>
        <div class="person">
            <p class="leader-name">${rInfo.name}</p>
            <p class="party">${rInfo.party}</p>
            <p class="party-desc">${rInfo.partyDesc}</p>
        </div>
    </div>
    `;
};

const renderData = () => {
  const rulers = rulerInfo.map((rInfo) => generateRulerData(rInfo));
  allLeaders.innerHTML = rulers.join("");
};

renderData();

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  overlay.classList.toggle("hide");
  navLinks.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});
