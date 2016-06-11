// Array of quotes

var quotes = [
	{
		quote: "Do not take life too seriously. You will never get out of it alive.",
		source: "Elbert Hubbard",
		citation:"brainyquotes",
		year: "",
		type:"Funny"
	},
	{
		quote: "People who think they know everything are a great annoyance to those of us who do.",
		source: "Isaac Asimov",
		citation:"brainyquotes",
		year: "",
		type:"Know it all"
	},
	{
		quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
		source: "Winston Churchill",
		citation:"brainyquotes",
		year: "",
		type:"Fact of life"
	},
	{
		quote: "I like long walks, especially when they are taken by people who annoy me.",
		source: "Fred Allen",
		citation:"brainyquotes",
		year: "",
		type:"Hater"
	},
	{
		quote: "Wine is constant proof that God loves us and loves to see us happy.",
		source: "Benjamin Franklin",
		citation:"brainyquotes",
		year: "",
		type:"Religious"
	},
];

var uniqueQuotes = quotes.slice(0);

var colors = ["chocolate", "DimGray", "crimson", "DarkCyan", "DarkGoldenRod"]

function getRamdonQuote(quotesArray){
	
	//Using Math build in functions to get a ramdom element of the array between index 0 and the array's lenght
	return quotesArray[Math.floor(Math.random()*quotesArray.length)];
}

function getUniqueRamdonQuote(){
	if(uniqueQuotes.length == 0){
		uniqueQuotes = quotes.slice(0);
	}
	var index = Math.floor(Math.random() * uniqueQuotes.length);
	return uniqueQuotes[index];
}

function setRamdonBG(colorArray){
	return colorArray[Math.floor(Math.random()*colorArray.length)];
}

function printQuote(){
	
	// Call to getRamdonQuote and storing returned object
	
	var quote = getUniqueRamdonQuote();
	
	// Set ramdon color
	
	var color = setRamdonBG(colors);
	
	document.body.style.backgroundColor = color;
	document.getElementById('loadQuote').style.backgroundColor = color;
	
	
	// Writing the html to be added
	var html = '<p class="quote"> ' + quote.quote +' </p> <p class="source"> ' + quote.source;
	if(quote.citation !== ""){
		html = html + '<span class="citation">' + quote.citation + '</span>';
	}
	if(quote.year !== ""){
		html = html + '<span class="year">' + quote.year + '</span>';	
	}
	if(quote.type !== ""){
		html = html + '<span class="year">' + quote.type + '</span>';	
	}
	html = html + '</p>';
	
	//Including html in the DOM Element
	document.getElementById('quote-box').innerHTML= html;
}
// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called

setInterval(function(){
	printQuote();
}, 10000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

