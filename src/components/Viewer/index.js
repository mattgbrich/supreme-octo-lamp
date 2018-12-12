import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Json from './Json';
import Custom from './Custom';

function Viewer () {
    return (
        <div>
            <div>
                <Link to="/viewer/json">JSON Format Viewer</Link> <br />
                <Link to="/viewer/custom">Custom Format Viewer</Link>
                <hr />
            </div>
            <Switch>
                <Route path="/viewer/json" component={Json} />
                <Route path="/viewer/custom" component={Custom} />
            </Switch>
        </div>
    );
}

export default Viewer;

