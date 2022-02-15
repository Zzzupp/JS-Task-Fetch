fetch('https://api.doge-meme.lol/v1/memes/?skip=0&limit=100')
  .then((response) => response.json())
  .then((data) =>{
    console.log(data);
    render(data);
  })
const divEl = document.getElementById('div-cards')

function render(data) {


  console.log(data.data)
    for(let selectMeme of data.data){
      // console.log(selectMeme);
      let imgMeme = selectMeme.submission_url; 
      // console.log(imgMeme.indexOf('.jpg'));
    
      if(imgMeme[imgMeme.length - 4] == '.'){
        let title = selectMeme.submission_title;
        console.log(title);
        let author = selectMeme.author;
        console.log(author);
        let createdWhen = selectMeme.created

  
  
        let memesForm =`
        <div class="col">
          <div class="card h-100">
          
            <img src="${imgMeme}" class="card-img-top" alt="№">
              <div class="card-body">
                <h5 class="country-name">${title}</h5>
                <ul>
                <li class="language">🗣   ${author}</li>
                <li class="population">👨‍👩‍👧‍👦 ${createdWhen}</li>
                </ul>
              </div>
          </div>
        </div>
        `
        divEl.innerHTML += memesForm;
      }
      
    }






    


    


  }


