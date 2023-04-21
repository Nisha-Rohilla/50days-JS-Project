const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivaclass();
    panel.classList.add("active");
    // console.log(123);
  });
});

function removeActivaclass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
