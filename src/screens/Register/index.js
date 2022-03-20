import React, {useCallback, useContext, useEffect, useState} from 'react';
import RegisterForm from '../../components/forms/register';
import {GlobalContext} from '../../context/Provider';
import registerAction, {
  clearAuthStateAction,
} from '../../context/actions/auth-actions/registerAction';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigation();

  const {
    authDispatch,
    authState: {loading, error, data},
  } = useContext(GlobalContext);

  // reset form
  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthStateAction()(authDispatch);
        }
      };
    }, [data, error]),
  );

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
      registerAction(form)(authDispatch)(response => {
        navigate.navigate(LOGIN, {data: response});
      });
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
