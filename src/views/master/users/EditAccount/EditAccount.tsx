import React, { useReducer, useRef, useState, useEffect } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import AppBar from '../../../../components/AppBar';
import MasterDataSource from "../../../../dataSource/MasterDataSource";
import { APIError } from "../../../../models/Backend-default/APIError";
import { APIResponse } from "../../../../models/Backend-default/APIResponse";
import PERMISSIONS from "../../../../res/Permissions";
import ToastUtils from "../../../../utils/ToastUtils";
import findFormErrors from "./formValidation";
import { ErrorsFormEditAccount, FormEditAccount } from "./FormEditAccount";
import ResponseUtils from "../../../../utils/ResponseUtils";
import { findDOMNode } from "react-dom";

const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function EditAccount() {
    const router = useParams()
    const navigate = useNavigate()

    const formInitialState = {
        loginLabel: "", password: "", confirmPassword: "", roles: [], enabled: false,
    } as FormEditAccount
    const errorsInitialState = {
        loginLabel: "", password: "", confirmPassword: "", roles: "", enabled: "",
    } as ErrorsFormEditAccount

    const [formData, setFormData] = useReducer(formReducer, formInitialState);
    const [formErrors, setFormErrors] = useState<ErrorsFormEditAccount>(errorsInitialState)
    const findErrors = (formData: FormEditAccount): ErrorsFormEditAccount => findFormErrors(formData)
    let formRef = useRef(null)


    useEffect(() => {
        const {id} = router;
        console.log(id)

        getAccountById(id)
    },[])

    useEffect(() => {
        console.log(formData)
    },[formData])

    async function getAccountById(id: any) {
        let response: APIResponse<any> | APIError = await MasterDataSource.getAccountById(id)
        if (ResponseUtils.responseIsNotSuccessful(response.status)) {
            toast.error((response as APIError).message)
            return
        }

        let data = (response as APIResponse<any>).data
        //Pegando os inputs baseado na chave da data,
        Object.keys(data).forEach(key => {

            let querySelectorLabel = ""

            switch(key) {
                case "username": {
                    querySelectorLabel = "loginLabel"; break;
                }
                case "enabled": {
                    querySelectorLabel = "enabled"; break;
                }
                default: querySelectorLabel = ""; break;
            }
            
            let value: any = "";
            if (key !== "roles") {
                // @ts-ignore
                value = findDOMNode(formRef).querySelector(`input[name='${querySelectorLabel}']`);
            } else if (key === "roles") {
                //TODO: pegar os checkboxes
            }
            console.log(value)
          });
        console.log(data)
    }
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

        redirectToListAccount()
        toast.success("Conta criada com sucesso!")
    }

    function throwToastIfHasError(errors: ErrorsFormEditAccount) {
        if (Object.keys(errors).length > 0)
            toast.error("Please, fill the form correctly")
    }


    function redirectToListAccount() {
        navigate("/master/list-account")
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