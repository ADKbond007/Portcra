import React from "react";
import { Button } from "react-bootstrap";
import "../scss/gototop.scss";
const GotoTop = ({ topBtn }) => {
  const chandler = () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((e) => e.classList.remove("active"));
  };
  return (
    <div className="gototop-cont" style={{ display: topBtn }}>
      <a className="gototop-link" href="#mydetails">
        <Button className="gototop-btn" onClick={chandler}>
          <i className="fa-solid fa-jet-fighter-up"></i>
        </Button>
      </a>
    </div>
  );
};

export default GotoTop;
