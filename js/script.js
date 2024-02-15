function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon"); // Corregí "hamburger-icon" a "hamburguer-icon"
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

