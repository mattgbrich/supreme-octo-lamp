import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import { editCustomField, addCustomField } from '../../../store/customForm/actions';

import FormElement from './FormElement';
function CustomEditor (props) {
    const { form, editCustomField } = props;

    const handleAddNewField = () => {
        props.addCustomField({
            id: 6,
            element: "input",
            type: "text",
            name: "",
            value: "",
            label: "",
            placeholder: "",
            error: false,
            required: false
        });
    };

    if (!form) return null;
    return (
        <div>
            <h2>CUSTOM Form Editor </h2>
            <Link to="/viewer/custom">To CUSTOM Viewer</Link>
            <div>
                <button onClick={handleAddNewField}>Add Checkbox</button>
            </div>
            <div>
                {form.fields.map(field => (
                    <FormElement 
                        key={field.id}
                        onChange={editCustomField}
                        {...field}
                    />
                ))}
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    form: state.customForm
});

const mapDispatchToProps = dispatch => ({
    editCustomField: (data) => dispatch(editCustomField(data)),
    addCustomField: (data) => dispatch(addCustomField(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomEditor);
