//---------------------------------------- IMPORTS ----------------------------------------\\

const themeIcon = document.querySelector('[data-themeIcon]')
const phoneThemeIcon = document.querySelector('[data-phoneThemeIcon]')
const phoneMenuOpen = document.querySelector('[data-phoneMenuOpen]')
const phoneMenuClose = document.querySelector('[data-phoneMenuClose]')
const phoneNav = document.querySelector('[data-phoneNav]')


//------------------------------------- FUNCTION CALLS -------------------------------------\\

themeIcon.addEventListener("click", toggleDisplayTheme)
phoneMenuOpen.addEventListener("click", openPhoneMenu)
phoneMenuClose.addEventListener("click", closePhoneMenu)
phoneThemeIcon.addEventListener("click", toggleDisplayTheme)

//----------------------------------------- OTHERS -----------------------------------------\\

phoneNav.style.right = "-250px"

//---------------------------------------- FUNCTIONS ----------------------------------------\\

function toggleDisplayTheme() {
    document.body.classList.toggle("darkMode")
    if (document.body.classList.contains("darkMode")) {
        phoneThemeIcon.classList = "far fa-sun"
        themeIcon.classList = "far fa-sun"
        phoneMenuOpen.src = "./images/webMenuDark.png"
    } else {
        phoneThemeIcon.classList = "far fa-moon"
        themeIcon.classList = "far fa-moon"
        phoneMenuOpen.src = "./images/webMenuLight.png"
    }
}

function openPhoneMenu() {
    phoneNav.style.right = "0"
}

function closePhoneMenu() {
    phoneNav.style.right = "-250px"
}
