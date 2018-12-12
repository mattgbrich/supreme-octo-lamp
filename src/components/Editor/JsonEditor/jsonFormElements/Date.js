import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Date (props) {
    const { element, onChange } = props;
    return (
        <div>
            <Typography variant="h4">Date Field</Typography>
            <TextField
                name={element.name}
                value={element.properties.title}
                onChange={e => onChange(e, 'title')}
            />
        </div>
    );
}

export default Date;
