import "./style.css";
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

showModal.forEach((item) =>
  item.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  })
);

closeModal.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
