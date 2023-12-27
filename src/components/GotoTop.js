import React from 'react';
import { Button } from 'react-bootstrap';
import "../scss/gototop.scss";
const GotoTop = ({ topBtn }) => {
    return (
        <div className='gototop-cont' style={{ display: topBtn }}>
            <a className='gototop-link' href="#mydetails">
                <Button><i class="fa-solid fa-jet-fighter-up"></i></Button>
            </a>
        </div>
    );
};

export default GotoTop;