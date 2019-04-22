/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
  quotes is an array that contain objets "quote", "source", "citation" and "year".
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
 1 - This function creates a random number from Zero to the length of the array and store that
 number into the variable 'randomQuote'.
 2 - Return an objet from the array "quotes".
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}





/***
  1 - Call the funciton 'getRandomQuote()' an store the array object inside a local variable 'randomQuote'.
  2 - Declare a local variable 'text'.
  3 - The variable text is updated adding HTML elements and the text from the property 'quote' and 'source' inside the
  object 'radomQuote'.
  4 - if statement checks if the is a property inside de object, if there is a propeperty is going to save it inside 
  the text.
  5. return the var 'text' as a innerHTML replacing what's inside the id 'quote-box'

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

/*** This new function captures a user quote from a prompt every time the user click the botton 'Write your own quote'.

1 - Ask for a user quote an store the response in a variable 'userQuote'.
2 - Ask the user nick name and save the answer inside the variable 'userSource'. .
3 - Push the new object quote into last position of the array 'quotes'.

***/

function newQuote() {
    var userQuote = prompt('Write any personal quote that you think.'); 
    var userSource =prompt('What is your nick name?');
    quotes.push({
      quote:userQuote,
      source:userSource,
      citation: "This Website",
      year:2019
    });
}





/***
  Here is the code which is listen for the user's click, when the user press the "Show another quote" button is 
  going call the function "printQuote" to replece the HTML inside the Div elememt.

***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/***
 Another event wich is going to call the function "newQuote", when a user click the button "Write your own quote". 

***/
document.getElementById('personal-quote').addEventListener("click", newQuote, false);


