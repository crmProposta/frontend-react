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
       <Sidebar></Sidebar>
    )

}