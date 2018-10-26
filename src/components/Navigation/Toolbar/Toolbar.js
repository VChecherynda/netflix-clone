import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.scss';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
       <a href="/" className={classes.Logo}>Logo</a>
       <nav>
            <NavigationItems />
       </nav>
    </div>
);

export default toolbar;