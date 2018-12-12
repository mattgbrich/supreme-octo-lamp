import * as R from 'ramda';

export const mapFormElements = (data) => {
    const { properties } = data.schema;
    return R.map(element => {
        const property = typeof element === 'string' ? element : element.key;
        const elementProperties = properties[property];
        return {
            name: element,
            properties: elementProperties
        }
    }, data.form);
}