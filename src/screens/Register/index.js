import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import RegisterForm from '../../components/forms/register';
import axiosInstance from '../../helpers/axiosInterceptor';
import register from '../../context/actions/auth-actions/register';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: {loading, error, data},
  } = useContext(GlobalContext);

  const onChange = ({value, name}) => {
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
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'First Name is required'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Last Name is required'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Email is required'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterForm
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      data={data}
    />
  );
};

export default Register;
