import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Input (props) {
    const { placeholder, label, onChange } = props;
    return (
        <div>
            <Typography variant="h4">Input Field</Typography>
            <TextField
                name={"label"}
                value={label}
                label="Label"
                onChange={onChange}
            />
            <br />
            <TextField
                name={"placeholder"}
                value={placeholder}
                label="Placeholder"
                onChange={onChange}
            />
        </div>
    );
}

export default Input;