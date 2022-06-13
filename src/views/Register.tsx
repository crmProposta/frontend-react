import React, { useEffect, useReducer, useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup, Row } from 'react-bootstrap';
import AuthDataSource from '../dataSource/AuthDataSource';

const cssBgBlueFullHeight = {
    height: "100%",
    minHeight: "100vh",
    background: '#29B8FF'
}

const formReducer = (state: any,event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function Login() {
    const [formData, setFormData] = useReducer(formReducer, {});


    const handleChange = (e: any) => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

    function peformLogin(e: React.SyntheticEvent) {
        e.preventDefault()
        AuthDataSource.register(formData.email, formData.password)

    }

    return (
        <div className='align-items-center px-auto pt-5' style={cssBgBlueFullHeight}>

            <div className='divider p-5'></div>


            <Container id="bg-light-container" fluid="md" className='bg-light mx-auto border rounded-3'>
                <Row className='w-100 mx-0'>
                    <Col lg={4} className='mx-auto'>
                        <div className="text-left px-4 px-sm-5">
                            <div className="brand-logo text-center">
                                <img src={require("../assets/img/logo.png")}></img>
                            </div>
                        </div>

                        <div className='Title_description text-center'>
                            <div className="Titulo m-auto">
                                <h4>Company name</h4>
                            </div>

                            <br className='divider' />

                            <h6 className='font-weight-light'>Logue aqui para continuar</h6>
                        </div>

                        <Form className='pt-3' onSubmit={peformLogin}>
                            <Form.Group className='d-flex my-4'>
                                <Form.Control onChange={handleChange} name="email" type="email" placeholder='email' size='lg' className='h-auto' />
                            </Form.Group>

                            <Form.Group className='d-flex my-4'>
                                <Form.Control onChange={handleChange} name='password' type="password" placeholder='password' size='lg' className='h-auto' />
                            </Form.Group>

                            <Row className='buttons-div my-6'>

                                <Col md={6} className="m-auto">
                                    <Form.Check>
                                        <label className="text-center form-check-label text-muted">
                                            <input type="checkbox" className="form-check-input mx-2" />
                                            <i className="input-helper"></i>
                                            Keep me signed in
                                        </label>
                                    </Form.Check>
                                </Col>

                                <Col md={4} className="m-auto">
                                    <Button className='px-3' type='submit'>Sign in</Button>
                                </Col>

                            </Row>

                            <br className="divider m-6"></br>

                            <div className="pt-2 text-center mt-4 font-weight-light">
                                <Row>
                                    <Col md={6} className='m-auto text-muted'>
                                        Don't have account? <Button>Create</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>

                    </Col>
                </Row>
                <div className='divider p-5'></div>
            </Container>


        </div>
    )
}

