import React from 'react';
import Input from './Input';
import Date from './Date';
import Checkbox from './Checkbox';

const elementMap = {
    string: Input,
    date: Date,
    boolean: Checkbox
};

function JsonFormElement (props) {
    const { element, onChange } = props;
    const FormComponent = elementMap[element.properties.type];
    const handleChange = (e, property) => {
        const data = {
            field: {
                name: e.target.name,
                value: e.target.value
            },
            property
        };
        return onChange(data)
    }
    return <FormComponent element={element} onChange={handleChange} />
}

export default JsonFormElement;
