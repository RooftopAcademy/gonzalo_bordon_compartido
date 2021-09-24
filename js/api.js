/* 
type apiProduct = { 
    title: string, 
    body: string, 
    id: number, 
    userId: number
    error?: boolean
}
*/

const API /* string */ = "https://jsonplaceholder.typicode.com/";

async function getPosts(q /* : string */ = "")  /* : apiProduct | apiProduct[] */ { 
    const response /* apiProduct | apiProduct[] */ = await fetch(API + `posts/${q}`).then(e => e.json());
    if (response.length === 0 || Object.keys(response).length === 0) response.error = true;
    return response
}