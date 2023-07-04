import React from "react";
import Style from '../style.css'

export default function Aside() {
    return(
        <aside>
            <div className="lateral-bar">
                <ul>
                    <nav className="bar-aside">
                        <li>
                            <a href="#"><button title="Know the history of this company">Who are we?</button></a>
                        </li>
                        <li>
                            <a href="#"><button title="See what types of platforms our games work on">Gaming platform</button></a>
                        </li>
                        <li>
                            <a href="#"><button title="Get a game pack for your device">Request service now</button></a>
                        </li>
                        <li>
                            <a href="#"><button title="If you are a developer, join our team.">Work with us</button></a>
                        </li>
                    </nav>
                </ul>
            </div>
         </aside>
    )
}