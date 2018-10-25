import React from 'react';

import classes from './Toolbar.module.scss';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
       <div>Log</div>
       <nav>
            <NavigationItems />
       </nav>
    </div>
);

export default toolbar;