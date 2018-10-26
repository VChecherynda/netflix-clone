import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.scss';

const items = ['Sign up', 'Sign in'];

const navigationItems = (props) => (
    <ul className={classes.List}>
        {items.map(item => <NavigationItem item={item} />)}
    </ul>
);

export default navigationItems;