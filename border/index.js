fetch(`https://restcountries.com/v3.1/name/${prompt('country')}?fullText=true`)
  .then((response) => response.json())
  .then((data) =>{
    // console.log(data);
    render(data);
  

    let borderContries = data[0].borders;
    let borderedCountry = '';
    for(let country of borderContries){
    // for(let p = 0; p <= 2; p++) {
      fetch(`https://restcountries.com/v3.1/alpha/${country}`).then((newResponse) => newResponse.json()).then((newData) =>{
      // console.log(newData);
      renderSec(newData);
      })
    }


function renderName(countryFlag, borderCountryName, nameContinent, countryLanguages, numberPopulation, currencySymbol, currencyName, className){
  return `
  <div class="${className}">
    <div class="card h-100">
    
      <img src="${countryFlag}" class="card-img-top" alt="№">
        <div class="card-body">
          <h5 class="country-name">${borderCountryName}</h5>
          <p class = 'continent'>${nameContinent}</p>
          <ul>
          <li class="language">🗣   ${countryLanguages}</li>
          <li class="population">👨‍👩‍👧‍👦 ${numberPopulation}</li>
            <li class="currency">💰 ${currencySymbol + ' ' + currencyName}</li>
          </ul>
        </div>
    </div>
  </div>
  `
}

  function renderSec(data) {
    let thisCountry = data[0];
    // console.log(thisCountry);

    let borderCountryName = thisCountry.name.common
    // console.log(borderCountryName);
    let nameContinent = thisCountry.continents;
    // console.log(nameContinent);
    let numberPopulation = thisCountry.population;
    // console.log(numberPopulation);
    let language = thisCountry.languages;
    // console.log(language)
    let countryLanguages = '';
    // let countryLanguages = Object.values(language)[0];
    if (Object.values(language).length == 1){
      countryLanguages = Object.values(language)[0];
    } else {
      for(objln in thisCountry.languages){
        countryLanguages += `${thisCountry.languages[objln]}; `;
      }
    } 
    let currencies = thisCountry.currencies;
    let currencyName = Object.values(currencies)[0].name;
    let currencySymbol = Object.values(currencies)[0].symbol;
    // console.log(currencyName, currencySymbol);
    let countryFlag = thisCountry.flags.svg;
    let roundCountry = (numberPopulation/1000000).toFixed(1);
    little.innerHTML += renderName(countryFlag, borderCountryName, nameContinent, countryLanguages, roundCountry + ' млн.', currencySymbol, currencyName, 'ellit');

    


  }


  })
  

const countryName = document.querySelector('.country-name')
const continent = document.querySelector('.continent')
const population = document.querySelector('.population')
const language = document.querySelector('.language')
const currency = document.querySelector('.currency')
const divEl = document.getElementById('div-cards')
const little = document.getElementById('little')
function render(data) {
  for(let i = 0; i < data.length; i = i+3){
    let selectCountry = data[i];
    // console.log(selectCountry);
    let nameCountry = selectCountry.name.common;
    // console.log(nameCountry);
    let nameContinent = selectCountry.continents;
    // console.log(nameContinent);
    let numberPopulation = selectCountry.population;
    // console.log(numberPopulation);
    let language = data[i].languages;
    // console.log(language)
    let countryLanguages = '';
    // let countryLanguages = Object.values(language)[0];
    if (Object.values(language).length == 1){
      countryLanguages = Object.values(language)[0];
    } else {
      for(objln in selectCountry.languages){
        countryLanguages += `, ${selectCountry.languages[objln]}`;
      }
    } 
    
    // console.log(countryLanguages)
    // console.log(countryLanguages);
    //let regionLanguage = selectCountry.


// bordered country // 


  


    let currencies = data[i].currencies;
    let currencyName = Object.values(currencies)[0].name;
    let currencySymbol = Object.values(currencies)[0].symbol;
    // console.log(currencyName, currencySymbol);
    let countryFlag = selectCountry.flags.svg;
    let roundCountry = (numberPopulation/1000000).toFixed(1);
    console.log(roundCountry)
    // console.log(countryFlag)
    let formCountry = `
    <div class="col">
      <div class="card h-100">
      
        <img src="${countryFlag}" class="card-img-top" alt="№">
          <div class="card-body">
            <h5 class="country-name">${nameCountry}</h5>
            <p class = 'continent'>${nameContinent}</p>
            <ul>
            <li class="language">🗣   ${countryLanguages}</li>
            <li class="population">👨‍👩‍👧‍👦 ${roundCountry} млн.</li>
              <li class="currency">💰 ${currencySymbol + ' ' + currencyName}</li>
            </ul>
          </div>
      </div>
    </div>
    `
    
    // divEl.innerHTML += renderName(countryFlag, borderCountryName, nameContinent, countryLanguages, numberPopulation, currencySymbol, currencyName, 'ellit');

    divEl.innerHTML += formCountry;


  }
}


