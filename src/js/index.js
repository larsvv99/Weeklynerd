// Span elementen toevoegen aan h3 elementen
document.addEventListener('DOMContentLoaded', () => {
        // Selecteer alle h3 elementen
        const h3Elements = document.querySelectorAll('#gastsprekers h3');

        h3Elements.forEach(h3 => {
            // Splits de tekstinhoud van het h3 element in woorden
            const words = h3.textContent.split(' ');

            // Omring elk woord met een span element
            const spanWords = words.map(word => `<span>${word}</span>`);

            // Vervang de originele tekst met de nieuwe HTML
            h3.innerHTML = spanWords.join(' ');
        });
    });



// Radio buttons focus
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('focus', function() {
        this.checked = true;
    });
});


// Enkel 1 checkbox aanvinken 
document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('input[name="option"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxes.forEach((cb) => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
});


