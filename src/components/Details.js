import React, { useState, useContext } from "react";
import { GlobalContext } from "../App";
import "../scss/details.scss";
const Details = () => {
    const [info, setInfo] = useContext(GlobalContext).info;
    return (
        <div className="details-cont" id="mydetails">
            <div className="details-top">
                <div className="profile-img-cont">
                    <img src="images/my_photo.jpg" className="profile-img" />
                </div>
                <div className="profile-name">
                    <span className="profile-name-black">Hi I am</span> Abhishek Kumar<span className="blinking-colon"> ;</span>
                </div>
                <div className="profile-extras">
                    <span className="profile-extras-quote"><span className="profile-name-black">Front End</span> Web Developer</span>
                    <a href="https://drive.google.com/file/d/13aBoAOnayPVrenlfLrgbeSXixNJEY2Zg/view?usp=sharing" target="_new">
                        <button className="resume-btn">Resume</button>
                    </a>
                </div>
            </div>
            {/* <div className="details-bottom">
                {Object.keys(info)?.map((d) => <div className={`${d}-box`} data-boxname="desc-box" key={`${d}-box-key`}><span className="desc-title">{d}</span> - <span className="desc-info">{info[d]}</span></div>)}
            </div> */}
        </div>
    );
};

export default Details;