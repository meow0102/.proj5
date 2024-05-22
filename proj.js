const listEl = document.querySelector(".whyAro-list");
console.log(listEl);
let currentActive = null;
listEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    console.log("click on list");
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

  console.log(event.target.closest(".whyAro-list-item"));
});
