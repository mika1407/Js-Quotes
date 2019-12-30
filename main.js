const quotes = [
  {
    name: "Stephen King",
    quote: "Get busy living or get busy dying"
  },
  {
    name: "John F. Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly."
  },
  {
    name: "Abraham Lincoln",
    quote: "My Best Friend is a person who will give me a book I have not read."
  },
  {
    name: "Leonardo Da Vinci",
    quote: "The noblest pleasure is the joy of understanding."
  },
  {
    name: "Leo Tolstoy",
    quote:
      "All happy families resemble one another, each unhappy family is unhappy in its own way."
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  // console.log(number);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

// const simpleQuotes = [
//   {
//     name: "author number 1",
//     quote: "quote number 1"
//   }
// ];
