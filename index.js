const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "Believe you can and you're halfway there."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quote");
    const button = document.getElementById("new-quote");
    
    button.addEventListener("click", () => {
        quoteDisplay.textContent = getRandomQuote();
    });
    
    // Display an initial quote
    quoteDisplay.textContent = getRandomQuote();
});
