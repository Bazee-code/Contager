import React, {useState, useContext} from 'react';
import LoginForm from '../../components/forms/login';
import loginAction from '../../context/actions/auth-actions/loginAction';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: {data, error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
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

    if (
      Object.keys(form).length === 2 &&
      Object.keys(form).every(item => item.trim().length > 0) &&
      Object.keys(errors).every(item => !item)
    ) {
      // dispatch login action here
      loginAction(form)(authDispatch);
    }
  };

  return (
    <LoginForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
