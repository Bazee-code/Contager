import React, {useState} from 'react';
import LoginForm from '../../components/forms/login';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    // validation
    console.log('form=>', form);
  };

  return (
    <LoginForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
