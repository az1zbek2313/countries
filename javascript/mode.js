const darkButton = document.querySelector("#dark-button");
const body = document.querySelector("body");
const search = document.querySelector("#search");
const darkLight = localStorage.getItem("mode")?localStorage.getItem("mode"):null;

if (darkLight) {
    body.classList.add("dark-mode");
}




darkButton && darkButton.addEventListener("click", function(e) {
    e.preventDefault();

    darkLight ? localStorage.setItem("mode", ""):localStorage.setItem("mode", "darklight");

    body.classList.toggle("dark-mode");
})