const notificationAlert = document.querySelector(".notification-success-alert");

function showNotification() {
    notificationAlert.style.display = "inherit";
}

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
    }, 2000); 
});


const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        showNotification();
        setTimeout(function() {
            notificationAlert.style.display = "none";
        }, 3000);
    });

});
