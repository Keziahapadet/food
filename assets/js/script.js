'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

/**
 * filter food menu
 */

const filterBtns = document.querySelectorAll(".filter-btn");
const foodMenuList = document.querySelector(".food-menu-list");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const filterValue = this.getAttribute("data-filter");
    foodMenuList.classList.add("active");
    const foodMenuItems = document.querySelectorAll(".food-menu-card");
    foodMenuItems.forEach((item) => {
      if (item.getAttribute("data-filter") === filterValue) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
  
  });
});
    });
  


/**
 * order now button
 */

const orderNowBtns = document.querySelectorAll(".food-menu-btn");

orderNowBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const foodName = this.parentNode.parentNode.querySelector(".card-title").textContent;
    const foodPrice = this.parentNode.parentNode.querySelector(".price").textContent;
    const orderSummary = You have ordered ${foodName} for ${foodPrice}.;
    alert(orderSummary);
    // Send the order data to the server
  });
});

/**
 * book a table button
 */

const bookTableBtn = document.querySelector(".btn-book-table");

bookTableBtn.addEventListener("click", function () {
  const bookTableForm = document.querySelector(".book-table-form");
  bookTableForm.classList.add("active");
});

const bookTableForm = document.querySelector(".book-table-form");
const bookTableCloseBtn = document.querySelector(".book-table-close-btn");

bookTableCloseBtn.addEventListener("click", function () {
  bookTableForm.classList.remove("active");
});

bookTableForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const phone = formData.get("phone_number");
  const date = formData.get("booking_date");
  const time = formData.get("booking_time");
  const people = formData.get("number_of_people");
  const message = formData.get("message");
  const bookingSummary = You have booked a table for ${people} people on ${date} at ${time}.;
  alert(bookingSummary);
  // Send the booking data to the server
});

/**
 * footer form submission
 */

const footerForm = document.querySelector(".footer-form");

footerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get("full_name");
  const email = formData.get
