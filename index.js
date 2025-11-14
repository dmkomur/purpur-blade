const burgerBtn = document.querySelector(".burger-button");
const headerSidebar = document.querySelector(".header-sidebar");
const closeBtn = document.querySelector(".close-button");

burgerBtn.addEventListener("click", () => {
    headerSidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    headerSidebar.classList.remove("active");
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("tab-btn-active"));
        btn.classList.add("tab-btn-active");
        tabContents.forEach((c) => (c.style.display = "none"));

        const tabId = btn.dataset.tab;
        document.getElementById(tabId).style.display = "flex";
    });
});

document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active-question");
    });
});
