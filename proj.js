const listEl = document.querySelector(".whyAro-list");
let currentActive = null;
listEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  const liEl = event.target.closest(".whyAro-list-item");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
  if (currentActive === liEl) {
    currentActive = null;
    return;
  }
  liEl.classList.add("active");
  currentActive = liEl;
});
