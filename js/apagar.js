document.addEventListener("DOMContentLoaded", function () {
    var btnApagar = document.querySelector(".btn-apagar");
    var textarea = document.querySelector(".input-texto");

    btnApagar.addEventListener("click", function () {
        textarea.value = "";
    });
});
