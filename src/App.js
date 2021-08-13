import './App.css';
import {useEffect, useState} from "react";

import Users from "./component/users/Users";
import Posts from "./component/posts/Posts";
import Comments from "./component/comments/Comments";


function App() {


    return (
        <div className="App">
            {/*- Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці*/}
            {/*створити сервіс (user.service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).*/}
            {/*Використати fetch / axios на вибір*/}
            {/*Створити компонент Users*/}
            {/*На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти*/}
            {/*Створити компонент User який характеризує окремий об'єкт з масиву.*/}
            {/*Ієрархія компонентів :*/}
            {/*App-Users->User*/}

            {/*<Users/>*/}

            {/*<Posts/>*/}

            {<Comments/>}

        </div>
    );
}

export default App;
