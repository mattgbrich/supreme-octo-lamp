import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import JsonEditor from './JsonEditor';
import CustomEditor from './CustomEditor';

function Editor () {
    return (
        <div>
            <div>
                <Link to="/editor/json">JSON Format Editor</Link> <br />
                <Link to="/editor/custom">Custom Format Editor</Link>
                <hr />
            </div>
            <Switch>
                <Route path="/editor/json" component={JsonEditor} />
                <Route path="/editor/custom" component={CustomEditor} />
            </Switch>
        </div>
    );
}

export default Editor;
