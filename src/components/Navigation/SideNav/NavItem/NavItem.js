import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavItem extends Component {
    state = {
        isSelected: false
    }

    toggle = () => {
        this.setState({ isSelected: !this.state.isSelected});
    }

    render() {
        let childrenList = null;
        let arrow = null;

        if (this.props.children) {
            let ChildrenListClasses = [classes.ChildrenList]
            ChildrenListClasses.push(this.state.isSelected ? '' : classes.Hide);
            childrenList = (
                <ul className={ChildrenListClasses.join(' ')}>
                    {
                        this.props.children.map((item, index) => {
                            return <NavItem key={index} name={item.name} path={item.path} children={item.children}/>
                        })
                    }
                </ul>
            );

            arrow = this.state.isSelected ? <FontAwesomeIcon icon="angle-down" /> : <FontAwesomeIcon icon="angle-right" />
        }

        return (
            <li className={classes.NavItem}>
                <NavLink className={classes.NavLink} to={this.props.path} onClick={this.toggle}>
                    {arrow} {this.props.name} 
                </NavLink>
                {childrenList}
            </li >
        );
    }
}

export default NavItem;