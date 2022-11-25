import React from "react";
import "./guest.css";
import{person_detail} from "./person_details.jsx"
function Person(props){
    const prof = props.prof;
    return person_detail(prof.name,prof.img);
}
function guest(){
    const gst=[{
        name: "Prof. Rajgunwanti Singh",
        img:'../../member_img.png'
    }]
    return(
        <div className="guest_top">
            <div className="guest_abt">
                <h1>About Our Guest</h1>
            </div>
            <div className="guest">
                {gst.map(e => <Person prof={e}/>)}
                <div className="guest_text">
                    <p>
                        At the end of the lesson, you’ll have a complete navigation scheme and interaction flow for the app. In this lesson, you use navigation controllers and segues to create the navigation flow of the FoodTracker app. At the end of the lesson, you’ll have a complete navigation scheme and interaction flow for the app. In this lesson, you use navigation controllers and segues to create the navigation flow of the FoodTracker app. At the end of the lesson, you’ll have a complete navigation scheme and interaction flow for the app.In this lesson, you use navi 
                    </p>
                </div>
            </div>
        </div>
    );
}
export default guest;