import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  padding: 120px 45px 0;
  gap: 20px;
`;

export const HelpText = styled.Text`
  color: #3a7e47;
  font-weight: 700;
  font-size: 16px;
`;

export const VerifyBySMSText = styled.Text`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: #7d7e7d;
  margin-top: 20px;
`;

export const LoginButton = styled.TouchableOpacity<{disabled: boolean}>`
  background-color: #6ee095;
  margin-top: 50px;
  padding: 14px 0;
  font-weight: 700;
  font-size: 15px;
  width: 100%;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`;

export const ButtonText = styled.Text`
  color: #2e3337;
  text-align: center;
`;



// Modal Alert need to be replaced by flash Alert.

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #000000aa;
`;

export const ModalContainer = styled.View`
  background-color: #fff;
  padding: 20px;
`;

export const ModalHeading = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding-vertical: 20px;
  color: #000;
`;

export const ModalText = styled.Text`
  margin-bottom: 20px;
  font-size: 16px;
  color: #000;
  padding-vertical: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #c8324c;
  padding: 20px;
  border-radius: 100px;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 800;
`;

export const WelcomeModalText = styled.Text`
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  align-self: center;
  padding-vertical: 80%;
`;
