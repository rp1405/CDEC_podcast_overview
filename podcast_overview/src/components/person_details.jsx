import React from "react";
import "./person_details.css";
export function person_detail(name,url){
    return(
        <div className="box">
            <div>
                <img src={url} className="photo"></img>
            </div>
            <div className="name">
                <h1>{name}</h1>
                {/* <div className="vector">
                    <img src='../../Vector.png'></img>
                </div> */}
            </div>
        </div>
    );
}