import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import colors from '../../styles/color';
import styles from './CodeInputField.styles';

interface CodeInputFieldProps {
  handleOnFulfill: Function;
  errorText?: string;
  isError?: boolean;
}

const CodeInputField: React.FC<CodeInputFieldProps> = props => {
  const {
    handleOnFulfill,
    errorText,
    isError,
  } = props;

  const renderVerificationCode = (): ReactElement<View> => (
    <CodeInput
      activeColor={
        isError === true
          ? 'red'
          :  colors.salmon
      }
      inactiveColor={
        isError === true
          ? 'red'
          : colors.backgrounds.gray
      }
      inputPosition="left"
      codeLength={6}
      size={30}
      className="border-b"
      codeInputStyle={styles.codeInputStyle}
      onFulfill={handleOnFulfill}
      keyboardType="numeric"
    />
  );

  return (
    <>
      <View style={styles.headerTextWrapper}>
      </View>
      <View style={styles.verificationCodeWrapper}>
        {renderVerificationCode()}
      </View>
      {isError ? (
        <View style={styles.errorWrapper}>
          <Text style={styles.error}>{errorText}</Text>
        </View>
      ) : null}

      
    </>
  );
};

export default CodeInputField;
