const api_url = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
const containerCard = document.querySelector('.container-card');
const overlay = document.getElementById('overlay');
const overlayButton = document.querySelector('.close');
const overlayImg = document.getElementById('overlay-img');
const clickableImage = document.querySelector('.clickabel-img')

let dataApi;
axios.get(api_url)
.then((response) => {
  dataApi = response.data;
  for (let i = 0; i < dataApi.length; i++){
    const {albumId, id, title, url, thumbnailUrl} = dataApi[i];
    printCards(url, capitalizeWords(title));
    addEventListener('click', () =>{
      printImg(url)
      show(overlay)
    })
  }
})

.catch((err)=> {
  console.log(`Errore, riprova piu tardi`, err);
});

function printCards(par1, par2){
  containerCard.innerHTML += `<div class="custom-card text-bg-light position-relative mx-4">
        <div class="pin">
          <img src="./assets_day1/img/pin.svg" alt="pin">
        </div>
        <div class="card-img d-flex flex-column justify-content-center align-items-center">
          <img draggable="false" class="clickable-img" src="${par1}" alt="placeholder img">
        </div>
        <div class="card-text">
          <p>${par2}</p>
        </div>
      </div>`
};

function capitalizeWords(str) {
  return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};


function printImg(src){
overlayImg.innerHTML = `<img draggable="false" id="overlay-img" src="${src}" alt="test">`
}

function hide(element) {
  element.classList.add('d-none')
}

function show(element){
  element.classList.remove('d-none')
}