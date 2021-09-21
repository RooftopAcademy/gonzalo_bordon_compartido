const API = "https://jsonplaceholder.typicode.com/";

async function getPosts(q = "") { 
    const response = await fetch(API + `posts/${q}`).then(e => e.json());
    if (response.length === 0 || Object.keys(response).length === 0) response.error = true;
    return response
}