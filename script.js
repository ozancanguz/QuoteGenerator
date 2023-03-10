const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes=[];

function newQuote(){
     // pick a random quote from api array
     const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
     authorText.textContent=quote.author;
     quoteText.textContent=quote.text;

     console.log(quote);
}

// get quotes from api
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';

    try {
        
     const response=await fetch(apiUrl);
     apiQuotes=await response.json();
     newQuote();
    

    } catch (error) {
        
    }
}

getQuotes()