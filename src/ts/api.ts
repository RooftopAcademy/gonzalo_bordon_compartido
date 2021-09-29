import { responseProduct, apiError } from "./interface";

import { API_ERROR, API_POSTS } from "./config";

async function getPost(q : string | number) : Promise<responseProduct | apiError> { 
    return await fetch(API_POSTS + q)
        .then(e => e.json())
        .then(res => (res === {}) ? API_ERROR : res);
}

async function getPosts() : Promise<responseProduct[] | apiError> { 
    return await fetch(API_POSTS)
        .then(e => e.json())
        .then(res => (res.length === 0) ? API_ERROR : res);
}

export {
    getPost,
    getPosts
}