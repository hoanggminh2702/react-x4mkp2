import React, {useContext} from 'react';
import {
    useParams
} from "react-router-dom";

import useGETapi from "../../../../customHooks/useGETapi";
import APIlinkContext from "../../../../Context/APIlinkContext";

const mapResponseToData = response => response.data

const Detail = () => {
    const apiLink = useContext(APIlinkContext)
    const {id} = useParams()
    const { isLoading, data:post, error} =
    useGETapi(apiLink.post + `${id}`, mapResponseToData, [])
    console.log(apiLink.newest)
    if(isLoading) {
        return <h1>Loading</h1>
    }
    return (

        <div className>
            <div className="component">
                <p>
                    <h1 style={{fontSize: '2em'}}>{post.title}</h1>

                </p>
                <p>
                    <h2 style={{fontSize: '1.15em'}} >{post.content}</h2>
                </p>
                <p>
                    <h3 style={{fontSize: '1.25em'}}>{post.description}</h3>
                </p>
            </div>
        </div>
    )
};


export default Detail;