import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.scss';

const navigationItems = (props) => (
    <ul className={classes.List}>
        <NavigationItem link="/sign-in" exact>Sign In</NavigationItem>
    </ul>
);

export default navigationItems;