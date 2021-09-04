import React from "react";

import "../../index.css";
import "./WatchesBlock.css";

import Watch from "./Watch";
import TodayDate from "./TodayDate";


export default class WatchesBlock extends React.Component {
    render() {

        let niceColor = {
            color: "#ff7700",
        };

        return(
            <div className="wrapper watchesBlockWrapper">
                <div className="watchesBlockWrapper__lefttside">
                    
                </div>
                <div className="watchesBlockWrapper__rightside">
                    <div className="watchesBlockWrapper__rightside_top">
                        <Watch/>
                        <TodayDate/>
                    </div>
                    <div className="watchesBlockWrapper__rightside_down">
                        <p>Have a <strong><i style={niceColor}>nice</i></strong> day!</p>
                    </div>
                </div>
            </div>
        );
    }
}