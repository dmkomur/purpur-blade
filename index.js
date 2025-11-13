const burgerBtn = document.querySelector(".burger-button");
const headerSidebar = document.querySelector(".header-sidebar");
const closeBtn = document.querySelector(".close-button");

burgerBtn.addEventListener("click", () => {
    headerSidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    headerSidebar.classList.remove("active");
});
