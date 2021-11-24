import React from 'react';
import { Field, getIn } from 'formik';

const FieldInput = ({ name }) => {
    return (
        <Field
            name={name}
            render={({ form }) => {
                const error = getIn(form.errors, name);
                const touch = getIn(form.touched, name);
                return touch && error ? (
                    <Field name={name} className={'input2Error'} />
                ) : (
                    <Field name={name} className={'input2'} />
                );
            }}
        />
    );
};

export default FieldInput;
