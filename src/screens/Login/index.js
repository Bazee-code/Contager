import React, {useState, useContext, useEffect} from 'react';
import LoginForm from '../../components/forms/login';
import loginAction from '../../context/actions/auth-actions/loginAction';
import {GlobalContext} from '../../context/Provider';
// import NetworkLogger from 'react-native-network-logger';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

const Login = () => {
  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const {params} = useRoute();

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginAction(form)(authDispatch);
    }
  };

  useEffect(() => {
    if (params?.data) {
      setForm({
        ...form,
        userName: params.data.username,
        password: params.data.password,
      });
    }
  }, [params]);

  return (
    <ScrollView>
      <LoginForm
        form={form}
        params={params}
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
