document.addEventListener('DOMContentLoaded', () => {
    const quoteTxt = document.querySelector('.quotes-txt');
    const author = document.querySelector('.quotes-author');
    const newQuote = document.querySelector('.btn');

    async function fetchQuote (){
        try {
            const response = await fetch('https://thatsthespir.it/api');
            const data = await response.json();

            const nameAge = await fetch("https://api.agify.io/?name=" + author);
            const ageData = await nameAge.json();

            quoteTxt.innerHTML = data.quote;
            author.innerHTML = `${data.author} - ${ageData.author}`;
        } catch (err) {
            alert("Failed to fetch quote !")
        }
    }

    newQuote.addEventListener('click', fetchQuote);

    fetchQuote()
})