import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import { updateJsonForm, addJsonFormField } from '../../../store/jsonForm/actions';

import { mapFormElements } from './util';
import JsonFormElement from './jsonFormElements';

function JsonEditor (props) {
    if (!props.form) return null;
    const mappedFormElements = mapFormElements(props.form)

    const handleAddNewField = () => {
        props.addJsonFormField({
            type: "string",
            title: ""
        });
    };
    
    return (
        <div>
            <h2>JSON Editor</h2>
            <Link to="/viewer/json">To JSON Viewer</Link>
            <div>
                <button onClick={handleAddNewField}>Add Input Field</button>
            </div>
            <div>
                {mappedFormElements.map(element => (
                    <Card key={element.name}>
                        <JsonFormElement element={element} onChange={props.updateJsonForm} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    form: state.jsonForm.form
});

const mapDispatchToProps = dispatch => ({
    updateJsonForm: (data) => dispatch(updateJsonForm(data)),
    addJsonFormField: (data) => dispatch(addJsonFormField(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(JsonEditor);

