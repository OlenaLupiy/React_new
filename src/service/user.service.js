
  const getUsers = () => {
      return fetch('http://jsonplaceholder.typicode.com/users')
          .then(value=>value.json())
  };
  export {getUsers};

  const getPosts = ()=>{
      return fetch('http://jsonplaceholder.typicode.com/posts')
          .then(value => value.json())

  };
  export {getPosts}

  const getComments = () => {
      return fetch('http://jsonplaceholder.typicode.com/comments')
          .then(value => value.json())
        };
  export {getComments}