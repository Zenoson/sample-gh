/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// var clickedList = ["", ""];
// var index = 0;

var clickedList = ["",""];
var index = 0;

function onClickVote(dom) {
  // 클릭한 dom의 마지막 child 요소의 text content 에 +1
  
  var inList = false;

  for (let i = 0; i < 2; i++) {
    if (clickedList[i] == dom.lastElementChild.id) {
      console.log("in list");

      inList = true;
      dom.lastElementChild.textContent=
        parseInt(dom.lastElementChild.textContent) - 1;
      clickedList[i] = "";


      break;
    }
  }

  if (!inList) {
    for (let i = 0; i < 2; i++) {
      console.log(dom.lastElementChild);
      console.log(clickedList[i]);
      if (clickedList[i] == "") {
        console.log("not in list");
        clickedList[i] = dom.lastElementChild.id;
        
        console.log(dom.lastElementChild.id)

        dom.lastElementChild.textContent=
          parseInt(dom.lastElementChild.textContent) + 1;


        break;
      }
    }
  }


  // if (index == 2) {
  //   index--;
  //   for (let i = 0; i < 2; i++) {
  //     if (dom.lastElementChild == clickedList[i]) {
  //       clickedList[i]="";
  //       dom.lastElementChild.textContent=
  //         parseInt(dom.lastElementChild.textContent) - 1;
  //       break;
  //     }
  //   }
  // }

  // else {

  // var inList = false;
  // for (let i = 0; i < 2; i++) {
  //   if (dom.lastElementChild == clickedList[i]) {
  //     inList = true;
  //     break;
  //   }
  // }

  // if (!inList) {
  //   dom.lastElementChild.textContent =
  //     parseInt(dom.lastElementChild.textContent) + 1;
  //   clickedList[index++] = dom.lastElementChild;
  // } else {
  //   index--;
  //   dom.lastElementChild.textContent = 
  //     parseInt(dom.lastElementChild.textContent) - 1;
  //   for (let i = 0; i < 2; i++) {
  //     if (dom.lastElementChild == clickedList[i]) {
  //       clickedList[i] = "";
  //       break;
  //     }
  //   }
  // }
}
