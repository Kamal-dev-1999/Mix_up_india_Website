// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle mobile navigation menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the menu when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideNav = navLinks.contains(e.target) || menuBtn.contains(e.target);
  if (!isClickInsideNav) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Dropdown Toggle Functionality
function toggleDropdown(element) {
  const parentLi = element.parentElement;
  const dropdownContent = parentLi.querySelector(".dropdown-content");

  // Close all dropdowns except the one clicked
  document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
    if (dropdown !== dropdownContent) {
      dropdown.classList.remove("open");
    }
  });

  // Toggle the clicked dropdown
  dropdownContent.classList.toggle("open");
}

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
});

// View More / View Less Functionality
const blogCards = document.querySelectorAll(".blog__card");
const viewMoreBtn = document.getElementById("viewMoreBtn");
const viewLessBtn = document.getElementById("viewLessBtn");

// Hide all but the first 3 cards initially
for (let i = 3; i < blogCards.length; i++) {
  blogCards[i].classList.add("hidden");
}

// View More button logic
viewMoreBtn.addEventListener("click", () => {
  blogCards.forEach((card) => card.classList.remove("hidden"));
  viewMoreBtn.style.display = "none";
  viewLessBtn.style.display = "inline-block";
});

// View Less button logic
viewLessBtn.addEventListener("click", () => {
  blogCards.forEach((card, index) => {
    if (index >= 3) card.classList.add("hidden");
  });
  viewLessBtn.style.display = "none";
  viewMoreBtn.style.display = "inline-block";
});

// ScrollReveal for animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header animations
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container .btn", { ...scrollRevealOption, delay: 500 });

// About section animations
ScrollReveal().reveal(".about__item", { ...scrollRevealOption, interval: 500 });

// Stats section animations
ScrollReveal().reveal(".stats__image img", { ...scrollRevealOption, origin: "right", interval: 500 });
ScrollReveal().reveal(".stats__card", { interval: 500, duration: 500, delay: 1000 });

// Blog section animations
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });

// Swiper Slider Initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
















// Function to toggle dropdown visibility
function toggleDropdown(element) {
  const dropdownContent = element.nextElementSibling; // Get the dropdown content

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  allDropdowns.forEach(function (dropdown) {
    if (dropdown !== dropdownContent) {
      dropdown.style.display = 'none';
    }
  });

  // Toggle the clicked dropdown
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}

// Close dropdown if clicked outside
document.addEventListener('click', function (event) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function (dropdown) {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropdownButton = dropdown.querySelector('.dropbtn');
    
    // If the click is outside the dropdown (button or content), close the dropdown
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});








// for mobile screen
// Handle Dropdown Click for Mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('.dropbtn');
  const content = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    content.classList.toggle('show');
  });
});

// Close Dropdown if Clicked Outside
window.addEventListener('click', (e) => {
  dropdowns.forEach((dropdown) => {
    const content = dropdown.querySelector('.dropdown-content');
    if (!dropdown.contains(e.target)) {
      content.classList.remove('show');
    }
  });
});







