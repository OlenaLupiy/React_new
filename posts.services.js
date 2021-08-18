const getAllPosts = ()=>{
    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
};
const getAllComments = ()=>{
    return fetch('http://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
};

export {getAllPosts, getAllComments}