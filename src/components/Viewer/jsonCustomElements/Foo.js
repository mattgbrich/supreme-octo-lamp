import React from 'react';
import TextField from '@material-ui/core/TextField';

function Foo (props) {
    console.log("FOO PROPS: ", props)
    return (
        <TextField
            name="foo.name"
            value=""
            label="The Foo Element"
        />
    )
}

export default Foo;