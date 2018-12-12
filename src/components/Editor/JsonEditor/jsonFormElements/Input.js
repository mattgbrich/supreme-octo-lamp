import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Input (props) {
    const { element, onChange } = props;

    return (
        <div>
            <Typography variant="h4">Text Input Field</Typography>
            <TextField
                name={element.name}
                value={element.properties.title}
                onChange={e => onChange(e, 'title')}
                label="Label"
            />
            <TextField
                name={element.name}
                value={element.properties.placeholder}
                onChange={e => onChange(e, 'placeholder')}
                label="Placeholder"
            />
        </div>
    );
}

export default Input;
