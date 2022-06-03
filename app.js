const kanye_api_url = 'https://api.kanye.rest/';

let kanyeQuote;

const getKanyeQuote = async () => {
    const res = await fetch(kanye_api_url);
    const data = await res.json();

    kanyeQuote = data.quote;
    document.getElementById("quote").innerHTML = "\"" + data.quote + "\"";
}

getKanyeQuote();