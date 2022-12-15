import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import CookieUtils from "../../utils/CookieUtils";
import jwtDecode from "jwt-decode";
import 'react-pro-sidebar/dist/css/styles.css';
import './index.css';
import { FaBars, FaRegAddressCard } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Roles } from "../../models/Backend-default/Roles";
import { TokenStructure } from "../../models/Backend-default/TokenStructure";

type Props = {
    onToggleEvent: any
}
export default function Sidebar({ onToggleEvent }: Props) {

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const token = CookieUtils.getAccessToken();
    const navigate = useNavigate();

    if (token == null || token.isEmpty) {
        navigate("/")
        return <></>
    }

    const tokenDecoded = jwtDecode(token) as TokenStructure

    const roles: number[] = tokenDecoded.roles.map(role => {
        // @ts-ignore
        return Roles[role];
    })
    console.log(Math.min(...roles));
    const hasMasterRole = () => tokenDecoded.roles.includes("MASTER")


    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
        onToggleEvent()
    };
    const handleToggleSidebar = (value: any) => {
        setToggled(value);
    };


    return (<ProSidebar
        style={{ zIndex: 20, height: "100rem", position: "fixed", left: "0" }}
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
    >
        <SidebarHeader
            // @ts-ignore
            icon={FaBars}
        >
            <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                YourCompanyName
            </div>
            <div className="closemenu"
                style={{
                    position: 'absolute',
                    cursor: "pointer",
                    fontSize: 30,
                    paddingRight: 10,
                    lineHeight: "20px",
                    zIndex: 99,
                    right: 0,
                    top: 55,
                }}
                onClick={handleCollapsedChange}>
                {/* changing menu collapse icon on click */}
                {collapsed ? (
                    <FiArrowRightCircle />
                ) : (
                    <FiArrowLeftCircle />
                )}
            </div>


        </SidebarHeader>
        <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem
                    icon={""}
                    suffix={<span className="badge red">Novo</span>}
                >
                    Dashboard
                </MenuItem>
                <MenuItem icon={""}> Components</MenuItem>
            </Menu>
            <Menu iconShape="circle">
                <SubMenu
                    suffix={<span className="badge yellow">3</span>}
                    title={"Com suffix"}
                    icon={""}
                >
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                </SubMenu>
                <SubMenu
                    prefix={<span className="badge gray">3</span>}
                    title={"Com prefix"}
                    icon={""}
                >
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                </SubMenu>
                <SubMenu title={"multilevel"} icon={""}>
                    <MenuItem> 1 </MenuItem>
                    <MenuItem> 2 </MenuItem>
                    <SubMenu title={`Submenu 3`}>
                        <MenuItem>3.1 </MenuItem>
                        <MenuItem>3.2 </MenuItem>
                        <SubMenu title={`Submenu 3.3`}>
                            <MenuItem> 3.3.1 </MenuItem>
                            <MenuItem> 3.3.2 </MenuItem>
                            <MenuItem> 3.3.3 </MenuItem>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </Menu>

            <Menu iconShape="circle">
                <MenuItem
                    icon={""}
                    suffix={<span className="badge red">Novo</span>}
                >
                    Dashboard
                    <Link to={"/proposals"} />
                </MenuItem>

                {/*Fim do template*/}

                {hasMasterRole() && (
                    <SubMenu
                        title={"Master role"}
                        icon={<FaRegAddressCard />}
                    >
                        <MenuItem>
                            Adicionar conta
                            
                        </MenuItem>
                        <MenuItem>
                            Listar conta
                            <Link to={"/master/list-account"} />
                        </MenuItem>
                    </SubMenu>
                )}

            </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
            <div
                className="sidebar-btn-wrapper"
                style={{
                    padding: '20px 24px',
                }}
            >
                <a
                    href="https://github.com/azouaoui-med/react-pro-sidebar"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                >

                    <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    </span>
                </a>
            </div>
        </SidebarFooter>
    </ProSidebar>);
}