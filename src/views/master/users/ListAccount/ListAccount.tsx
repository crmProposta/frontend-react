import React, { useEffect, useState } from "react";
import { AccordionButton, Button, Modal } from "react-bootstrap";
// @ts-ignore
import BootstrapTable from 'react-bootstrap-table-next';
import { toast } from "react-toastify";
import { API } from "../../../../api/PropostaAPI";
import AppBar from "../../../../components/AppBar";
import MasterDataSource from "../../../../dataSource/MasterDataSource";
import { APIError } from "../../../../models/Backend-default/APIError";
import { APIResponse } from "../../../../models/Backend-default/APIResponse";
import { Roles, RolesColors } from "../../../../models/Backend-default/Roles";
import { UserDTO } from "../../../../models/Backend-default/UserDTO";
import ResponseUtils from "../../../../utils/ResponseUtils";
import RoleUtil from "../../../../utils/RoleUtil";
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function ListAccount() {

    const [data, setData] = useState([] as any[])
    const [disableAccountIdOnClick, setDisableAccountIdOnClick] = useState(-1)
    const navigate = useNavigate()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    // @ts-ignore
    useEffect(() => {
        getAccountsOnAPI()

    }, [])

    async function getAccountsOnAPI() {
        let response: APIResponse<any> | APIError = await MasterDataSource.listAccount()
        if (ResponseUtils.responseIsNotSuccessful(response.status)) {
            toast.error((response as APIError).message)
            return
        }

        let data = (response as APIResponse<any>).data
        setData(data)
    }

    useEffect(() => {
        async function toggleActivationAccountOnClick() {
            if (disableAccountIdOnClick == null || disableAccountIdOnClick === -1) return

            const user = data.find(user => user.id === disableAccountIdOnClick)
            if (user == null) {
                toast.error("user doesn't exists")
                removeAccountIdOnClick()
                return
            }

            const isChangedOnBackend = await toggleActivationStatusOnBackEnd(disableAccountIdOnClick, user.enabled)
            if (ResponseUtils.responseIsNotSuccessful(isChangedOnBackend.status)) {
                toast.error((isChangedOnBackend as APIError).message)
                removeAccountIdOnClick()
                return
            }
                
            const dataUpdated = updateTableWithUserToggled((data as UserDTO[]), disableAccountIdOnClick)
            setData(dataUpdated)

            toast.success("changed successfully")
            removeAccountIdOnClick()
        }
        toggleActivationAccountOnClick()

    }, [data, disableAccountIdOnClick])

    

    async function toggleActivationStatusOnBackEnd(disableAccountIdOnClick: number, isToDisable : boolean) {
        return isToDisable ? await MasterDataSource.disableAccount(disableAccountIdOnClick)
            : await MasterDataSource.enableAccount(disableAccountIdOnClick)
    }


    function updateTableWithUserToggled(data: UserDTO[], disableAccountIdOnClick: number) {
        return data.map(account => {
            if (account.id === disableAccountIdOnClick) {
                let enabled = account.enabled
                return { ...account, enabled: !enabled }
            } else {
                return account;
            }
        })
    }

    function removeAccountIdOnClick() {
        setDisableAccountIdOnClick(-1)
    }

    function toggleEnabledAccont(id: number): React.MouseEventHandler<HTMLButtonElement> | undefined {
        setDisableAccountIdOnClick(id)
        return undefined
    }

    function redirectToEditAccount(id: number) {
        navigate(`/master/edit-account/${id}`)
    }

    const bootstrapTable2ExpandRowListener = {
        renderer: (row: any) =>
        (
            <div>
                <p>Permissoes:</p>
                <div className={"ms-5"}>
                    {returnRolesAsPTag(row.roles as Roles[])}
                </div>
            </div>
        ),
        showExpandColumn: true,
        expandByColumnOnly: true,
        expandColumnRenderer: (expandObj: any) => {

            let color = "light"
            let text = "+"
            if (expandObj.expanded)
                if (expandObj.expanded) {
                    text = "-"
                }
            return (
                <Button variant={color} size="sm"> {text}</Button>
            );
        }
    };

    const returnRolesAsPTag = (roles: Roles[]) => {
        let jsxRoles: JSX.Element[] = [];
        roles.forEach(role => {
            jsxRoles.push(<p>{role}</p>)
        })

        return jsxRoles
    }

    const bootstrapTable2Columns = [{
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
            return (
                // @ts-ignore
                <p className={`my-auto text-center rounded rounded-5 text-light bg-${RolesColors[higherRole]}`}>{higherRole}</p>)
        }
    }, {
        dataField: 'editAction',
        text: 'Edit',
        formatter: (cellCOntent: any, row: any) => {
            return (
                <Button className={"text-light-on-hover"} onClick={() => redirectToEditAccount(row.id)} variant={"outline-warning"} size={"sm"}> Edit</Button>
            );
        }
    }, {
        dataField: 'disableAction',
        text: 'Disable',
        formatter: (cellContent: any, row: any) => {
            const color = row.enabled ? "outline-danger" : "outline-primary"
            const text = row.enabled ? "disable" : "enable"
            return (
                <Button variant={color} size={"sm"} onClick={() => toggleEnabledAccont(row.id)}> {text}</Button>
            );
        }
    }];

    return (
        <AppBar>
            <div className={"w-100 mx-auto m-5"}>
                <h2 className="p-2 text-center">Account list</h2>
                <div className={"w-75 mx-auto"}>
                    <BootstrapTable keyField='id'
                        data={data}
                        columns={bootstrapTable2Columns}
                        expandRow={bootstrapTable2ExpandRowListener}
                    />
                </div>

            </div>
        </AppBar>
    );
}
