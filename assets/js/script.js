'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// contact form

// const form = document.querySelector("form");
// const fullName = document.querySelector("name");
// const email = document.querySelector("email");
// const phone = document.querySelector("phone");
// const subject = document.querySelector("subject");
// const mess = document.querySelector("message");

// function sendEmail(){
//   const bodyMessage = `Full Name: ${fullName.value} \n Email: ${email.value} \n Phone Number: ${phone.value} \n Subject: ${subject.value} \n Message: ${mess.value}`;

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "utkarshchoudhary1573@gmail.com",
//     Password : "DCE3A304405DA8D8C1CE52A40781FBA5569B",
//     To : 'utkarshchoudhary1573@gmail.com',
//     From : "utkarshchoudhary1573@gmail.com",
//     Subject : subject.value,
//     Body : bodyMessage
// }).then(
//   message => alert(message)
// );
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendEmail();
//   form.reset();
// });