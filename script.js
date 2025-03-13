document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Cek mode yang tersimpan di local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Mode Terang";
    }

    // Event listener buat toggle mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️ Mode Terang";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙 Mode Gelap";
        }
    });
});
