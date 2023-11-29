function showOptions() {
    var popup = document.getElementById("optionsPopup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "block";
    overlay.style.display = "block";
}

function hideOptions() {
    var popup = document.getElementById("optionsPopup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
}

function downloadApp(platform) {
    hideOptions();

    if (platform === "android") {
        window.location.href ="https://play.google.com/store/apps/details?id=com.ctxpress.citypay";
    } else if (platform === "iphone") {
        window.location.href ="https://apps.apple.com/nz/app/citypay-nepal/id1643110573";
    }
}
function openWebsite() {
    window.location.href = "https://agent.citywallet.com.np/";
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then((response) => response.text())
        .then((data) => {
        // Inject the fetched HTML content into the body of the document
            document.body.innerHTML = data + document.body.innerHTML;
        })
        .catch((error) => console.error("Error fetching navbar:", error));
});