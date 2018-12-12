import React from 'react';
import TextField from '@material-ui/core/TextField';

import * as R from 'ramda';

function Input (props) {

    const textFieldProps = R.omit(
        ['id', 'element', 'onChange', 'validationMessage'],
        props
    );
    const handleChange = (e) => {
        const { id, onChange, name } = props; 
        onChange({ id, value: e.target.value });
    };
    
    return (
        <TextField
            {...textFieldProps}
            onChange={handleChange}
            fullWidth
        />
    );
}

export default Input;
