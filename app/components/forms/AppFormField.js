
import React from 'react';
import { useFormikContext } from 'formik';

import AppTextinput from '../AppTextinput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...other }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextinput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...other}
      />

      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;