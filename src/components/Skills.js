import React, { useEffect, useState } from 'react';
import "../scss/skills.scss";
const Skills = () => {
    const [skillList, setSkillList] = useState({
        js: "Javascript",
        react: "React",
        redux: "Redux",
        html: "HTML5",
        css: "CSS",
        bootstrap: "Bootstrap",
        sass: "Sass",
        webpack: "Webpack",
        tailwind: "Tailwind",
        node: "Node",
        firebase: "Firebase",
        git: "Git",
        jquery: "JQuery",
        fontawesome: "Font Awesome"
    });
    const [moreSkills, setMoreSkills] = useState({
        npm: "NPM",
        next: "NextJS",
        clerk: "Clerk",
        angular: "Angular",
        vue: "Vue"
    });
    const [level, setLevel] = useState({
        js: "Expert",
        react: "Expert",
        redux: "Expert",
        html: "Intermediate",
        css: "Expert",
        bootstrap: "Expert",
        sass: "Expert",
        webpack: "Basic",
        tailwind: "Intermediate",
        node: "Basic",
        firebase: "Intermediate",
        git: "Basic",
        jquery: "Basic",
        fontawesome: "Expert",
        npm: "Intermediate",
        clerk: "Intermediate",
        next: "Intermediate",
        vue: "Basic",
        angular: "Expert"
    });
    const [lastFlipped, setLastFlipped] = useState({
        flippedName: "",
        innerHtml: ""
    });
    const clickHandler = (e, skillName) => {
        console.log("skillname ", skillName);
        if (e.currentTarget.dataset.flipped === "true") {
            e.currentTarget.style.transform = "rotateY(0deg)";
            // e.currentTarget.classList.add("not-flipped");
            // e.currentTarget.classList.remove("flipped");

            if (skillName === lastFlipped.flippedName) {
                e.currentTarget.innerHTML = lastFlipped.innerHtml;
                setLastFlipped({ flippedName: "", innerHtml: "" });
            }
            e.currentTarget.dataset.flipped = "false";
            console.log("Closed");
        }
        else if (e.currentTarget.dataset.flipped === "false") {
            e.currentTarget.style.transform = "rotateY(180deg)";
            // e.currentTarget.classList.add("flipped");
            // e.currentTarget.classList.remove("not-flipped");
            setLastFlipped({ flippedName: skillName, innerHtml: e.currentTarget.innerHTML });
            if (lastFlipped.flippedName) {
                let lastFlippedElement = document.getElementById(lastFlipped.flippedName + "-id");
                lastFlippedElement.style.transform = "rotateY(0deg)";
                lastFlippedElement.dataset.flipped = "false";
                lastFlippedElement.innerHTML = lastFlipped.innerHtml;
            }
            e.currentTarget.innerHTML = `<div class='level-cont'>
            <span class='${level[skillName] === "Intermediate" ? "level-inter" : "level-text"}'>${level[skillName]}</span></div>`;
            e.currentTarget.dataset.flipped = "true";

            console.log("Opener");
        }

        // flippedArray.map((f) => {
        //     document.getElementById(f + "-id").style.transform = "rotateY(-180deg)";
        // });
        // flippedArray.push(skillName);
    };
    return (
        <div className='skills-cont' id='myskills'>
            <div className='skills-title'>
                My Skills
            </div>
            <div className="skills-cards">
                {Object.keys(skillList).map((skill) =>
                    <div className='skill-card not-flipped' id={skill + "-id"} key={skill} onClick={(e) => clickHandler(e, skill)} data-flipped={"false"}>
                        <img src={`images/${skill}-logo.png`} className="skill-card-img" />
                        <div className='skill-card-name'>{skillList[skill]}</div>
                    </div>
                )}
            </div>
            <div className='skills-title title-spacing'>
                Other Technologies
            </div>
            <div className="skills-cards">
                {Object.keys(moreSkills).map((skill) =>
                    <div className='skill-card not-flipped' id={skill + "-id"} key={skill} onClick={(e) => clickHandler(e, skill)} data-flipped={"false"}>
                        <img src={`images/${skill}-logo.png`} className="skill-card-img" />
                        <div className='skill-card-name'>{moreSkills[skill]}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;