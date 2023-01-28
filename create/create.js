//imports
import { createPost } from '../fetch-utils.js'; 


//dom els
const createFormEl = document.querySelector('.create-form');

//state

//events
createFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createFormEl);

    const title = data.get('title');
    const message = data.get('message');
    const contact = data.get('contact');
    

    const post = await createPost(title, message, contact);
    location.replace('/'); 
});

