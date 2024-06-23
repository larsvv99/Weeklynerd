// Open/close hamburgermenu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("header nav button");
    menuButton.addEventListener("click", menuOpenen);

    function menuOpenen() {
        const deHeader = document.querySelector("header");
        deHeader.classList.toggle("menuOpen");
    }

});


