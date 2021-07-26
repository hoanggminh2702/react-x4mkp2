import React, {useContext, useState} from 'react';
import {Formik} from 'formik';
import {Button, Form, Row} from 'react-bootstrap'
import axios from "axios";
import "./login.css"
import {Link} from "react-router-dom";
import CurrentUserContext from "../../../../Context/CurrentUserContext";
import HomePage from "../HomePage/HomePage";



const initalValues = {email: '', password: ''}

const validateValues = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (values.password.length < 8) {
        errors.password = 'At least 8 chars'
    }
    return errors;
}


const LoginForm = ({setCurrentUser}) => {
    const currentUser = useContext(CurrentUserContext)

    const [loginSuccess, setLoginSuccess] = useState(false)
    console.log(loginSuccess)
    const onSubmit = (values, {setSubmitting}) => {
        axios.post('http://localhost:8080/authenticate', {
            username: values.email,
            password: values.password
        }).then(response => {
            setLoginSuccess(true)
            setCurrentUser({
                token: response.data.jwttoken
            });
        }).catch(error => {
            alert('dang nhap that bai')
        })

    }

    if (loginSuccess === true) {
        return <HomePage/>
    }
    return (
        <div className="component">
            <Formik

                initialValues={initalValues}
                validate={validateValues}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group controlId="validationFormik01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.email && errors.email}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationFormik02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && errors.password}
                                />

                                <Form.Control.Feedback style={{color: '#dc3545', fontSize: '0.875em'}} type='Invalid'>{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                    <div className="under">

                        <Button type="submit">Login</Button>

                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;