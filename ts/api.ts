interface responseProduct { 
    title: string,
    body: string,
    id: number,
    userId: number
}

type apiError = "ERROR";

const API : string = "https://jsonplaceholder.typicode.com/";

async function getPost(q : string | number) : Promise<responseProduct | apiError> { 
    return await fetch(API + `posts/${q}`).then(async e => {
        const res = await e.json();
        return (res === {}) ? "ERROR" : res;
    });
}

async function getPosts() : Promise<responseProduct[] | apiError> { 
    const apiResponse : [] | responseProduct[] = await fetch(API + "posts").then(e => e.json());
    return (apiResponse.length === 0) ? "ERROR" : apiResponse;
}