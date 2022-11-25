import React from "react";
import ReactDOM from "react-dom";
import Top from "./components/top.jsx";
import About from "./components/about_podcast.jsx";
import Team from "./components/team.jsx";
import Guest from "./components/guest.jsx";
ReactDOM.render(
    <div>
      <Top />
      <About/>
      <Team/>
	  <Guest/>
    </div>
    ,document.getElementById("root")
);
