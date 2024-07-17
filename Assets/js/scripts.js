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

  //Nav hamburgerburger selections
  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () =>{
    ul.classList.toggle("show")
  });
  


