import React from 'react';
import PostsPage from "../PostsPage/PostsPage";

const HomePage = () => {
    return (
        <div>
            <PostsPage link="http://localhost:8080/api/v1/posts/find10newestposts"/>
        </div>
    );
};

export default HomePage;