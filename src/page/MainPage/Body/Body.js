import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import PostsPage from "./PostsPage/PostsPage";
import Detail from "./DetailPage/Detail";
import "./Body.css"
import {Link} from "react-router-dom";
import LoginForm from "./LoginPage/LoginForm";
import EditForm from "./EditPage/EditForm";
import CurrentUserContext from "../../../Context/CurrentUserContext";

const Body = ({setCurrentUser}) => {
    const currentUser = useContext(CurrentUserContext)
    return (
        <div className="maincontent">
            <div className="container">
                <div className="row">
                    <Switch>
                        <Route
                            path="/"
                            exact
                        >
                            <PostsPage
                                apilink="home"
                            />
                        </Route>
                        <Route
                            path="/homepage"
                            exact
                        >
                            <PostsPage
                                apilink="home"
                            />
                        </Route>

                        <Route
                            path="/post"
                            exact
                        >
                            <PostsPage
                                apilink="page"
                            />
                        </Route>

                        <Route
                            path="/post/:id"
                            exact
                        >
                            <Detail/>
                        </Route>
                        <Route
                            path="/login"
                            exact
                            render = { () => {
                                if(currentUser.token !== null) {
                                    alert("ban da dang nhap")
                                    return (
                                        <HomePage/>
                                    )
                                }
                                else return (
                                    <LoginForm
                                        setCurrentUser={setCurrentUser}
                                    />)
                            }}
                        >
                        </Route>

                        <Route
                            path="/logout"
                            exact
                            render = { () => {
                                if (currentUser.token !== null) {
                                    setCurrentUser({
                                        token: null
                                    });
                                    return <HomePage/>
                                } else {
                                    alert('ban chua dang nhap')
                                    return <HomePage/>
                                }

                            }}
                        >
                        </Route>

                        <Route
                            path="/edit/:id"
                            exact
                        >
                            <EditForm/>
                        </Route>

                    </Switch>
                    <div class="viewallpost">
                        <Link to={{pathname: `/homepage`}}>
                            <button class="buttonviewpost">
                                <p>VIEW ALL POST →</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;