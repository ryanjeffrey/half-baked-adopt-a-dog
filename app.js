import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
async function loadData() {
    const data = await getDogs();
    console.log(data);
}

loadData();
// fetch all dogs
// render and append all dog cards to the container
