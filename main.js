let images = document.querySelectorAll(".image");
images.forEach((item) => {
  item.addEventListener("click", () => {
    images.forEach((im) => {
      im.classList.remove("active");
    });
    item.classList.add("active");
  });
});
