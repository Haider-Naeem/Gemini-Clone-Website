import React from "react";
import "./Sidebar.css";
import Sidebartop from "./Sidebartop";
import Sidebarbottom from "./Sidebarbottom";
import { useState } from "react";


const Sidebar = () => {
  const [extended,setExtended] = useState(false)
  
  return (
    <div className="sidebar">
      <Sidebartop extended={extended} setExtended={setExtended}/>
      <Sidebarbottom extended={extended}/>
    </div>
  );
};

export default Sidebar;
