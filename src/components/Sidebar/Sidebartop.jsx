import React from 'react'
import "./Sidebartop.css";
import { assets } from "../../assets/assets";

const Sidebartop = ({extended,setExtended}) => {
  return (
    <div className='sidebartop'>
        <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
                <div className="new-chat">
                  <img src={assets.plus_icon} alt="" />
                  {extended?<p>New Chat</p>:null}
                </div>
                {extended?<div className="recent">
                  <p className="recent-title">Recent</p>
                  <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react...</p>
                  </div>
                </div>:null}
              </div>
    </div>
  )
}

export default Sidebartop