import { responseProduct, apiError } from "./interface";

import { API_ERROR, API_POSTS } from "./config";

async function getPost(q: string | number): Promise<responseProduct | apiError> { 
    return await fetch(API_POSTS + q)
        .then(e => e.json())
        .then(res => (res === {}) ? API_ERROR: res);
}

async function getPosts(): Promise<responseProduct[] | apiError> { 
    return await fetch(API_POSTS)
        .then(e => e.json())
        .then(res => (res.length === 0) ? API_ERROR: res);
}

async function getPostsBySearch(search: string): Promise<responseProduct[] | apiError> { 
    const SEARCH_REGEX: RegExp = new RegExp(search);
    const POSTS: responseProduct[] | apiError = await getPosts();

    return (typeof POSTS === "string") ? POSTS : POSTS.filter(post => SEARCH_REGEX.test(post.title));
}

export {
    getPost,
    getPosts,
    getPostsBySearch
}