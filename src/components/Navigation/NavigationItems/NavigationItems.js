import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.scss';

const navigationItems = (props) => (
  <ul className={classes.List}>
    {
      props.isAuthenticated ?
      <NavigationItem onClick={props.logout}>Logout</NavigationItem>
      :
      <NavigationItem link="/sign-in">Sign In</NavigationItem>
    }
  </ul>
);

export default navigationItems;