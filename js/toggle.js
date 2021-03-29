function toggleMenu() {
    let menuToggle = document.querySelector(".menuToggle");
    let mobileList = document.querySelector(".mobileList");
    let iconTransform = document.querySelector(".menuToggle div");
    menuToggle.classList.toggle("active")
    mobileList.classList.toggle("active")
    iconTransform.toogle("active")
}