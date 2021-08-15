
  const getUsers = () => {
      return fetch('http://jsonplaceholder.typicode.com/users')
          .then(value=>value.json())
  };
  export {getUsers};

  const getPosts = (id)=>{
      return fetch('http://jsonplaceholder.typicode.com/users' +id + '/posts')
          .then(value => value.json())

  };
  export {getPosts}

  const getComments = (id) => {
      return fetch('http://jsonplaceholder.typicode.com/' +'posts/' + id + '/comments')
          .then(value => value.json())
        };
  export {getComments}