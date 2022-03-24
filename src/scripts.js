const links = document.querySelectorAll(".nav-link");

links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView();
  });
});
