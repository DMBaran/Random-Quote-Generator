//Variable to store new quote
var newQuote;

//Database to hold all of the quotes and their sources
var quotes = [
  {
    quote: "“No man's knowledge here can go beyond his experience”",
    author: " John Locke"
  },
  {
    quote: "“Liberty consists in doing what one desires”",
    author: " John Stuart Mill"
  },
  {
    quote: "“There is only one good, knowledge, and one evil, ignorance”",
    author: " Socrates"
  },
  {
    quote: "“Life must be understood backward. But it must be lived forward”",
    author: " Søren Kierkegaard"
  },
  {
    quote: "“You can discover more about a person in an hour of play than in a year of conversation”",
    author: " Plato"
  }
];


//Function to obtain and hold a random object
function getRandomQuote(array) {
  var randomQuote = array.length;
  var randomNumber = Math.floor(Math.random() * randomQuote);
  newQuote = '<p class="quote">' + array[randomNumber].quote + '</p>';
  newQuote += '<p class="source">' + array[randomNumber].author + '</p>';
}


//Function to grab (getRandomQuote function) and print it to the html document
function printQuote() {
  getRandomQuote(quotes)
  document.getElementById('quote-box').innerHTML = newQuote;
};


//OnClick event used to run the printQuote function once the button is pressed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);