import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import colors from '../../styles/color';
import styles from './TextField.styles';

interface CustomInputProps extends InputProps {
  isError?: boolean;
}

const TextField: React.FC<CustomInputProps> = props => {
  const {
    containerStyle,
    disabledInputStyle,
    inputContainerStyle,
    errorStyle,
    inputStyle,
    labelStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
    isError,
  } = props;

  let customizedInputContainerStyle: any = isError
    ? styles.errorInputContainerStyle
    : styles.defaultInputContainerStyle;

  customizedInputContainerStyle = inputContainerStyle
    ? [customizedInputContainerStyle, inputContainerStyle]
    : customizedInputContainerStyle;

  return (
    <Input
      placeholderTextColor={colors.font.placeHolderText}
      {...props}
      autoCapitalize="none"
      containerStyle={[styles.defaultContainerStyle, containerStyle]}
      disabledInputStyle={[
        styles.defaultDisabledInputStyle,
        disabledInputStyle,
      ]}
      inputContainerStyle={[customizedInputContainerStyle, inputContainerStyle]}
      errorStyle={[styles.defaultErrorLabelStyle, errorStyle]}
      inputStyle={[styles.defaultInputStyle, inputStyle]}
      labelStyle={[styles.defaultLabelStyle, labelStyle]}
      leftIconContainerStyle={[
        styles.defaultLeftIconContainerStyle,
        leftIconContainerStyle,
      ]}
      rightIconContainerStyle={[
        styles.defaultRightIconContainerStyle,
        rightIconContainerStyle,
      ]}
    
    />
  );
};

export default TextField;
