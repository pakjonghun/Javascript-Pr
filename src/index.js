import "./style.css";
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const togglaModal = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

showModal.forEach((item) =>
  item.addEventListener("click", () => {
    togglaModal();
  })
);

closeModal.addEventListener("click", () => {
  togglaModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.matches(".hidden")) {
    togglaModal();
  }
});
