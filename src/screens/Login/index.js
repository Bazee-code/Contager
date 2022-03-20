import React, {useState, useContext} from 'react';
import LoginForm from '../../components/forms/login';
import loginAction from '../../context/actions/auth-actions/loginAction';
import {GlobalContext} from '../../context/Provider';
// import NetworkLogger from 'react-native-network-logger';
import {ScrollView} from 'react-native-gesture-handler';

const Login = () => {
  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {data, error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginAction(form)(authDispatch);
    }
  };

  return (
    <ScrollView>
      <LoginForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        loading={loading}
      />
      {/* <NetworkLogger /> */}
    </ScrollView>
  );
};

export default Login;
