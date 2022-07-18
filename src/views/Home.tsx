import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import Sidebar from "../components/SideBar";

export default function Home() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
    },[])

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
       <Sidebar />
       <div>test</div>
       </div>
       
    )

}