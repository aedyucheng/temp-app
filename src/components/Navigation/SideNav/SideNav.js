import React, { Fragment } from 'react';

import NavItem from './NavItem/NavItem';

import classes from './SideNav.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sideNav = props => {
    let sideNavClasses = [classes.SideNav, ( props.show ? classes.Show : classes.Hide)];
    let productMenu = {
        name: "Products",
        path: "/products",
        children: [
            { name: "AAAA", path: "#" },
            { name: "BBBB", path: "#" },
            { 
                name: "CCCCC", 
                path: "#",
                children: [
                    { name: "CCC AAAA", path: "#" }
                ]
            }
        ]
    }

    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.toggleSideNav}/>
            <nav className={sideNavClasses.join(' ')}>
                <ul>
                    <div className={classes.CrossButton} onClick={props.toggleSideNav}>
                        <FontAwesomeIcon icon="times" size="2x" color="grey"/>
                    </div>
                    <NavItem name="Home" path="/" />
                    <NavItem name="About" path="/about" />
                    <NavItem name={productMenu.name} path={productMenu.path} children={productMenu.children} />
                    <NavItem name="Contact" path="/contact" />
                </ul>
            </nav>
        </Fragment>
    );
}

export default sideNav;