window.onscroll = function () {
  const ud_header = document.querySelector(".ud-header");
  const sticky = ud_header.offsetTop;
  const logo = document.querySelector(".header-logo");

  if (window.pageYOffset > sticky) {
    ud_header.classList.add("sticky");
  } else {
    ud_header.classList.remove("sticky");
  }

  // show or hide the back-top-top button
  const backToTop = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};

// ===== responsive navbar
let navbarToggler = document.querySelector("#navbarToggler");
const navbarCollapse = document.querySelector("#navbarCollapse");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("navbarTogglerActive");
  navbarCollapse.classList.toggle("hidden");
});

//===== close navbar-collapse when a  clicked
document
  .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
  .forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");
    })
  );

// ===== Sub-menu
const submenuItems = document.querySelectorAll(".submenu-item");
submenuItems.forEach((el) => {
  el.querySelector("a").addEventListener("click", () => {
    el.querySelector(".submenu").classList.toggle("hidden");
  });
});
