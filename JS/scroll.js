window.onscroll = function () {
    const header = document.getElementById("scroll");
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");

    if (window.pageYOffset > 400) {
        header.classList.add("sticky", "header-scroll");
        link1.classList.add("text-dark");
        link2.classList.add("text-dark");
        link3.classList.add("text-dark");
        link4.classList.add("text-dark");
    } else {
        header.classList.remove("sticky", "header-scroll");
        link1.classList.remove("text-dark");
        link2.classList.remove("text-dark");
        link3.classList.remove("text-dark");
        link4.classList.remove("text-dark");
    }
};