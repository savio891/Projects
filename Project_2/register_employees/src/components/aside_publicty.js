import React from "react";
import Style from "../style.css"
import item1 from "../imgs/gta.png"
import item2 from "../imgs/minecraft.png"
import item3 from "../imgs/godWar.png"
export default function AsidePublicity() {
    return(
        <aside className="publicity">
            <h2>Publicity</h2>
            <div className="item-publicity">
                <a href="">
                    <img src={item1}></img>
                </a>
            </div>
            <div className="item-publicity">
                <a href="">
                    <img src={item3}></img>
                </a>
            </div>
            <div className="item-publicity">
                <a href="#">
                    <img src={item2} ></img>
                </a>
            </div>
        </aside>
    )
}