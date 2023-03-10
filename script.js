const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes=[];


// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }


  // Remove Loading Spinner
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
function newQuote(){
      loading();

     // pick a random quote from api array
     const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
     authorText.textContent=quote.author;
     quoteText.textContent=quote.text;

     complete();
}

// get quotes from api
async function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';

    try {
        
     const response=await fetch(apiUrl);
     apiQuotes=await response.json();
     newQuote();
    

    } catch (error) {
        
    }
}

//event listeners
newQuoteBtn.addEventListener("click",newQuote);


getQuotes()
