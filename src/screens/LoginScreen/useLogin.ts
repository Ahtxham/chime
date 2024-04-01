import {useNavigation} from '@react-navigation/native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import axios from 'axios';
import {useState} from 'react';

const useLogin = () => {
  const [alertText, setAlertText] = useState<string>();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const login = async (values: any) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: values.email,
        password: values.password,
      });
      navigation.navigate('SuccessScreen');
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        'An error occurred while logging in. Please try again.';

      setAlertText(errorMessage);
    }
  };

  return {
    login,
    alertText,
    setAlertText,
  };
};

export default useLogin;
