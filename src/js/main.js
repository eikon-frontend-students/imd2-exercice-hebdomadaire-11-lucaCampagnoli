const buttonEl = document.querySelector(".button");
const labelEl = buttonEl.querySelector(".like");
const countEl = buttonEl.querySelector(".like-nbrs");
const iconEl = buttonEl.querySelector("i");

buttonEl.addEventListener("click", () => {
  buttonEl.classList.toggle("is-active");
  labelEl.classList.toggle("is-active");
  countEl.classList.toggle("is-active");
  iconEl.classList.toggle("is-active");

  const value = Number(countEl.textContent);
  countEl.textContent = value + 1;

  setTimeout(() => {
    buttonEl.classList.remove("is-active");
    labelEl.classList.remove("is-active");
    countEl.classList.remove("is-active");
    iconEl.classList.remove("is-active");
  }, 2000);
});
