import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Paragraph (props) {
    const { text, title, onChange } = props;
    return (
        <div>
            <Typography variant="h4">Date Field</Typography>
            <TextField
                name={"title"}
                label={"Paragraph Title"}
                value={title}
                onChange={onChange}
            />
            <br />
            <TextField
                name={"text"}
                label={"Paragraph Text"}
                value={text}
                onChange={onChange}
            />
        </div>
    );
}

export default Paragraph;