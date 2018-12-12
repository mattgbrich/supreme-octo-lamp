import {
    UPDATE_CUSTOM_FORM,
    GET_CUSTOM_FORM,
    ADD_CUSTOM_FIELD,
    EDIT_CUSTOM_FIELD
} from './constants';

export const getCustomForm = () => ({
    type: GET_CUSTOM_FORM
});

export const updateCustomForm = payload => ({
    type: UPDATE_CUSTOM_FORM,
    payload
});

export const addCustomField = payload => ({
    type: ADD_CUSTOM_FIELD,
    payload
});

export const editCustomField = payload => ({
    type: EDIT_CUSTOM_FIELD,
    payload
});
