import { combineReducers } from 'redux';

import jsonForm from './jsonForm';
import customForm from './customForm';

export default combineReducers({
    jsonForm,
    customForm
});

