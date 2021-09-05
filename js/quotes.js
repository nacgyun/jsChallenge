const quotes = [
{
    quote: "Hell is other people.",
    author: "Jean Paul Sartre"
},
{
    quote: "Only the guy who isn't rowing has time to rock the boat.",
    author: "Jean Paul Sartre"
},
{
    quote: "Life begins on the other side of despair.",
    author: "Jean Paul Sartre"
},
{
    quote: "When rich people fight wars with one another, poor people are the ones to die.",
    author: "Jean Paul Sartre"
},
{
    quote: "Commitment is an act, not a word.",
    author: "Jean Paul Sartre"
},
{
    quote: "If you are lonely when you're alone, you are in bad company.",
    author: "Jean Paul Sartre"
},
{
    quote: "Life is C between B and D",
    author: "Jean Paul Sartre"
},
{
    quote: "Freedom is what you do with what's been done to you.",
    author: "Jean Paul Sartre"
},
{
    quote: "Man is not the sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    author: "Jean Paul Sartre"
},
{
    quote: "Words are loaded pistols.",
    author: "Jean Paul Sartre"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
let num;
function displayRandomQuote () {
    num = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[num].quote;
    author.innerText = quotes[num].author;
}
displayRandomQuote ()