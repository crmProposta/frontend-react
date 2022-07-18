import React, {useReducer} from "react";
import Sidebar from "../../components/SideBar";
import Form from "react-bootstrap/Form";
import {Button, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import TopBar from "../../components/TopBar";

const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function CreateAccount() {
    const [formData, setFormData] = useReducer(formReducer, {});

    const permissions = ['CUSTOMER', 'ATTENDANT', 'COORDINATOR', 'ADMIN', 'MASTER']
    const permissionsDescription = [
        'Can receive points after get a concluded proposal',
        'Can create a proposal and get points when a proposal is concluded',
        'Can manage proposals by a chunk',
        'Can manage proposals and users by a chunk',
        'Can manage proposals and users of a whole system'
    ]

    function generateFormSwitches() {
        let jsxForm: any[] = [];
        permissions.forEach((permission, index) => {
            const permissionId = `switch-permission-${permission}`
            const tooltipId = `button-tooltip-permission-${index}`
            const desc = permissionsDescription[index]
            jsxForm.push(
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id={tooltipId}>{desc}</Tooltip>}
                >
                    <Form.Check
                        type="switch"
                        id={permissionId}
                        label={permission}>
                    </Form.Check>
                </OverlayTrigger>
            )
        })

        return jsxForm
    }

    const handleFormChange = (e: any) => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

    return (
        <div style={{height: "100vh", display: 'flex', overflow: 'scroll initial'}}>
            <Sidebar/>
            <div className={"w-100"}>
            <Row>
                <TopBar />
            </Row>
            <Row>
                <div className='w-100 mx-auto'>
                    <Form className='m-5 my-4 w-50 mx-auto'>
                        <Form.Group className={"p-2"}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleFormChange} name="username" type="name" placeholder='username'
                                          size='lg'
                                          className='h-auto'/>
                        </Form.Group>
                        <Form.Group className={"p-2"}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleFormChange} name="password" type="password"
                                          placeholder='password'
                                          size='lg'
                                          className='h-auto'/>
                        </Form.Group>
                        <Form.Group className={"p-2"}>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control onChange={handleFormChange} name="confirm_password" type="password"
                                          placeholder='Confirm password' size='lg'
                                          className='h-auto'/>
                        </Form.Group>
                        <Form.Group className={"p-2 pt-5"}>
                            <Form.Label>Permissions<br/>(hover on switch to show details)</Form.Label>
                            {generateFormSwitches()}
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary float-end">Create account</Button>
                    </Form>
                </div>
            </Row>
            </div>
        </div>

    )
}