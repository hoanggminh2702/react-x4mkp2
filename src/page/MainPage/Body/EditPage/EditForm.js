import React, {useContext, useState, useEffect} from 'react';
import {Button, Form} from "react-bootstrap";

import {
    useParams
} from "react-router-dom";
import APIlinkContext from "../../../../Context/APIlinkContext";
import axios from "axios";
import CurrentUserContext from "../../../../Context/CurrentUserContext";

const mapResponseToData = response => response.data

const EditForm = () => {
    const currentUser = useContext(CurrentUserContext)
    const apiLink = useContext(APIlinkContext)
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState(
        {
            title: null,
            description: null,
            content: null
        })

    const [value, setValue] = useState({
        title: '',
        description: '',
        content:''
    })
    useEffect(() => {
        axios.get(apiLink.post +`${id}`).then(
            response => {
                setPost({
                    title: response.data.title,
                    description: response.data.description,
                    content: response.data.content
                })
                setIsLoading(false)
                setValue({
                    title: response.data.title,
                    description: response.data.description,
                    content:response.data.content
                })
            }
        ).catch(error => {
            setError('Something went wrong')
            console.log(error)
            setIsLoading(false)
        })
    }, post)


    const [touched, setTouched] = useState({
        title: false,
        description: false,
        content: false
    })


    const handleOnChange = evt => {
        const name = evt.target.name
        setValue( {
            ...value,
            [name]: evt.target.value
        })
    }

    const handleOnBlur = evt => {
        setTouched( {
            ...touched,
            [evt.target.name] : true
        })
    }

    const handleOnsubmit = evt => {
        evt.preventDefault();
        axios.put(apiLink.update + `${id}`, {
            title: value.title,
            description: value.description,
            content: value.content
        }, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        }).then(response => {
            alert('Chinh sua bai viet thanh cong')
        }).catch(error => {
            alert('chinh sua that bai')
        })
    }

    return (

        <Form onSubmit={handleOnsubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    value={value.title}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    name="title"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Descrition</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Description"
                    value={value.description}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    name="description"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={value.content}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    name="content"
                />
            </Form.Group>
            <Button type="submit">Update</Button>
        </Form>

    );
};

export default EditForm;