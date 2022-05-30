// Variables

const newQuoteButton = document.querySelector(".new-quote-button-box");

const API = [
	{ id: 1, quote: "Quote 1", author: "Author 1" },
	{ id: 2, quote: "Quote 2", author: "Author 2" },
	{ id: 3, quote: "Quote 3", author: "Author 3" },
	{ id: 4, quote: "Quote 4", author: "Author 4" },
	{ id: 5, quote: "Quote 5", author: "Author 5" },
];

// Event Listeners

allEventListeners();

function allEventListeners() {
	randomQuote();
	newQuoteButton.addEventListener("click", randomQuote);
}

// Functions

function randomQuote() {
	let dataAPI = [...API];
	let numberOfQuotes = dataAPI.length;

	let quoteIndex = Math.floor(Math.random() * numberOfQuotes);

	let [newQuote, newAuthor] = [dataAPI[quoteIndex].quote, dataAPI[quoteIndex].author];

	document.querySelector(".quote-text").innerText = newQuote;
	document.querySelector(".author-text").innerText = newAuthor;
}
