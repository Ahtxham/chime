import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import {TextInputProps} from 'react-native';

import {Error, Input, InputWrapper} from './styles';

interface InputComponentProps extends TextInputProps {
  error?: string;
  onBlur: () => {};
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  onBlur,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    onBlur();
  };

  return (
    <InputWrapper>
      <Input
        {...props}
        placeholderTextColor="#747676"
        style={{
          borderColor: !!error ? '#C92F4C' : focus ? '#2ecc71' : '#2e3337',
          borderBottomWidth: error || focus ? 2 : 1,
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

export default InputComponent;
