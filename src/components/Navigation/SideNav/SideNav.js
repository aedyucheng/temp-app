import React, { Fragment} from 'react';

import classes from './SideNav.module.css';
import NavItem from './NavItem/NavItem';

const sideNav = props => (
    <Fragment>
        <nav className={classes.SideNav}>
            <ul>
                <NavItem name="Home" path="/"/>
                <NavItem name="About" path="/about"/>
                <NavItem name="Products" path="/products"/>
                <NavItem name="Contact" path="/contact"/>
            </ul>
        </nav>
    </Fragment>
);

export default sideNav;