const closeBtn = document.querySelectorAll(".close-btn");
const modal = document.querySelector("#popupLogin");
const modalSignup = document.querySelector("#popupSignup");
const shopBtn = document.querySelector(".shop-btn");
const signupLink = document.querySelector("#signupLink");
const loginLink = document.querySelector("#loginLink");

window.addEventListener("load", function() {
    const loader = document.querySelector("#wifi-loader");
    const container = document.querySelector(".header");
    const heroSection = document.querySelector(".hero-section");
    const productSection = document.querySelector(".product-section");
    const aboutUsSection = document.querySelector(".about-us-section");
    setTimeout(function() {
        container.style.display = "inherit";
        heroSection.style.display = "flex";
        aboutUsSection.style.display = "grid";
        productSection.style.display = "inherit";
        loader.style.display = "none";
    }, 1500); 

    // if (modalSignup.classList.contains("active") === true) {
        
    // } else {
    //     setTimeout(function() {
    //     modal.classList.add("active");
    //     }, 10000);
    // }
});


const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        modal.classList.add("active");
        // window.alert("Product added to cart! \n Project is still in development, so the cart functionality is not yet implemented.");
        // showNotification();
        // setTimeout(function() {
        //     notificationAlert.style.display = "none";
        // }, 3000);
    });
});

shopBtn.addEventListener("click", function() {
    modal.classList.add("active");
});

signupLink.addEventListener("click", function() {
    modal.classList.remove("active");
    modalSignup.classList.add("active");
});

loginLink.addEventListener("click", function() {
    modalSignup.classList.remove("active");
    modal.classList.add("active");
});

closeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        modal.classList.remove("active");
        modalSignup.classList.remove("active");
    });
});
