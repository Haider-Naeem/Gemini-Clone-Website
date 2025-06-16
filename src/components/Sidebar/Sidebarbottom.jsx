import React from 'react';
import "./Sidebarbottom.css";
import { assets } from "../../assets/assets";

const Sidebarbottom = ({extended}) => {
  return (
    <div className='sidebarbottom'>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="Activities" />
          {extended?<p>Activities</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings" />
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebarbottom;
