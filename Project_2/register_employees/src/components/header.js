import React from "react";
import Style from "../style.css"
import Logo from "../imgs/war_burned.png"

export default function Header() {
    return(
        <header className="top-screen">
            <div>
                <div className="box-top">  
                    <ul>
                        <nav className="logo-war"> 
                            <li>
                                <a href="#" ><img src={Logo} title="War-Game Company" translate="no"></img></a>
                            </li>
                            <li>
                                <a href="#" translate="no">War-Game <span translate="yes">Company</span></a>
                            </li>
                        </nav>
                        <nav className="menu-box">
                            <li>
                                <a href="#" translate="no"><button>Home</button></a>
                            </li>
                            <li>
                                <a href="#"><button>Services</button></a>
                            </li>
                            <li>
                                <a href="#"><button>Explore</button></a>
                            </li>
                            <li>
                                <a href="#"><button>Help</button></a>
                            </li>
                            <li>
                                <a href="#"><button>About</button></a>
                            </li>
                        </nav>
                        <nav className="menu-right">
                            <li>
                                <a href="#"><button>Register</button></a>
                            </li>
                            <li>
                                <a href="#"><button translate="no">Login</button></a>
                            </li>
                        </nav>
                    </ul>
                </div>
                 <div>
                    <button className="menu-toggle" ></button>
                 </div>
                <div>
                     <nav className="menu-lateral">
                        <li>
                            <a href="#" translate="no"><button>Home</button></a>
                        </li>
                        <li>
                            <a href="#"><button>Services</button></a>
                        </li>
                        <li>
                            <a href="#"><button>Explore</button></a>
                        </li>
                        <li>
                            <a href="#"><button>Help</button></a>
                        </li>
                        <li>
                            <a href="#"><button>About</button></a>
                        </li>
                    </nav>
                    <nav className="right-lateral">
                        <li>
                            <a href="#"><button>Register</button></a>
                        </li>
                        <li>
                            <a href="#"><button translate="no">Login</button></a>
                        </li>
                    </nav>
                </div>
            </div>
        </header>
    )
}