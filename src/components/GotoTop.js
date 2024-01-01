import React from "react";
import { Button } from "react-bootstrap";
import "../scss/gototop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faJetFighterUp} />
        </Button>
      </a>
    </div>
  );
};

export default GotoTop;
