import React, {useState} from 'react';
import LoginForm from '../../components/forms/login';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'A minimum of 6 characters is required'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'User name is required'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Password is required'};
      });
    }
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
