const url = 'http://jsonplaceholder.typicode.com/';

const getUsers = ()=>{
    return fetch(url + 'users')
        .then(value => value.json())
};
const getUser = (id) =>{
    return fetch(url + 'users/' +id)
        .then(value => value.json())
};

const getPostsOfUser = async (id) => {
    const res = await fetch(url + 'users/' + id + '/posts/')
    const data = await res.json();
    return data;
};
const getCommentsOfUser = (id) => {
    return fetch(url + 'posts/' + id + '/comments/')
        .then(value => value.json())
}
export {getUsers, getPostsOfUser, getUser, getCommentsOfUser};