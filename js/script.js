document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => {
      navList.classList.toggle("show");
    })
  );

  window.addEventListener("scroll", addShadow);
});

const time = document.querySelector(".time");

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  time.innerHTML = year;
};

handleCurrentYear();
