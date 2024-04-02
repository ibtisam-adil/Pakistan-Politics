
import rulerInfo from "./array.js";

const allLeaders = document.querySelector(".all-leaders");
const moreButton = document.querySelector(".more");
const overlay = document.querySelector(".overlay");

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

const renderData = (startIndex, endIndex) => {
  const rulers = rulerInfo.slice(startIndex, endIndex).map((r) => generateRulerData(r));
  allLeaders.innerHTML = rulers.join("");
};

function updateContentBasedOnWidth() {
    if (window.innerWidth <= 768) {
        renderData(0, 3);
    } else {
        renderData(0, rulerInfo.length);
    }
}

// Call the function initially when the page loads
updateContentBasedOnWidth();

// Add event listener for window resize
window.addEventListener('resize', updateContentBasedOnWidth);


moreButton.addEventListener("click", () => {
    renderData(0, rulerInfo.length);
    moreButton.classList.toggle("hidden");
});


// menu-button
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  overlay.classList.toggle("hide");
  navLinks.classList.toggle("hidden");
});


