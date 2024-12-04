document.addEventListener("DOMContentLoaded", function () {
    const quote = "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be fooled into doing nothing.";
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
                quoteElement.textContent = quote.slice(0, index + 1);
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
