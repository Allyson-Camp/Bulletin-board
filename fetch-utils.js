const SUPABASE_URL = 'https://ejeezbcksxazezxketdy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    let { data: posts, error } = await client
    .from('posts')
    .select('*');
}

export async function signIn(email, password) {
    const { data, error } = await client.auth.signIn({
        email: email,
        password: password,
    });

    if (error) console.error(error);
    return data;
}

export async function signUp(email, password) {
    const { data, error } = await client.auth.signUp({
        email: email,
        password: password,
    });

    if (error) console.error(error);
    return data;
}

export async function checkAuth() {
    //
}


