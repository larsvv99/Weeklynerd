document.addEventListener('DOMContentLoaded', () => {
  // Select all h1 elements
  const h1Elements = document.querySelectorAll('h1');

  h1Elements.forEach(h1 => {
    // Split the visible text content of the h1 element into words
    const words = h1.innerText.trim().split(' ');

    // Check the number of words
    if (words.length === 4) {
      // Wrap the fourth word in a span element without a class
      words[3] = `<span>${words[3]}</span>`;
    } else if (words.length > 1) {
      // Wrap the second word in a span element without a class
      words[1] = `<span>${words[1]}</span>`;
    }

    // Replace the original text with the new HTML
    h1.innerHTML = words.join(' ');
  });
});
