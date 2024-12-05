const api_url = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
const containerCard = document.querySelector('.container-card');

axios.get(api_url)
.then((response) => {
  let dataApi;
  dataApi = response.data;
  for (let i = 0; i < dataApi.length; i++){
    const {albumId, id, title, url, thumbnailUrl} = dataApi[i];
    containerCard.innerHTML += `<div class="custom-card text-bg-light position-relative mx-4">
        <div class="pin">
          <img src="./assets_day1/img/pin.svg" alt="pin">
        </div>
        <div class="card-img d-flex flex-column justify-content-center align-items-center">
          <img src="${url}" alt="">
        </div>
        <div class="card-text">
          <p>${title}</p>
        </div>
      </div>`
  }
  
})



