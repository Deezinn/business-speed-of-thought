document.addEventListener("DOMContentLoaded", function () {
    const quote = "O sucesso é um professor perverso. Ele seduz as pessoas inteligentes a pensar que elas não podem perder.";
    const quoteElement = document.getElementById('quote');
    let index = 0;
    let deleting = false;

    function typeText() {
        if (deleting) {
            quoteElement.textContent = quote.slice(0, index);
            index--;
            if (index === 0) {
                deleting = false;
                setTimeout(typeText, 500);
            } else {
                setTimeout(typeText, 50);
            }
        } else {
            if (index < quote.length) {
                quoteElement.textContent += quote.charAt(index);
                index++;
                setTimeout(typeText, 50);
            } else {
                deleting = true;
                setTimeout(typeText, 1000);
            }
        }
    }

    typeText();
});
