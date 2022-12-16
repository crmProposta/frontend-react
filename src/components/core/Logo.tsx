import React from "react";

export default function Logo() {
    return(
        <div className="text-left px-4 px-sm-5">
            <div className="brand-logo text-center">
                <img src={require("../../assets/img/logo.png")} alt="Logo image"/>
            </div>
        </div>
    )
}