import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SchemaForm, utils } from 'react-schema-form';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as R from 'ramda';
import Foo from './jsonCustomElements/Foo';

const mapper = {
    'foo': Foo
};

class Json extends Component {
    state = {
        model: {}
    };

    handleModelChange = (key, val) => {
        let newModel = this.state.model;
        utils.selectOrSet(key, newModel, val);
        this.setState({model: newModel});
    };

    handleSubmit = () => {
        console.log("SUBMITTED FORM: ", this.state.model)
    }

    render () {
        const { model } = this.state;
        const { classes } = this.props;

        const form = R.clone(this.props.form);
        if (!form) return <div>loading...</div>

        return (
            <div>
                <h2>JSON VIEWER COMPONENT</h2>
                <Link to="/editor/json">To JSON Editor</Link>
                <Paper className={classes.container}>
                    <div className={classes.header}>
                        <Typography variant="h4" color="inherit">{form.schema.title}</Typography>
                        <Typography variant="subtitle1" color="inherit">{form.schema.description}</Typography>
                    </div>
                    <div className={classes.content}>
                        <SchemaForm
                            schema={form.schema}
                            form={form.form}
                            model={model}
                            onModelChange={this.handleModelChange}
                            mapper={mapper}
                        />
                    </div>
                    <div className={classes.actions}>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    form: state.jsonForm.form
});

const styles = theme => ({
  container: {
    margin: 100,
    overflow: 'hidden'
  },
  header: {
    height: 60,
    color: "#FFFFFF",
    background: theme.palette.primary.main,
    padding: "5px 16px"
  },
  content: {
    padding: '0 16px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  }
});

const jsonWithStyles =  withStyles(styles)(Json);

export default connect(mapStateToProps)(jsonWithStyles);

