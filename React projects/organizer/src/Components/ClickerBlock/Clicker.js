import React, {useState} from "react";
import "../../index.css";

export default function Clicker() {
    var clicks = parseInt(localStorage.getItem('clicks')) || 0;
    const [click, setClick] = useState(clicks);

    function btnClick(newCount){
        setClick(newCount);
        localStorage.setItem('clicks', newCount);
    }

    return (
        <div>
            <button onClick={()=> btnClick(click + 1)}>
                <img className="cookie rotation" src="../../img/Cookie.png" alt="Cookie =)=)"/>
            </button>
            <p className="clickerCount">{click}</p>
        </div>
    );
}