// نتأكد أن كل العناصر تم تحميلها قبل تنفيذ الكود
document.addEventListener("DOMContentLoaded", function() {

    // --- عناصر نافذة التواصل ---
    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const whatsAppBtn = document.getElementById("whatsAppBtn");
    const emailBtn = document.getElementById("emailBtn");
    const closeModal = document.getElementById("closeModal");

    // إظهار نافذة التواصل عند الضغط على زر Contact
    if(contactBtn) {
        contactBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    // زر واتساب
    if(whatsAppBtn) {
        whatsAppBtn.addEventListener("click", () => {
            window.location.href = "https://wa.me/+201015687900"; // حط رقمك هنا
        });
    }

    // زر الإيميل
    if(emailBtn) {
        emailBtn.addEventListener("click", () => {
            window.location.href = "mailto:pacc8834@gmail.com"; // حط إيميلك هنا
        });
    }

    // زر إغلاق النافذة
    if(closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // --- نافذة تأكيد قبل فتح Projec
