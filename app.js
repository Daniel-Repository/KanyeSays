const kanye_api_url = 'https://api.kanye.rest/';

let kanyeQuote;

//Fetches the quote from the KanyeAPI. Inserts appropriate text into element.
// async function getKanyeQuote() {
//     document.getElementById("quote").innerHTML = "Loading...";
//     const response = await fetch(kanye_api_url);
//     const data = await response.json();
//     console.log(data.quote);
//     kanyeQuote = data.quote;
//     document.getElementById("quote").innerHTML = "\"" + data.quote + "\"";
// }

const getKanyeQuote = async () => {
    const res = await fetch(kanye_api_url);
    const data = await res.json();

    kanyeQuote = data.quote;
    document.getElementById("quote").innerHTML = "\"" + data.quote + "\"";
}

getKanyeQuote();