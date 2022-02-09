import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

// console.log('hello from detail.js');
// console.log(window.location);

const dogDetailContainer = document.getElementById('dog-detail-container');

// // on load
window.addEventListener('load', async() => {

    const params = new URLSearchParams(window.location.search);
    // console.log(params.get('id'));
// what does this do? line 10,11

    const dog = await getDog(params.get('id'));

    // console.log(dog);

    const div = renderDogDetail(dog);
    dogDetailContainer.append(div);
 // whats is this type??


});
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
