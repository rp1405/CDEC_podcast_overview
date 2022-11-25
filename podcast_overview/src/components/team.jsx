import React from "react";
import "./team.css";
import{person_detail} from "./person_details.jsx"
function Person(props){
    const prof = props.prof;
    return person_detail(prof.name,prof.img);
}
function team(){
    const members = [
        {
            name: "Prof. Rajgunwanti Singh",
            img:'../../member_img.png'
        },
        {
            name: "Prof. Rajgunwanti Singh",
            img:'../../member_img.png'
        },
        {
            name: "Prof. Rajgunwanti Singh",
            img:'../../member_img.png'
        },
        {
            name: "Prof. Rajgunwanti Singh",
            img:'../../member_img.png'
        }
    ]
    return(
        <div className="team_top">
            <div className="team_abt">
                <h1>About Our Team</h1>
            </div>
            <div className="members">
                {members.map(e => <Person prof={e}/>)}
            </div>
        </div>
    );
}
export default team;