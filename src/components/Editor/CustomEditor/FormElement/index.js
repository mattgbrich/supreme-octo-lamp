import React from 'react';
import Date from './Date';
import Divider from './Divider';
import Input from './Input';
import Paragraph from './Paragraph';

import * as R from 'ramda';

const elementMap = {
    date: Date,
    divider: Divider,
    input: Input,
    paragraph: Paragraph
};

function FormElement (props) {
    const { element, onChange, id} = props;
    const ElementComponent = elementMap[element];
    const handleChange = (e) => {
        const { name: property, value } = e.target;
        onChange({ id, value, property});
    };

    const elementProps = R.omit(
        ['id', 'element', 'onChange'],
        props
    );

    return (
        <ElementComponent 
            onChange={handleChange} 
            {...elementProps}
        />
    );
}

export default FormElement;
