const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");
const whatsAppBtn = document.getElementById("whatsAppBtn");
const emailBtn = document.getElementById("emailBtn");
const closeModal = document.getElementById("closeModal");

// إظهار النافذة
contactBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// زر واتساب
whatsAppBtn.addEventListener("click", () => {
    window.location.href = "https://wa.me/+201015687900"; // حط رقمك هنا
});

// زر الإيميل
emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:pacc8834@gmail.com"; // حط إيميلك هنا
});

// زر إغلاق النافذة
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
