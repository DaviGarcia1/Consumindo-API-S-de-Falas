const URL = 'https://api.adviceslip.com/advice'
const mainContainer = document.querySelector('.main-container') 
const dadoImg = document.querySelector('.dado-img')
fetch(URL)
    .then(res => res.json())
    .then(data => {
        const texto = data.slip.advice;
        traduzirMsg(texto)
            .then(textoTraduzido => {
                const p = document.createElement('p');
                const hr = document.createElement('hr');
                p.innerHTML = `<span class="aspas">"</span>${textoTraduzido}<span class="aspas">"</span>`;
                mainContainer.append(p, hr);
            });
    });

dadoImg.addEventListener('click', () =>{
    girarDado()
})
const traduzirMsg = (textEnglish) => {
    return fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=${encodeURIComponent(textEnglish)}`)
    .then((res) => res.json())
    .then((data) => data[0][0][0])
} 

const girarDado = () => {
    dadoImg.classList.add('girar')
    console.log(dadoImg.classList)
    setTimeout(() => {
        window.location.reload()
        dadoImg.classList.remove('girar')
        console.log(dadoImg.classList)
    }, 2000)
}

