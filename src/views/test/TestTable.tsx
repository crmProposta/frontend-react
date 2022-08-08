import React from "react";
import AppBar from "../../components/AppBar";
import RowTable from "./RowTable";
import './test.css'

export default function TestTable() {

    return <AppBar>
        <div>
        <table className="table" style={{ height: "100vh"}}>
            <tbody className="">
                <tr className="m-5">
                    <RowTable />
                </tr>
                <tr className="m-5">
                    <RowTable />
                </tr>
                <tr className="m-5">
                    <RowTable />
                </tr>
                <tr className="m-5">
                    <RowTable />
                </tr>

                <tr className="m-5">
                    <RowTable />
                </tr>
            </tbody>
        </table>
        </div>
    </AppBar>
}