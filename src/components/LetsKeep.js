import React, { createElement, useEffect, useState } from 'react';
import "../scss/letskeep.scss";
const LetsKeep = () => {
    const [verbs, setVerbs] = useState(["<Coding />", "<Developing />", "<Growing />", "<Learning />", "<Creating />"]);
    const [curr, setCurr] = useState(0);
    useEffect(() => {
        let myInt = setInterval(() => {
            setCurr(prev => prev < verbs.length - 1 ? prev + 1 : 0);
            let lkcontainer = document.getElementById("lk-id");
            let dynamicChild = document.createElement("span");
            dynamicChild.id = "lk-dynamic";
            dynamicChild.innerText = verbs[curr];
            lkcontainer.children[0] && lkcontainer.removeChild(lkcontainer.children[0]);
            lkcontainer.appendChild(dynamicChild);
        }, 2000);
        return () => clearInterval(myInt);
    });
    return (
        <div className='lk-cont' >
            <span className='lk-static'>
                Let's keep&nbsp;
            </span>
            <div className='lk-component' id="lk-id">

            </div>
        </div>
    );
};

export default LetsKeep;