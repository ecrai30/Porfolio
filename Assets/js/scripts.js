// scroll to top functionality

document.addEventListener("DOMContentLoaded", () => {
    const scrollUp = document.querySelector("#scroll-up");
  
    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  
    // Show the button when the user scrolls down 100px from the top of the document
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollUp.style.display = "block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  });

 // Adjust scrolling position for navbar links
 const navbarLinks = document.querySelectorAll("#navbar .nav-link");
 const offset = 100; // Adjust this value to set the desired offset

 navbarLinks.forEach(link => {
   link.addEventListener("click", function(event) {
     event.preventDefault();
     const targetId = this.getAttribute("href").substring(1);
     const targetElement = document.getElementById(targetId);
     const targetPosition = targetElement.offsetTop - offset;

     window.scrollTo({
       top: targetPosition,
       behavior: "smooth"
     });
   });
 });

  //Nav hamburgerburger selections
  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () =>{
    ul.classList.toggle("show")
  });
  
  // Close hamburger menu when a link is clicked

// Select nav links

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


