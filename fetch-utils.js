const SUPABASE_URL = 'https://ejeezbcksxazezxketdy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    let { data: posts, error } = await client
        .from('posts')
        .select('*'); 
    if (error) console.error(error);

    return posts;
}

export async function signIn(email, password) {
    const { user, error } = await client.auth.signIn({
        email: email,
        password: password,
    });

    if (error) console.error(error);
    return user;
}

export async function signUp(email, password) {
    const { user, error } = await client.auth.signUp({
        email: email,
        password: password,
    });

    if (error) console.error(error);
    return user;
}

export function renderPosts(post) {
        //render div for each post (render function)
    const postEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const messageEl = document.createElement('p');
    const contactEl = document.createElement('p');

    titleEl.textContent = post.title;
    messageEl.textContent = post.message;
    contactEl.textContent = post.contact;
    

    postEl.classList.add('single-post');
    titleEl.classList.add('post-title');
    messageEl.classList.add('post-message');
    contactEl.classList.add('contact-info');
    
    //append div to html el in dom 
    postEl.append(titleEl, messageEl, contactEl);
    //return the div
    return postEl;
    
}

export async function createPost(title, message, contact) {
    const { data, error } = await client 
        .from('posts')
        .insert([
            { title: title,
                message: message,
                contact: contact },
        ]);
    return data;
}

//get user function
export function getUser() {

    return client.auth.session() && client.auth.session().user;

}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('../auth');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) location.replace('../');
}