import React from "react";
import '../components/styles/Warning.css'

export default function Warning(props) {
    return(
        <p className="warning">{props.label}</p>
    )
}