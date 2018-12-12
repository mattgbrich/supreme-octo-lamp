import * as R from 'ramda';

import { formData } from './formData';

import {
    GET_CUSTOM_FORM,
    UPDATE_CUSTOM_FORM,
    ADD_CUSTOM_FIELD,
    EDIT_CUSTOM_FIELD
} from './constants';

const defaultState = null;

const customForm = (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_CUSTOM_FORM:
            return R.merge(state, formData);
        case UPDATE_CUSTOM_FORM:
            const getIndex = ({ fields }, { id, value }) => {
                const i = R.findIndex(R.propEq('id', id), fields)
                return {i, fields, value}
            };
            const adjustField = ({ i, fields, value}) => {
                return R.adjust(i, R.assoc('value', value), fields);
            };
            const mergeData = (fields) => R.merge(state, { fields });
            return R.pipe(
                getIndex,
                adjustField,
                mergeData
            )(state, payload);
        case ADD_CUSTOM_FIELD:
            const updatedFields = R.insert(3, payload, state.fields);
            return R.merge(state, { fields: updatedFields });
        case EDIT_CUSTOM_FIELD:
            const i = ({ fields }, { id, value, property }) => {
                const i = R.findIndex(R.propEq('id', id), fields)
                return { i, fields, value, property }
            };
            const adjust = ({ i, fields, value, property }) => {
                return R.adjust(i, R.assoc(property, value), fields);
            };
            const merge = (fields) => R.merge(state, { fields });
            return R.pipe(
                i,
                adjust,
                merge
            )(state, payload);
        default:
            return state;
    }
};

export default customForm;

