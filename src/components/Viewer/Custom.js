import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import CustomFormElement from './CustomFormElement';

import { updateCustomForm } from '../../store/customForm/actions';

function Custom (props) {
    const { classes, form } = props;

    const handleSubmit = () => console.log("SUBMITTED: ", form.fields);

    const handleModelChange = (data) => {
        return props.updateForm(data);
    };

    if (!form) return null;

    return (
        <div>
            <h2>CUSTOM VIEWER COMPONENT</h2>
            <Link to="/editor/custom">To Custom Editor</Link>
            <Paper className={classes.container}>
                <div className={classes.header}>
                    <Typography variant="h4" color="inherit">{form.title}</Typography>
                    <Typography variant="subtitle1" color="inherit">{form.description}</Typography>
                </div>
                <div className={classes.content}>
                    {form.fields.map(field => (
                        <CustomFormElement
                            key={field.id}
                            {...field}
                            onChange={handleModelChange}
                        />
                    ))}
                </div>
                <div className={classes.actions}>
                    <Button onClick={handleSubmit} color="primary">Submit</Button>
                </div>
            </Paper>
        </div>
    );
}

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

const mapStateToProps = state => ({
    form: state.customForm
});

const mapDispatchToProps = dispatch => ({
    updateForm: data => dispatch(updateCustomForm(data))
});

const customWithStyles = withStyles(styles)(Custom);

export default connect(mapStateToProps, mapDispatchToProps)(customWithStyles);
