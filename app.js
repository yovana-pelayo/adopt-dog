import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async() => {
    const dogs = await getDogs();
    // console.log(dogs);

// fetch all dogs

    for (let dog of dogs) {
        const li = renderDogCard(dog);
        dogListContainer.append(li); 
    }

});


// render and append all dog cards to the container
