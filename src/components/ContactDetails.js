import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../scss/contactdetails.scss";
import Reachout from "./Reachout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCode,
  faCopy,
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
const ContactDetails = () => {
  const [tooltipText, setTooltipText] = useState("Copy Mail");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 500 ? true : false);
  }, []);
  // const renderTooltip = (props) => (
  //     <Tooltip id="button-tooltip" {...props}>
  //         {tooltipText}
  //     </Tooltip>
  // );
  // const renderTooltiplinkedin = (props) => (
  //     <Tooltip id="button-tooltip" {...props}>
  //         LinkedIn
  //     </Tooltip>
  // );
  // const renderTooltipyoutube = (props) => (
  //     <Tooltip id="button-tooltip" {...props}>
  //         YouTube
  //     </Tooltip>
  // );
  // const renderTooltipcode = (props) => (
  //     <Tooltip id="button-tooltip" {...props}>
  //         Codesandbox.io
  //     </Tooltip>
  // );
  const copyMailHandler = (e) => {
    navigator.clipboard.writeText("abhishek14kumar98@gmail.com");
    setTooltipText("Mail Copied");
    setTimeout(() => {
      setTooltipText("Copy Mail");
      e.target.blur();
    }, 1500);
  };
  return (
    <div className="cd-cont" id="contactme">
      <div className="cd-title">Contact me</div>
      <div className="cd-list">
        <div className="cd-info">
          <div className="cd-info-desc">
            Eager to contribute my skills and experience to a dynamic team, I am
            open to exploring opportunities that align with my passion for web
            development. Reach out to me on mail or phone.
          </div>
          <div className="cd-social-title">Lets Connect !</div>
          <div className="cd-buttons">
            <a href="tel:+919871826609" className="cd-phone-link">
              <div className="cd-phone">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
            </a>
            <a
              href={
                "mailto:abhishek14kumar98@gmail.com?subject=Hi%20I%20saw%20your%20portfolio"
              }
              target="_new"
              className="cd-mail-link"
            >
              <div className="cd-mail">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </div>
            </a>
            <OverlayTrigger
              placement="top"
              delay={{ show: 50, hide: 100 }}
              overlay={
                isMobile ? (
                  <></>
                ) : (
                  <Tooltip id={`tooltip-mail`}>{tooltipText}</Tooltip>
                )
              }
            >
              <Button
                variant="success"
                className="cd-copy-mail"
                onClick={copyMailHandler}
              >
                {tooltipText === "Copy Mail" ? (
                  <FontAwesomeIcon icon={faCopy} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </Button>
            </OverlayTrigger>
          </div>

          <div className="cd-social-buttons">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 50, hide: 100 }}
              overlay={
                isMobile ? (
                  <></>
                ) : (
                  <Tooltip id={`tooltip-linkedin`}>LinkedIn</Tooltip>
                )
              }
            >
              <a
                href="https://www.linkedin.com/in/abhishek-kumar-118679214/"
                className="cd-linkedin-link"
              >
                <div className="cd-linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </a>
            </OverlayTrigger>
            {isMobile}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 50, hide: 100 }}
              overlay={
                isMobile ? (
                  <></>
                ) : (
                  <Tooltip id={`tooltip-youtube`}>YouTube</Tooltip>
                )
              }
            >
              <a
                href="https://www.youtube.com/channel/UC_axYMv390Qpt5OIGLr4K8g"
                className="cd-youtube-link"
              >
                <div className="cd-youtube">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 50, hide: 100 }}
              overlay={
                isMobile ? (
                  <></>
                ) : (
                  <Tooltip id={`tooltip-codesandbox`}>Codesandbox</Tooltip>
                )
              }
            >
              <a href="https://codesandbox.io/u/ADK" className="cd-code-link">
                <div className="cd-code">
                  <FontAwesomeIcon icon={faCode} />
                </div>
              </a>
            </OverlayTrigger>
          </div>
        </div>
        <div className="cd-form">
          <Reachout />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
