import React from 'react';
import Date from './Date';
import Divider from './Divider';
import Input from './Input';
import Paragraph from './Paragraph';

const elementMap = {
    input: Input,
    date: Date,
    divider: Divider,
    paragraph: Paragraph
};

function CustomFormElement (props) {
    const FormElement = elementMap[props.element];
    return <FormElement {...props} />
}

export default CustomFormElement;
