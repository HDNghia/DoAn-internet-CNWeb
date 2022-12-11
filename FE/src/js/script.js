

// swiping banners
let banner = document.querySelector('.home__banner');
let activeIndex = 0;
let prevSlide = null;
let next = () => {
  prevSlide?.removeAttribute('active');
  prevSlide = banner.children[activeIndex];
  banner.children[activeIndex].setAttribute('active', 'prev');
  if (activeIndex == banner.children.length - 1) { activeIndex = 0; }
  else { activeIndex++; }
  banner.children[activeIndex].setAttribute('active', 'next');
}
let looping = setInterval(next, 2000);
// end swiping banners

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () => {
//   searchForm.classList.toggle('active');
//   shoppingCart.classList.remove('active');
//   loginForm.classList.remove('active');
//   navbar.classList.remove('active');
// }

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () => {
//   loginForm.classList.toggle('active');
//   searchForm.classList.remove('active');
//   shoppingCart.classList.remove('active');
//   navbar.classList.remove('active');
// }

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}



function logout() {
  localStorage.setItem("loginUser", false);
  window.location.replace("login.html");
}