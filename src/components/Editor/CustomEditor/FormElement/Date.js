import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Date (props) {
    const { name, label, onChange } = props;
    return (
        <div>
            <Typography variant="h4">Date Field</Typography>
            <TextField
                name={"label"}
                label="Label"
                value={label}
                onChange={onChange}
            />
        </div>
    );
}

export default Date;
