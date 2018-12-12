import {
    UPDATE_JSON_FORM,
    GET_JSON_FORM,
    ADD_JSON_FORM_FIELD
} from './constants';

export const getJsonForm = () => ({
    type: GET_JSON_FORM
});

export const updateJsonForm = payload => ({
    type: UPDATE_JSON_FORM,
    payload
});

export const addJsonFormField = payload => ({
    type: ADD_JSON_FORM_FIELD,
    payload
});
