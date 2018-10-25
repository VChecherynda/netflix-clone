import React from 'react';
import Aux from '../Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <Sidedrawer />
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;