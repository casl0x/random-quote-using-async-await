document.addEventListener('DOMContentLoaded', () => {
    const quoteTxt = document.querySelector('.quotes-txt');
    const author = document.querySelector('.quotes-author');
    const newQuote = document.querySelector('.quotes-rdm');

    async function fetchQuote (){
        try{
            const response = await fetch('https://thatsthespir.it/api');
            if (!response.ok){
                throw new Error('Failed to fetch quote!');
            }

            const data = await response.json();
            quoteTxt.textContent = data.quote;
            author.textContent = `-${data.author}`;
        } catch {
            quoteTxt.textContent = 'Failed to fetch quote, try again !';
            console.error(error);
        }
    }

    newQuote.addEventListener('click', fetchQuote);

    fetchQuote()
})