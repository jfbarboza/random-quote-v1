// Array of quotes

var quotes = [
	{
		quote: "Do not take life too seriously. You will never get out of it alive.",
		source: "Elbert Hubbard",
		citation:"brainyquotes",
		year: ""
	},
	{
		quote: "People who think they know everything are a great annoyance to those of us who do.",
		source: "Isaac Asimov",
		citation:"brainyquotes",
		year: ""
	},
	{
		quote: "I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party.",
		source: "Ron White",
		citation:"brainyquotes",
		year: ""
	},
	{
		quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
		source: "Winston Churchill",
		citation:"brainyquotes",
		year: ""
	},
	{
		quote: "I like long walks, especially when they are taken by people who annoy me.",
		source: "Fred Allen",
		citation:"brainyquotes",
		year: ""
	},
	{
		quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
		source: "Theodore Roosevelt",
		citation:"brainyquotes",
		year: ""
	},
	{
		quote: "Wine is constant proof that God loves us and loves to see us happy.",
		source: "Benjamin Franklin",
		citation:"brainyquotes",
		year: ""
	},
];

function getRamdonQuote(quotesArray){
	var quote = quotesArray[Math.floor(Math.random()*items.length)];
	console.log(quote);
}
// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

