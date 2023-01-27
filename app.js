/* Imports */
import { getPosts, renderPosts } from './fetch-utils.js';
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


/* Display Functions */
function displayPosts(){
//clear dom
    postsListEl.textcontent = '';
//loop (map???) and call render post function
    for (let post of postsData) {
    //
        const postEl = renderPosts(post);
        postsListEl.append(postEl);
    }}
// (don't forget to call any display functions you want to run on page load!)