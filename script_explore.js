// Theme Switch
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click",() => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
// Download
const downloadButtons = document.querySelectorAll("[data-download]");

downloadButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        const image = button.parentElement.querySelector("img");

        if (image) {
            const a = document.createElement("a");
            a.href = image.src; 
            a.download = "";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
});