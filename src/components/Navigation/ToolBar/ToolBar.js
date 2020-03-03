import React from 'react';

import Hamburger from '../Hamburger/Hamburger'

import classes from './ToolBar.module.css';

const ToolBar = props => ( 
    <div className={classes.ToolBar}>
        <Hamburger toggleSideNav={props.toggleSideNav}/>
    </div>
);

export default ToolBar;