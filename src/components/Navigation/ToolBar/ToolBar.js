import React from 'react';

import SideNavToggler from './SideNavToggler/SideNavToggler'

import classes from './ToolBar.module.css';

const ToolBar = props => (
    <div className={classes.ToolBar}>
        <SideNavToggler toggleSideNav={props.toggleSideNav}/>
    </div>
);

export default ToolBar;