import React, {useReducer} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {toast} from 'react-toastify';
import AuthDataSource from '../dataSource/AuthDataSource';
import {APIError} from '../models/Backend-default/APIError';
import {APIResponse} from "../models/Backend-default/APIResponse";
import {ResponseStatus} from "../models/Backend-default/APIResponseStatusEnum";
import setTokensOnCookies from '../utils/CookieUtils';
import {useNavigate} from 'react-router-dom'
import BgBlueContainerWhite from "../components/BgBlueConcainterWhite/BgBlueContainerWhite";
import AuthHeader from "../components/AuthHeader";
import CookieUtils from "../utils/CookieUtils";

const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function Login() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const navigate = useNavigate()
    const description = "Logue aqui para continuar"

    const handleFormChange = (e: any) => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

    async function performLogin(e: React.SyntheticEvent) {
        e.preventDefault()
        const result: APIResponse<any> | APIError = await AuthDataSource.login(formData.email, formData.password)
        if (result.status.toString() == ResponseStatus[ResponseStatus.SUCCESS]) {
            const tokens = (result as APIResponse<any>).data
            CookieUtils.setTokensOnCookies(tokens)
            toast.success("Logado com sucesso")


            navigate('/home', {replace: true})

        } else {
            const error = result as APIError
            toast.error(error.message)
        }

    }

    return (
        <BgBlueContainerWhite>
            <div className="text-left px-4 px-sm-5">
                <div className="brand-logo text-center">
                    <img src={require("../assets/img/logo.png")} alt="Logo image"/>
                </div>
            </div>

            <AuthHeader title="Company name" description={description}></AuthHeader>

            <Form className='pt-3' onSubmit={performLogin}>
                <Form.Group className='d-flex my-4'>
                    <Form.Control onChange={handleFormChange} name="email" type="name" placeholder='name' size='lg'
                                  className='h-auto'/>
                </Form.Group>

                <Form.Group className='d-flex my-4'>
                    <Form.Control onChange={handleFormChange} name='password' type="password" placeholder='password'
                                  size='lg' className='h-auto'/>
                </Form.Group>

                <Row className='buttons-div my-6'>

                    <Col md={6} className="m-auto">
                        <Form.Check>
                            <label className="text-center form-check-label text-muted">
                                <input type="checkbox" className="form-check-input mx-2"/>
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
        </BgBlueContainerWhite>

    )
}