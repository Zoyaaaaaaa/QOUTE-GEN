
let url = "https://api.quotable.io/random";
let btn = document.querySelector("button");
let quoteData; // scope

btn.addEventListener("click", async () => {
    quoteData = await showQuote(url); // imp
    console.log(quoteData);

    let p = document.querySelector("#result");
    p.innerText = `${quoteData.content}\n--- ${quoteData.author}`;
});

async function showQuote(url) {
    try {
        let res = await axios.get(url);
        return {
            content: res.data.content,
            author: res.data.author
        };
    } catch (e) {
        console.log("error: ", e);
    }
}

let soundBtn = document.querySelector(".sound");
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteData.content} by ${quoteData.author}`);
    speechSynthesis.speak(utterance);
});

let copyBtn = document.querySelector(".copy");
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteData.content);
});



