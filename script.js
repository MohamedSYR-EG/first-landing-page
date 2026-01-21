document.getElementById("contactBtn").addEventListener("click", function () {
    const confirmContact = confirm("Do you want to contact me on WhatsApp?");

    if (confirmContact) {
        window.location.href = "https://wa.me/+201015687900";
    }
});
