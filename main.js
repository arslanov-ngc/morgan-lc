// loader
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');

  setTimeout(function(){
      loader.style.opacity = '0';
      setTimeout(function(){
          loader.style.display = 'none';
      }, 1000);
  }, 2000);

// to up
const toUp = document.querySelector('.to-up');
toUp.addEventListener('click', () => {
  window.scrollTo(0 , 0);
});
window.addEventListener('scroll', () => {
  toUp.classList.toggle('start', window.scrollY > 4 * 1000);
});

// sticky navbar
setTimeout(function(){
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
}, 2100);

// tabs
const tabs = document.querySelectorAll(".type"),
  tabParent = document.querySelector(".job-types"),
  tabContent = document.querySelectorAll(".card-teacher");
function hideTabContent() {
  tabContent.forEach(item => {
    item.classList.add("none");
    item.classList.remove("show", "fade");
  });
  tabs.forEach(item => {
    item.classList.remove("type-active");
  });
}
function showTabContent(i = 0) {
  tabContent[i].classList.add("show", "fade");
  tabContent[i].classList.remove("none");

  tabs[i].classList.add("type-active");
}
hideTabContent();
showTabContent();
tabParent.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("type")) {
    tabs.forEach((item, i) => {
      if (e.target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// slider
{
  const slides = document.querySelectorAll(".comments .col .container .slider .card"),
    slidesWrapper = document.querySelector(".comments .col .container"),
    slidesField = document.querySelector(".comments .col .container .slider"),
    width = getComputedStyle(slidesWrapper).width,
    prev = document.querySelector(".arrow-left .fa-arrow-left"),
    next = document.querySelector(".arrow-right .fa-arrow-right");

  let slideIndex = 1;
  let offset = 0;

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = ".5s ease";

  slides.forEach(slide => {
    slide.style.width = width;
  });

  next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
  });
}
// dropdown
{
  const dropwdownMain = document.querySelector(".dropdown .main");
  const dropwdownContent = document.querySelector(".dropdown .content");
  const dropwdownArrowIcon = document.querySelector(".dropdown .dropdown-arrow-icon");

  dropwdownMain.addEventListener("click", () => {
    dropwdownContent.classList.toggle("dropdown-toggle");
    dropwdownArrowIcon.classList.toggle("arrow-rotate");
  });
}

// hamburger menu

const menu = document.querySelector(".navs ul");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  menu.classList.remove("hamburger-disable");
  menu.classList.add("hamburger-active");
  openBtn.classList.add('none');
  closeBtn.classList.add('block');
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("hamburger-active");
  menu.classList.add("hamburger-disable");
  openBtn.classList.remove('none');
  openBtn.classList.add('block');
  closeBtn.classList.remove('block');
});

});
