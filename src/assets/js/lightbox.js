const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-thumbnail").forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
    modalImg.style.width = "auto"; // normal image width
    modalImg.style.height = "auto"; // normal image height
  });
});

closeBtn.onclick = () => (modal.style.display = "none");

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};
