import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const useSplash = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate to first screen after 2 seconds
      navigation.navigate('LoginScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return {};
};

export default useSplash;
