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


// Form Submission
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzuN00McAA0i3Q4GCVB9L5EPsVwYjUATcxzAuP6C65YlSJr2qPwIFQi_LqPPq_Ls6CT/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you! your form is submitted successfully." ))
            .then(() => {  window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
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
