import React from 'react';
import "../scss/aboutme.scss";
const Aboutme = () => {
    return (
        <div className="aboutme-cont" id="aboutme">
            <div className='aboutme-title'>
                About me
            </div>
            <div className='aboutme-content'>
                <div className='aboutme-desc'>
                    I am a React Developer with a proven track record of 2.5 years in designing and implementing cutting-edge web applications. I bring a wealth of expertise in front-end development, specializing in the React.js library.
                    <br />
                    <br />
                    Additionally, my expertise extends to other front-end technologies such as Bootstrap, HTML5, CSS and SASS,  enabling me to craft visually appealing and cross-browser compatible interfaces. I have a solid understanding of state management with Redux, and my experience with Webpack has equipped me to optimize application performance and streamline the development workflow.
                    <br />
                    <br />
                    I am a creative problem-solver who enjoys finding innovative solutions to complex design and development challenges. I am constantly exploring new ideas and techniques to enhance the user experience and ensure that the final product meets both user and business requirements.
                </div>
                <div className='aboutme-img'>
                    <img src="images/aboutme-image.png" />
                </div>
            </div>

        </div>
    );
};

export default Aboutme;