//---------------------------------------- IMPORTS ----------------------------------------\\

const themeIcon = document.querySelector('[data-themeIcon]')
const phoneThemeIcon = document.querySelector('[data-phoneThemeIcon]')
const phoneMenuOpen = document.querySelector('[data-phoneMenuOpen]')
const phoneMenuClose = document.querySelector('[data-phoneMenuClose]')
const phoneNav = document.querySelector('[data-phoneNav]')
const discordMedia = document.querySelector('[data-discordMedia]')
const discordImg = document.querySelector('[data-discordImg]')
const aboutSection = document.querySelector('[data-aboutSection]')
const aboutSectionPhone = document.querySelector('[data-aboutSectionPhone]')
const skillsSection = document.querySelector('[data-skillsSection]')
const skillsSectionPhone = document.querySelector('[data-skillsSectionPhone]')
const designsSection = document.querySelector('[data-designsSection]')
const designsSectionPhone = document.querySelector('[data-designsSectionPhone]')
const contactSectionPhone = document.querySelector('[data-contactSectionPhone]')
const GoToDesigns = document.querySelector('[data-GoToDesigns]')
const sendEmailBtn = document.querySelector('[data-sendEmailBtn]')
const contactFirstName = document.querySelector('[data-contactFirstName]')
const contactLastName = document.querySelector('[data-contactLasttName]')
const contactSubject = document.querySelector('[data-contactSubject]')
const contactMessage = document.querySelector('[data-contactMessage]')

//------------------------------------- FUNCTION CALLS -------------------------------------\\

themeIcon.addEventListener("click", toggleDisplayTheme)
phoneMenuOpen.addEventListener("click", openPhoneMenu)
phoneMenuClose.addEventListener("click", closePhoneMenu)
phoneThemeIcon.addEventListener("click", toggleDisplayTheme)
discordMedia.addEventListener("click", clipboardDiscord)
discordImg.addEventListener("mouseout", changeTooltipText)
aboutSection.addEventListener("click", goToAboutSection)
aboutSectionPhone.addEventListener("click", goToAboutSection)
skillsSection.addEventListener("click", goToSkillsSection)
skillsSectionPhone.addEventListener("click", goToSkillsSectionPhone)
designsSection.addEventListener("click", goToDesignsSection)
designsSectionPhone.addEventListener("click", goToDesignsSectionPhone)
sendEmailBtn.addEventListener("click", sendContactMail)
contactSectionPhone.addEventListener("click", goToContactSectionPhone)

setInterval(() => {
    changeGTDBtnAttribute()
}, 10);

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

function changeGTDBtnAttribute() {
    if (getComputedStyle(GoToDesigns).content == "phone") {
        GoToDesigns.addEventListener("click", goToDesignsSectionPhone)
    }
}

function sendContactMail() {
    if (contactFirstName.value === "" || contactFirstName.value == null) {
        alert("All fields must be filled in!")
        return false
    }
    if (contactLastName.value === "" || contactLastName.value == null) {
        alert("All fields must be filled in!")
        return false
    }
    if (contactSubject.value === "" || contactSubject.value == null) {
        alert("All fields must be filled in!")
        return false
    } if (contactMessage.value === "" || contactMessage.value == null) {
        alert("All fields must be filled in!")
        return false
    }
    var emailSubject = contactSubject.value + " || Name: " + contactFirstName.value + " " +contactLastName.value
    var emailContent = contactMessage.value
    window.open(`mailto:kangabubakar33@gmail.com?subject=`+emailSubject+`&body=`+emailContent)
}

function openPhoneMenu() {
    phoneNav.style.right = "0"
}

function closePhoneMenu() {
    phoneNav.style.right = "-250px"
}

function clipboardDiscord() {
    discordMedia.setAttribute("data-tooltip", "Copied discord tags!")
    navigator.clipboard.writeText("TheHacker#4418");
}

function changeTooltipText() {
    discordMedia.setAttribute("data-tooltip", "Click to copy discord tags!")
}

function goToAboutSection() {
    window.scrollTo(0, 565)
}

function goToSkillsSection() {
    window.scrollTo(0, 1233)
}

function goToSkillsSectionPhone() {
    window.scrollTo(0, 1638)
}

function goToDesignsSection() {
    window.scrollTo(0, 1947)
}

function goToDesignsSectionPhone() {
    window.scrollTo(0, 2739)
}

function goToContactSectionPhone() {
    window.scrollTo(0, 3561)
}
