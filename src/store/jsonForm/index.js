import * as R from 'ramda';
import formData from './formData';
import {
    GET_JSON_FORM,
    UPDATE_JSON_FORM,
    ADD_JSON_FORM_FIELD
} from './constants';

const defaultState = {
    form: null
};

const jsonForm = (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_JSON_FORM:
            return R.merge(state, { form: formData });
        case UPDATE_JSON_FORM:
            return R.assocPath(
                ['form', 'schema', 'properties', payload.field.name, payload.property], 
                payload.field.value, 
                state
            );
        case ADD_JSON_FORM_FIELD:
            const newFieldID = "abc123";
            const newSchema = R.assocPath(
                ['properties', newFieldID],
                payload,
                state.form.schema
            );
            const newForm = R.insert(2, newFieldID, state.form.form);
            const updatedForm = R.merge(state.form, { form: newForm, schema: newSchema });
            return R.merge(state, { form: updatedForm })
        default:
            return state
    }   
};

export default jsonForm;

