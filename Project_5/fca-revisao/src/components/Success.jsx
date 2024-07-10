import React from "react";
import '../components/styles/Success.css'

export default function Success(props) {
    return(
        <p className="success">{props.label}</p>
    )
}