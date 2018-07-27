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

function printQuote() {
  var randomQuote = quotes.length;
  var randomNumber = Math.floor(Math.random() * randomQuote);
  for(i = 0; i < randomQuote; i++) {
    var newQuote = '<p class="quote">' + quotes[randomNumber].quote + '</p>';
    newQuote += '<p class="source">' + quotes[randomNumber].author + '</p>';
  }
  document.getElementById('quote-box').innerHTML = newQuote;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);