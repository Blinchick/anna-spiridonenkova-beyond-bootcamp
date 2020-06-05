
// const for easier navigation
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const quoteButton = document.querySelector('.getQuote');
const quoteHolder = document.querySelector('.quote p');

// getting data for dad jokes from api
async function fetchJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: `application/json`,
        },
    });
    const data = await response.json();
    return data;
}

// getting data for quotes from api
async function fetchQuote() {
    const response = fetch('https://type.fit/api/quotes');
    const data = await response.json();
    console.log(data)
}

async function handleClick(){
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);

fetchJoke();
fetchQuote();