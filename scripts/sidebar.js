(function () {
    const openingBtn = document.querySelector(".icon-open")
    const closeBtn = document.querySelector(".icon-close")
    const menu = document.querySelector(".menu")

    openingBtn.addEventListener("click", function () {
        menu.classList.add("menu_opened");
    });

    closeBtn.addEventListener("click", function () {
        menu.classList.remove("menu_opened")
    });
}())
