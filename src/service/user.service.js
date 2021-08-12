let url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => {

    return fetch(url)
        .then(value => value.json()); // []
};

const getUser = async (id) => {

    if (+id < 0) {
        throw  new Error('atatat id must be gt 0 ');
    }
    let user = await fetch(url + '/' + id)
        .then(value => value.json());
    return user;
};

export {getUsers, getUser};
