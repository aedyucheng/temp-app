import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

class NavItem extends Component {
    state = {
        isSelected: false
    }

    toggle = () => {
        this.setState({ isSelected: !this.state.isSelected});
    }

    render() {
        let childrenList = null;
        if (this.props.children) {
            childrenList = (
                <ul className={this.state.isSelected ? classes.Show : classes.Hide}>
                    {
                        this.props.children.map((item, index) => {
                            return <NavItem key={index} name={item.name} path={item.path} children={item.children}/>
                        })
                    }
                </ul>
            )
        }

        return (
            <li className={classes.NavItem}>
                <NavLink to={this.props.path} onClick={this.toggle}>{this.props.name}</NavLink>
                {childrenList}
            </li >
        );
    }
}

export default NavItem;