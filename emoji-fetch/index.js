const resultRandomn = document.querySelector('.result');
const buttonRand = document.querySelector('.get-random')
const main = document.querySelector('.categories-emoji')
buttonRand.addEventListener('click', (e) =>{
    fetch('https://emojihub.herokuapp.com/api/random')
   .then((response) => response.json())
   .then((data) =>{
        render(data);
   } )
})

function render(data){
    let randEmoj = String(data.htmlCode[0]).slice(0, -1);
    console.log(data)

    let renderEmoj = `<span>${randEmoj}</span>`

    resultRandomn.innerHTML += renderEmoj;
    console.log('red')
}


fetch('https://emojihub.herokuapp.com/api/all')
   .then((newResponse) => newResponse.json())
   .then((newData) =>{
        newRender(newData);
   } )



let smileysAndPeople = document.getElementById('smileys')
let smileysAndNature = document.getElementById('animals')
let foodAndDrink = document.getElementById('food')
let travelAndPlaces = document.getElementById('travel')
let activities = document.getElementById('activities')
let objects = document.getElementById('objects')
let symbols = document.getElementById('symbols')
let flags = document.getElementById('flags')
let categoriess = document.querySelector('.categories-emoji')

function newRender(newData){
    // console.log(newData); 
    for(dataObj of newData){
        // console.log(dataObj.category);
        let nameCategory = String(dataObj.category);
        let randEmojAll = String(dataObj.htmlCode[0]).slice(0, -1);
        let allEmojisRender = `
        <span>${randEmojAll}</span>
        ` 
        // 
        switch(nameCategory){
            case 'smileys and people':
                smileysAndPeople.innerHTML += allEmojisRender
            break;
            case 'animals and nature':
                smileysAndNature.innerHTML += allEmojisRender
            break;
            case 'food and drink':
                foodAndDrink.innerHTML += allEmojisRender
            break;
            case 'travel and places':
                travelAndPlaces.innerHTML += allEmojisRender
            break;
            case 'activities':
                activities.innerHTML += allEmojisRender
            break;
            case 'objects':
                objects.innerHTML += allEmojisRender
            break;
            case 'symbols':
                symbols.innerHTML += allEmojisRender
            break;
            case 'flags':
                flags.innerHTML += allEmojisRender
            break;
        }
    }
}
