import React from 'react';
import Typography from '@material-ui/core/Typography';
function Paragraph (props) {
    return (
        <div>
            <Typography variant="h6">{props.title}</Typography>
            <Typography>{props.text}</Typography>
        </div>
    );
}

export default Paragraph;
