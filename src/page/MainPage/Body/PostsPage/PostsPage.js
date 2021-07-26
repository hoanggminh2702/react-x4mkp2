import React, {useContext} from 'react';
import './Post.css'
import {Link} from "react-router-dom";
import useGETapi from "../../../../customHooks/useGETapi";
import APIlinkContext from "../../../../Context/APIlinkContext";

const mapResponeToData = respone => respone.data
const PostsPage = (props) => {
    const apiLink = useContext(APIlinkContext)
    let api = null
    if ("home" === props.apilink) {
        api = apiLink.newest
    } else {
        api = apiLink.allposts
    }

    const { isLoading, data: posts} =
    useGETapi(api,mapResponeToData, [])


    if (isLoading) {
        return <h1>Loading</h1>
    }
    return (
        <div className="component">
            {
                posts.map(post => (
                    <div key={post.id} className="book">
                        <div className="thumnails">
                            <Link to={{pathname: `/post/${post.id}`}}>
                                <h2 className="font-open-sans">{post.title}</h2>
                                <h3>{post.body}</h3>
                            </Link>
                            <p className="font-Lora">{post.description}</p>
                        </div>
                        <div className="btn">
                            <Link to={{pathname: `/edit/${post.id}`}}>
                            <button className="btn btn-outline-primary" type="button" name="edit">Edit</button>
                            </Link>
                            <Link to={{pathname: `/post/${post.id}`}}>
                                <button className="btn btn-outline-primary" type="submit" name="detail">Detail</button>
                            </Link>
                        </div>
                    </div>
                ))
            }

        </div>


    );
};

export default PostsPage;