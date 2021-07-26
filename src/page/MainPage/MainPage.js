import React, {useState} from 'react';
import Header from "./Header/Header";
import Body from "./Body/Body";
import {BrowserRouter as Router} from "react-router-dom";
import "./base.css"
import Footer from "./Footer/footer";
import APIlinkContext from "../../Context/APIlinkContext";
import CurrentUserContext from "../../Context/CurrentUserContext";
const apiLink = {
    newest: 'http://localhost:8080/api/v1/posts/find10newestposts',
    allposts: 'http://localhost:8080/api/v1/posts/allposts',
    post: 'http://localhost:8080/api/v1/posts/',
    update: 'http://localhost:8080/api/v1/author/'
}

const MainPage = () => {
    const [currentUser, setCurrentUser] = useState({
        token: null
    });

    return (
        <div>
            <Router>

            <APIlinkContext.Provider value={apiLink}>
                <CurrentUserContext.Provider value={currentUser}>
                <Header/>
                <Body
                    setCurrentUser = { setCurrentUser }
                />
                </CurrentUserContext.Provider>
            </APIlinkContext.Provider>

            </Router>

            <Footer/>/
        </div>
    );
};

export default MainPage;