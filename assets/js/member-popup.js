console.log("member-popup.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("memberPopup");

    const popupImage = document.getElementById("popupImage");
    const popupName = document.getElementById("popupName");
    const popupRole = document.getElementById("popupRole");

    const popupHomepage = document.getElementById("popupHomepage");
    const popupResearch = document.getElementById("popupResearch");
    const popupThesis = document.getElementById("popupThesis");
    const popupDuration = document.getElementById("popupDuration");

    const homepageSection = document.getElementById("homepageSection");
    const researchSection = document.getElementById("researchSection");
    const thesisSection = document.getElementById("thesisSection");
    const durationSection = document.getElementById("durationSection");

    const closePopup = document.getElementById("closePopup");

    document.querySelectorAll(".member-photo").forEach(photo => {

        photo.addEventListener("click", function () {

            popup.style.display = "flex";

            popupImage.src = this.dataset.image;
            popupImage.alt = this.dataset.name;

            popupName.textContent = this.dataset.name || "";
            popupRole.textContent = this.dataset.role || "";

            /* Homepage */
            if (this.dataset.homepage && this.dataset.homepage.trim() !== "") {
                homepageSection.style.display = "block";
                popupHomepage.href = this.dataset.homepage;
            } else {
                homepageSection.style.display = "none";
            }

            /* Research */
            if (this.dataset.research && this.dataset.research.trim() !== "") {
                researchSection.style.display = "block";
                popupResearch.textContent = this.dataset.research
                    .split("|")
                    .filter(item => item.trim() !== "")
                    .join(", ");
            } else {
                researchSection.style.display = "none";
            }

            /* Thesis */
            if (this.dataset.thesis && this.dataset.thesis.trim() !== "") {
                thesisSection.style.display = "block";
                // popupThesis.textContent = this.dataset.thesis;
                popupThesis.innerHTML = this.dataset.thesis;
            } else {
                thesisSection.style.display = "none";
            }

            /* Duration */
            if (this.dataset.duration && this.dataset.duration.trim() !== "") {
                durationSection.style.display = "block";
                popupDuration.textContent = this.dataset.duration;
            } else {
                durationSection.style.display = "none";
            }

        });

    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            popup.style.display = "none";
        }
    });

});