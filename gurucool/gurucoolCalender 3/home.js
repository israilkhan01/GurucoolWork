const expandBtn = document.querySelector(".grkl-btn");
const expandContainer = document.querySelector(".hidden-container");

expandBtn.addEventListener("click", () => {
  expandContainer.classList.toggle("expand-Container");
});
