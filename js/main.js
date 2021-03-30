/* global variables */
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var other = document.getElementById("other");
var perform = document.getElementsByClassName("perform");
var contactForm = document.getElementsByClassName("contact-us");
var signUp = document.getElementById("signUp");
var contactUs = document.getElementById("contactUs");
var reason = document.getElementById('reason');
var skill = document.getElementById('skill');

/* slideshow */
if (slides.length > 1) {
    showSlides();
}

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}

if (other) {
    other.style.display = "none";
}
if (signUp) {
    signUp.style.display = "none";
}
if (contactUs) {
    contactUs.style.display = "none";
}
if (reason) {
    reason.addEventListener("change", showForm, false);
}
if (skill) {
    skill.addEventListener("change", showOther, false);
}

/* shows form based on selected option */
function showForm () {
    var reasonValue = reason.value;
    if (reasonValue == "signUp") {
        signUp.style.display = "block";
    }
    else {
        signUp.style.display = "none";
      }
    if (reasonValue == "comment") {
        contactUs.style.display = "block";
    }
    else {
        contactUs.style.display = "none";
      }
    
  }
/* display other input form for coffee shop sign up */   
function showOther() {
    var skillValue = skill.value;
    if (skillValue == "other") {
        other.style.display = "block";
    }
    else {
        other.style.display = "none";
      }
    
  }
  /* validates and checks coffee sign up form */
  function validateCoffeeForm() {
    for (var i = 0; i < perform.length; i++) {
        if (perform[i].value == '' || 
        perform[i].value == 'select') {
            if (document.querySelector('.error')) {
                document.querySelector('.error').remove();
            }
            perform[i].insertAdjacentHTML('afterend', `<span class='error'><br/>Please fill out your ${perform[i].name}</span>`);
            return false;
        }
    }
    return true;
} 

/* validates and checks contact form */
function validateContactForm() {
    for (var i = 0; i < contactForm.length; i++) {
        if (contactForm[i].value == '') {
            if (document.querySelector('.error')) {
                document.querySelector('.error').remove();
            }
            contactForm[i].insertAdjacentHTML('afterend', `<span class='error'><br/>Please fill out your ${contactForm[i].name}</span>`);
            return false;
        }
    }
    return true;
} 