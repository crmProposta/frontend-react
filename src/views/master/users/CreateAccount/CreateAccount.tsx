import React, {useReducer, useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import AppBar from "../../../../components/core/AppBar";
import PERMISSIONS from "../../../../res/Permissions";
import MasterDataSource from "../../../../dataSource/MasterDataSource";
import {APIResponse} from "../../../../models/Backend-default/APIResponse";
import {APIError} from "../../../../models/Backend-default/APIError";
import {toast} from "react-toastify";
import {findDOMNode} from "react-dom";
import findFormErrors from "./formValidation";
import {ErrorsFormCreateAccount, FormCreateAccount} from "./FormCreateAccount";
import ToastUtils from "../../../../utils/ToastUtils";

const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function CreateAccount() {
    const formInitialState = {
        loginLabel: "", password: "", confirmPassword: "", roles: [], enabled: false,
    } as FormCreateAccount
    const errorsInitialState = {
        loginLabel: "", password: "", confirmPassword: "", roles: "", enabled: "",
    } as ErrorsFormCreateAccount

    const [formData, setFormData] = useReducer(formReducer, formInitialState);
    const [formErrors, setFormErrors] = useState<ErrorsFormCreateAccount>(errorsInitialState)
    const findErrors = (formData: FormCreateAccount): ErrorsFormCreateAccount => findFormErrors(formData)
    let formRef = useRef(null)

    function generateFormPermissionSwitches() {

        let jsxSwitchPermissions: JSX.Element[] = [];

        PERMISSIONS.names.forEach((permissionName, index) => {
            const permissionId = `switch-permission-${permissionName}`
            const tooltipId = `button-tooltip-permission-${index}`
            const desc = PERMISSIONS.descriptions[index]
            jsxSwitchPermissions.push(
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

        return jsxSwitchPermissions
    }

    const handleFormChange = (e: any) => {
        let {name, value} = getFieldNameAndInputValue(e)
        setFormData({
            name: name,
            value: value,
        });
    }

    function getFieldNameAndInputValue(e: any) {
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
                inputs = getCheckBoxNormalValues(e) as Input
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

        const roleChanged = e.target.name
        const oldRoles = formData.roles != null ? formData.roles : []

        let rolesMarked = [...oldRoles, roleChanged]
        const isRoleChangedMarked = e.target.checked
        if (isRoleChangedMarked === false) rolesMarked = rolesMarked.filter(item => item !== roleChanged)

        const name = "roles"
        return {name, value: rolesMarked}
    }

    function getCheckBoxNormalValues(e: any) {
        return {
            name: e.target.name,
            value: e.target.checked
        }
    }

    async function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault()

        const newErrors = findErrors(formData)
        setFormErrors(newErrors)
        throwToastIfHasError(newErrors)

        const result: APIResponse<any> | APIError = await MasterDataSource.createAccount(formData)
        ToastUtils.throwToastIfRequestIsNotSuccessful(result)

        resetForm()
        toast.success("Conta criada com sucesso!")
    }

    function throwToastIfHasError(errors: ErrorsFormCreateAccount) {
        if (Object.keys(errors).length > 0)
            toast.error("Please, fill the form correctly")
    }


    function resetForm() {
        // @ts-ignore
        findDOMNode(formRef).reset();

        for (let formInitialStateKey in formInitialState) {
            setFormData({
                name: formInitialStateKey,
                // @ts-ignore
                value: formInitialState[formInitialStateKey]
            })
        }
    }


    return (
        <AppBar>
            <div className='w-100 mx-auto'>
                <h2 className="p-5 text-center ">Create user account</h2>
                <Form ref={(form: any) => formRef = form} className='m-5 my-4 w-50 mx-auto' onSubmit={handleFormSubmit}>
                    <Form.Group className={"p-2"}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleFormChange} name="loginLabel" type="name" placeholder='username'
                                      size='lg'
                                      className='h-auto'
                                      isInvalid={!!formErrors.loginLabel}
                        />
                        <Form.Control.Feedback type="invalid" children={formErrors.loginLabel}/>
                    </Form.Group>
                    <Form.Group className={"p-2"}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleFormChange} name="password" type="password"
                                      placeholder='password'
                                      size='lg'
                                      className='h-auto'
                                      isInvalid={!!formErrors.password}
                        />
                        <Form.Control.Feedback type="invalid" children={formErrors.password}/>
                    </Form.Group>
                    <Form.Group className={"p-2"}>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control onChange={handleFormChange} name="confirmPassword" type="password"
                                      placeholder='Confirm password' size='lg'
                                      className='h-auto'
                                      isInvalid={!!formErrors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid" children={formErrors.confirmPassword}/>
                    </Form.Group>
                    <Form.Group className={"d-flex m-auto"}>
                        <Form.Check
                            className={"m-auto"}
                            type="switch"
                            id={"switch-account-enabled"}
                            name={"enabled"}
                            label={"Let this account on active state?"}
                            onChange={handleFormChange}
                            isInvalid={!!formErrors.enabled}
                        >
                        </Form.Check>
                        <Form.Control.Feedback type="invalid" children={formErrors.enabled}/>
                    </Form.Group>
                    <Form.Group className={"p-2 pt-5"}>
                        <div>
                            <Form.Control type={"hidden"} isInvalid={!!formErrors.roles}/>
                            <Form.Label>Permissions<br/>(hover on switch to show details)</Form.Label>
                            <Form.Control.Feedback type="invalid" children={formErrors.roles}/>
                            {generateFormPermissionSwitches()}
                        </div>
                    </Form.Group>

                    <Button type="submit" className="btn btn-primary float-end">Create account</Button>
                </Form>
            </div>
        </AppBar>

    )
}