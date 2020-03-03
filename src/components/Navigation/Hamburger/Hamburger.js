import React from 'react';

import classes from './Hamburger.module.css';

const hamburger = props => ( 
    <div className={classes.Hamburger} onClick={props.toggleSideNav}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default hamburger;