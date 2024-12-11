//footer
document.addEventListener("DOMContentLoaded", () => {
    const footerNav = document.getElementById("footer-navigation");
    footerNav.innerHTML = `
        <ul class="footer-nav">
            <a href="index.htm">Home</a>
            <a href="rules.html">Rules</a>
            <a href="submit.html">Submit Photos</a>
            <a href="categories.html">Categories</a>
            <a href="voting.html">Vote</a>
            <a href="gallery.html">Gallery</a>
        </ul>
    `;
});

// Character counter for textarea
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("description");
    const charCount = document.getElementById("charCount");

    if (textarea && charCount) {
        textarea.addEventListener("input", () => {
            const remaining = 100 - textarea.value.length;
            charCount.textContent = `${remaining} characters remaining`;
        });
    }
});

//image preview
document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("photo");
    const fileChosen = document.getElementById("file-chosen");
    const previewImage = document.getElementById("preview-image");

    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];

        if (file) {
            fileChosen.textContent = file.name;

            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    previewImage.src = e.target.result;
                    previewImage.style.display = "block";
                };

                reader.readAsDataURL(file);
            } else {
                previewImage.style.display = "none";
                alert("Please upload a valid image file (JPG, PNG, or GIF).");
            }
        } else {
            fileChosen.textContent = "No file chosen";
            previewImage.style.display = "none";
        }
    });
});