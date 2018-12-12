import React from 'react';
import {
    KeyboardArrowRight,
    KeyboardArrowLeft,
    DateRange,
    AccessTime
} from '@material-ui/icons'
import { DateTimePicker } from 'material-ui-pickers';
import * as R from 'ramda';

function Date (props) {
    const dateFieldProps = R.omit(
        ['id', 'element', 'onChange', 'validationMessage'],
        props
    );

    const handleChange = (date) => {
        const { id, onChange } = props;
        onChange({ id, value: date.format("YYYY-MM-DD HH:mm:ss") });
    }

    return (
        <DateTimePicker
            leftArrowIcon={<KeyboardArrowLeft />}
            rightArrowIcon={<KeyboardArrowRight />}
            dateRangeIcon={<DateRange />}
            timeIcon={<AccessTime />}
            format={"MMM D, YYYY h:mm A"}
            clearable={true}
            onChange={handleChange}
            {...dateFieldProps}
        />
    )
}

export default Date;
