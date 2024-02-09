const navbar = document.querySelector("#sticky-navbar")
document.addEventListener("scroll", (event) => {
  const { top } = navbar.getBoundingClientRect();
  if (top > 5) {
    navbar.classList.remove("navbar-sticky")
  } else {
    navbar.classList.add("navbar-sticky")
  }
});
