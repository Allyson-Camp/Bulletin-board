//imports
import { redirectIfLoggedIn, signUp, signIn } from '../fetch-utils.js';
//dom elements
const signInForm = document.querySelector('.sign-in');
const signUpForm = document.querySelector('.sign-up');

//state

//events
//sign up form(form event listener)
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);
    await signIn(data.get('email'), data.get('password'));

    window.location.href = '../';
});
//sign in form (foreventlistener)
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);
    await signUp(data.get('email'), data.get('password'));

    window.location.href = '../';
    
});

redirectIfLoggedIn();
    //sign in with email and password if user exists
    //sign up with email and password if no user exists, push the info into database to store
    //redirect to create page once signed up/in
//display/callfunctions