import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.js-list a', {
    captionDelay: 250,
    captionsData: 'alt',
    close: true,
    enableKeyboard: true,
    docClose: true,
});




const form = document.querySelector(".js-form");
form.addEventListener("submit", onSearch);
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader");


function onSearch(evt) {
    evt.preventDefault();
    const wordForSearch = evt.currentTarget.elements.input.value;
    
    getPhoto(wordForSearch).then(data => {
        if (!data.total) {
            iziToast.error({
                position:'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
            form.reset()
        }
        loader.style.visibility = 'hidden';
        list.innerHTML = createMarkup(data.hits)
        lightbox.refresh()
    })
    .catch(error => console.log(error))
}

function getPhoto(wordForSearch) {
    const API_KEY = "41617344-22077a3acba128accdfbcd745";
    const BASE_URL = "https://pixabay.com/api/";
    loader.style.visibility = 'visible';
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${wordForSearch}&image_type=photo&orientation=horizontal&safesearch=true`).
        then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        }) 
};




function createMarkup(arr) {
    form.reset();
    
    return arr.map(({webformatURL,largeImageURL,tags,likes,views,comments,downloads}) =>` <li>
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" width="350px" height="250px"></a>
    <ul class="discription-list">
    <li class="discription-item">
        <h2>Likes</h2>
        <p>${likes}</p></li>
    <li class="discription-item">
        <h2>Views</h2>
        <p>${views}</p>
    </li>
    <li class="discription-item">
        <h2>Comments</h2>
        <p>${comments}</p>
    </li>
    <li class="discription-item">
        <h2>Download</h2>
        <p>${downloads}</p>
    </li>
    </ul>
    </li>`
    ).join('');
};