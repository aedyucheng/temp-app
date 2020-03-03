import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from './NavItem';

import classes from './NavItem.module.css';

const navItem = props => {

    let children = null;
    if(props.children){
        children = props.children;
    }

    return (
        <li className={classes.NavItem}>
            <NavLink to={props.path}>{props.name}</NavLink>
            <ul>
                {children}
            </ul>
        </li>
    );
}

export default navItem;