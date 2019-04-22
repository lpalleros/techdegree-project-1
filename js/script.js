/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote:"The chains of habit are too weak to be felt until they are too strong to be broken.",
    source:"Samuel Johnson"
  },
  {
    quote:"Becoming is better than being.",
    source:"Carol Dweck",
    citation:"Mindset",
    year: "2006"
  },
  {
    quote:"A problem well stated is a problem half-solved.",
    source:"Charles Kettering"
  },
  {
    quote:"Know yourself and you will win all battles",
    source:"Sun Tzu",
    citation:"Art of War",
    year:"5th Century BC"
  },
  {
    quote:"A person who never made a mistake never tried anything new.",
    source:"Albert Einstein"
  },
  {
    quote:"Remember: no practice, no skill acquisition.",
    source:"Josh Kaufman",
    citation:"The First 20 Hours",
    year:"2013"    
  },
  {
    quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    source:"Michael Jordan"
  },    
];





/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}





/***
  This Function select a random quote, creates a the HTML content an innerHTML at the end.
  the var randomQuote store a random object from a 'quotes' 
***/

function printQuote(){
 var randomQuote  = getRandomQuote();
 var text = '';
 text += '<p class="quote">' + randomQuote.quote + '</p> ';
 text += '<p class="source">'+ randomQuote.source;
      if (randomQuote.citation !== undefined) {
        text += '<span class="citation"> '+ randomQuote.citation + '</span>';
      }
      if (randomQuote.year !== undefined){
        text += '<span class="year"> '+ randomQuote.year + '</span>';
      } 
  text += '</p>';
  return document.getElementById('quote-box').innerHTML = text ;
}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.