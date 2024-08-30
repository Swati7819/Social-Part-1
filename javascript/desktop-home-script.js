let navigationLinks = document.querySelectorAll("body > div > nav > div.navigations-link > a")

function removeUnderline() {
    navigationLinks.forEach(link => {
        link.style.setProperty('--after-width', '0%'); 
    });
}

navigationLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        
        removeUnderline();


        link.style.setProperty('--after-width', '100%'); 
    });
});