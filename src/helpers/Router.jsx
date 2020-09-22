import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Popular from '../pages/Popular';
import OnAir from '../pages/OnAir';
import Rated from '../pages/Rated';
import Detail from '../components/Detail/Detail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/rated" component={Rated} />
        <Route path="/on_air" component={OnAir} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect from="*" to="/" component={Popular} />
    </Switch>
);

export default Routes;
