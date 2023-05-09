const randomBtn = document.querySelector('.random-button');
const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');

randomBtn.addEventListener('click', onRandomize);

onRandomize();

function onRandomize(){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            adviceId.innerText = 'advice #' + jsonData['slip']['id'];
            advice.innerText = '"' + jsonData['slip']['advice'] + '"';
        });
}