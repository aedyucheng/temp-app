import React from 'react';

import classes from './SideNavToggler.module.css';

const sideNavToggler = props => ( 
    <div className={classes.SideNavToggler} onClick={props.toggleSideNav}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideNavToggler;