import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Viewer from './components/Viewer';
import Editor from './components/Editor';
import { getJsonForm } from './store/jsonForm/actions';
import { getCustomForm } from './store/customForm/actions';

function App (props) {
    console.log("APP VERSION 1")
    console.log("APP VERSION 2")
    props.getJsonForm();
    props.getCustomForm();

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/viewer" component={Viewer} />
                <Route path="/editor" component={Editor} />
            </Switch>
        </BrowserRouter>
    );
}
const mapDispatchToProps = dispatch => ({
    getJsonForm: () => dispatch(getJsonForm()),
    getCustomForm: () => dispatch(getCustomForm())
});

export default connect(null, mapDispatchToProps)(App);
