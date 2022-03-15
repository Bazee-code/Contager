import {View, Text} from 'react-native';
import React, {useState} from 'react';
import RegisterForm from '../../components/forms/register';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({value, name}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log('register form', form);
  };

  return (
    <RegisterForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
