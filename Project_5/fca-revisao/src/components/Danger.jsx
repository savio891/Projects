import React from "react";
import '../components/styles/Danger.css'

export default function Danger(props) {
    return(
        <p className="danger">{props.label}</p>
    )
}