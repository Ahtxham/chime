import React from 'react';
import {SafeAreaView, Alert, Modal} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useFormik} from 'formik';
import axios from 'axios'; // Import axios for API calls

import {InputComponent} from '../../components';
import {
  Wrapper,
  HelpText,
  VerifyBySMSText,
  LoginButton,
  ButtonText,
  ModalWrapper,
  ModalContainer,
  ModalHeading,
  ModalText,
  ModalButton,
  ModalButtonText,
} from './styles';
import {loginSchema} from './schema';
import useLogin from './useLogin';

const LoginScreen = () => {
  const {login, alertText, setAlertText} = useLogin();
  const initialValues = {
    email: '',
    password: '',
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async () => login(values),
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <InputComponent
          placeholder="Email"
          keyboardType="email-address"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={() => setFieldTouched('email')}
          error={!!touched.email ? errors.email : ''}
          onSubmitEditing={() => handleSubmit()}
        />

        <InputComponent
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry={true}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={() => setFieldTouched('password')}
          error={!!touched.password ? errors.password : ''}
          onSubmitEditing={() => handleSubmit()}
        />
        <HelpText>Need Help?</HelpText>
        <VerifyBySMSText>
          By clicking "Log in", you agree to receive SMS text messages from
          Chime to verify your identity
        </VerifyBySMSText>
      </Wrapper>

      <LoginButton onPress={handleSubmit} disabled={!isValid || !dirty}>
        <ButtonText>Log in</ButtonText>
      </LoginButton>

      {/* Alert Modal */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={!!alertText}
        onRequestClose={() => {
          setAlertText('');
        }}>
        <ModalWrapper>
          <ModalContainer>
            <ModalHeading>Yikes!</ModalHeading>
            <ModalText>{alertText}</ModalText>
            <ModalButton onPress={() => setAlertText('')}>
              <ModalButtonText>Try Again</ModalButtonText>
            </ModalButton>
          </ModalContainer>
        </ModalWrapper>
      </Modal>
    </SafeAreaView>
  );
};

export default LoginScreen;
