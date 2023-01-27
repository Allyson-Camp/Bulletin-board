/* Imports */
import { getPosts } from './fetch-utils.js';
/* Get DOM Elements */

const loginButtonEl = document.querySelector('.login-button');
const createButtonEl = document.querySelector('.create-button');
const postsListEl = document.querySelector('.posts-list');

/* State */
let postsData = [];

/* Events */
window.addEventListener('load', async () => {
    const posts = await getPosts();
    postsData = posts;
    displayPosts();
});

console.log(postsData);
/* Display Functions */
function displayPosts(){
//clear dom
    postsListEl.textcontent = '';
//loop (map???) and call render post function
    for (let post of postsData) {
        //render div for each post (render function)
        const postEl = document.createElement('div');
        const titleEl = document.createElement('p');
        const messageEl = document.createElement('p');

        messageEl.textContent = post.message;
        titleEl.textContent = post.title;

        postEl.classList.add('single-post');
        messageEl.classList.add('post-message');
        titleEl.classList.add('post-title');
        //append div to html el in dom 
        postEl.append(messageEl, titleEl);
        //return the div
        return postEl;
    }
}
// (don't forget to call any display functions you want to run on page load!)

