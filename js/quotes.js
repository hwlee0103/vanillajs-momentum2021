const quotes = [
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quote: "It's kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    quote: "When you're curious, you find lots of interesting things to do.",
    author: "Walt Disney",
  },
  {
    quote: "Laughter is timeless, imagination has no age, dreams are forever.",
    author: "Walt Disney",
  },
  {
    quote: "Togetherness, for me, means teamwork.",
    author: "Walt Disney",
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    author: "John Lennon",
  },
  {
    quote:
      "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
  },
  {
    quote:
      "A dream you dream alone is only a dream. A dream you dream together is reality.",
    author: "John Lennon",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called present.",
    author: "Oogway, Kung Fu Panda",
  },
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    author: "Albus Dumbledore, Harry Potter and the Deathly Hallows",
  },
  {
    quote: "It is impossible to manufacture or imitate love.",
    author: "Horace Slughorn, Harry Potter and the Half-Blood Prince",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[0]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
