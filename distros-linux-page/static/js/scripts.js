document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".hamburguer");
  const menu = document.querySelector(".menu");

  let active = false;
  menu.style.display = 'none';

  menuToggle.addEventListener("click", function () {
    if (active) {
      menu.style.display = 'none';
      active = false;
    } else {
      menu.style.display = 'block';
      active = true;
    }
  });
});
