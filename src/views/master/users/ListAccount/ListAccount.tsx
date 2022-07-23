import React, {useEffect, useState} from "react";
import AppBar from "../../../../components/AppBar";
// @ts-ignore
import BootstrapTable from 'react-bootstrap-table-next';
import MasterDataSource from "../../../../dataSource/MasterDataSource";
import ResponseUtils from "../../../../utils/ResponseUtils";
import {APIResponse} from "../../../../models/Backend-default/APIResponse";
import {APIError} from "../../../../models/Backend-default/APIError";
import {toast} from "react-toastify";
import {Button} from "react-bootstrap";
import './index.css'
import {UserDTO} from "../../../../models/Backend-default/UserDTO";
import {Roles, RolesColors} from "../../../../models/Backend-default/Roles";
import RoleUtil from "../../../../utils/RoleUtil";

export default function ListAccount() {

    const [products, setProducts] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // @ts-ignore
    useEffect(() => {
        async function getAccounts() {
            let response: APIResponse<any> | APIError = await MasterDataSource.listAccount()
            if (ResponseUtils.responseIsNotSuccessful(response.status)) {
                toast.error((response as APIError).message)
                return
            }

            let data = (response as APIResponse<any>).data
            setProducts(data)
        }

        getAccounts()

    }, [])

    const columns = [{
        dataField: 'id',
        text: 'ID'
    }, {
        dataField: 'username',
        text: 'Username'
    }, {
        dataField: 'enabled',
        text: 'Activation state',
        formatter: (cellContent: any, row: any) => {
            const text = row.enabled ? "enabled" : "disabled";
            const color = row.enabled ? "success" : "danger";
            return (<p className={`text-${color}`}>{text}</p>)
        }
    }, {
        dataField: 'higherRole',
        text: 'Higher role',
        formatter: (cellContent: any, row: any) => {
            const user = (row as UserDTO);
            const higherRole = RoleUtil.higherRole((user as UserDTO).roles) as string
            // @ts-ignore
            return (<p className={`my-auto text-center rounded rounded-5 text-light bg-${RolesColors[higherRole]}`}>{higherRole}</p>)
        }
    }, {
        dataField: 'editAction',
        text: 'Edit',
        isDummyField: true,
        formatter: (cellContent: any) => {
            return (
                <Button className={"text-light-on-hover"} variant={"outline-warning"} size={"sm"}> Edit</Button>
            );
        }
    }, {
        dataField: 'disableAction',
        text: 'Disable',
        isDummyField: true,
        formatter: (cellContent: any, row: { enabled: any; }) => {
            const color = row.enabled ? "outline-danger" : "outline-primary"
            const text = row.enabled ? "disable" : "enable"
            return (
                <Button variant={color} size={"sm"}> {text}</Button>
            );
        }
    }];

    return (
        <AppBar>
            <div className={"w-100 mx-auto m-5"}>
                <h2 className="p-2 text-center">Account list</h2>
                <div className={"w-75 mx-auto"}>
                    <BootstrapTable keyField='id' data={products} columns={columns}/>
                </div>
            </div>
        </AppBar>
    );
}