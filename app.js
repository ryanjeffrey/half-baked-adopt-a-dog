import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
async function loadData() {
    // fetch all dogs
    const dogs = await getDogs();

    // render and append all dog cards to the container
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
}

loadData();
