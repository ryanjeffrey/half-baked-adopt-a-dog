import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

const params = new URLSearchParams(window.location.search);

// on load
async function loadData() {
    // get the id from URL
    const dogId = params.get('id');
    // use the id to fetch the dog
    const dog = await getDog(dogId);
    // render and append this dog's details to the container
    const dogDetail = renderDogDetail(dog);
    dogDetailContainer.append(dogDetail);
}

loadData();
