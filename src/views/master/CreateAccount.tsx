import React, {useReducer} from "react";
import Form from "react-bootstrap/Form";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import AppBar from "../../components/AppBar";
import PERMISSIONS from "../../res/Permissions";
import MasterDataSource from "../../dataSource/MasterDataSource";
import {APIResponse} from "../../models/Backend-default/APIResponse";
import {APIError} from "../../models/Backend-default/APIError";
import {ResponseStatus} from "../../models/Backend-default/APIResponseStatusEnum";
import {toast} from "react-toastify";
import {findDOMNode} from "react-dom";

const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function CreateAccount() {
    const [formData, setFormData] = useReducer(formReducer, {});
    let formRef: any = ""

    function generateFormSwitches() {

        let jsxForm: JSX.Element[] = [];

        PERMISSIONS.names.forEach((permissionName, index) => {
            const permissionId = `switch-permission-${permissionName}`
            const tooltipId = `button-tooltip-permission-${index}`
            const desc = PERMISSIONS.descriptions[index]
            jsxForm.push(
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id={tooltipId}>{desc}</Tooltip>}
                >
                    <Form.Check
                        type="switch"
                        name={permissionName}
                        id={permissionId}

                        label={permissionName}
                        onChange={handleFormChange}
                        className={"switch-permission"}
                    >
                    </Form.Check>
                </OverlayTrigger>
            )
        })

        return jsxForm
    }

    const handleFormChange = (e: any) => {
        let {name, value} = getInputs(e)
        setFormData({
            name: name,
            value: value,
        });
    }

    function getInputs(e: any) {
        type Input = {
            name: string,
            value: any,
        }
        let inputs: Input

        const isCheckbox = e.target.type === "checkbox";
        const isCheckBoxPermissions = e.target.id.startsWith("switch-permission")

        if (isCheckbox) {
            if (isCheckBoxPermissions) {
                inputs = getCheckBoxPermissionsValues(e) as Input
            } else {
                inputs = getCheckBoxValues(e) as Input
            }
        } else {
            inputs = {
                name: e.target.name,
                value: e.target.value
            }
        }

        return inputs
    }

    function getCheckBoxPermissionsValues(e: any) {
        const name = "roles"
        const targetName = e.target.name
        const oldRoles = formData.roles != null ? formData.roles : []
        let value = [
            ...oldRoles, targetName
        ]
        if (e.target.checked === false) {
            value = value.filter(item => item !== targetName)
        }
        console.log(value)
        return {name, value}
    }

    function getCheckBoxValues(e: any) {
        return {
            name: e.target.name,
            value: e.target.checked
        }
    }

    async function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            toast.error("'password' and 'confirm password' fields must be equals");
            return
        }

        const result: APIResponse<any> | APIError = await MasterDataSource.createAccount(formData)

        if (result.status.toString() !== ResponseStatus[ResponseStatus.SUCCESS]) {
            const error = result as APIError
            toast.error(error.message)
            return;
        }

        toast.success("Conta criada com sucesso!")
        // @ts-ignore
        findDOMNode(formRef).reset();
    }

    return (
        <AppBar>
            <div className='w-100 mx-auto'>
                <h2 className="p-5 text-center">Create user account</h2>
                <Form ref={(form: any) => formRef = form} className='m-5 my-4 w-50 mx-auto' onSubmit={handleFormSubmit}>
                    <Form.Group className={"p-2"}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleFormChange} name="loginLabel" type="name" placeholder='username'
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
                        <Form.Control onChange={handleFormChange} name="confirmPassword" type="password"
                                      placeholder='Confirm password' size='lg'
                                      className='h-auto'/>
                    </Form.Group>
                    <Form.Group className={"d-flex m-auto"}>
                        <Form.Check
                            className={"m-auto"}
                            type="switch"
                            id={"switch-account-enabled"}
                            name={"enabled"}
                            label={"Let this account on active state?"}
                            onChange={handleFormChange}
                        >
                        </Form.Check>
                    </Form.Group>
                    <Form.Group className={"p-2 pt-5"}>
                        <div>
                            <Form.Label>Permissions<br/>(hover on switch to show details)</Form.Label>
                            {generateFormSwitches()}
                        </div>
                    </Form.Group>

                    <Button type="submit" className="btn btn-primary float-end">Create account</Button>
                </Form>
            </div>
        </AppBar>

    )
}