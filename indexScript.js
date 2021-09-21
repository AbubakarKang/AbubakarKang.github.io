//---------------------------------------- IMPORTS ----------------------------------------\\

const themeIcon = document.querySelector('[data-themeIcon]')

//------------------------------------- FUNCTION CALLS -------------------------------------\\

themeIcon.addEventListener("click", toggleDisplayTheme)

//----------------------------------------- OTHERS -----------------------------------------\\



//---------------------------------------- FUNCTIONS ----------------------------------------\\

function toggleDisplayTheme() {
    document.body.classList.toggle("darkMode")
    if (document.body.classList.contains("darkMode")) {
        themeIcon.classList = "far fa-sun"
    } else {
        themeIcon.classList = "far fa-moon"
    }
}
