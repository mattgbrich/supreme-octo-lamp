import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Checkbox (props) {
    const { element, onChange } = props;
    if (typeof element.name !== 'string') element.name = element.name.key;
    return (
        <div>
            <Typography variant="h4">Checkbox</Typography>
            <TextField
                name={element.name}
                value={element.properties.title}
                onChange={e => onChange(e, 'title')}
            />
        </div>
    );
}

export default Checkbox;
