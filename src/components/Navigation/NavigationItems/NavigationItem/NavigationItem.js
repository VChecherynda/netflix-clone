import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const navigationItems = (props) => (
    <li className="NavigationItem">
      <NavLink
        to={props.link || null}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
);

export default navigationItems;