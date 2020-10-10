import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/color';

const style = StyleSheet.create({
  headerTextWrapper: {
    // backgroundColor: 'red',
  },
  headerText: {
    fontSize: 14,
    color: colors.font.lightText,
    fontWeight:'600'
  },
  verificationCodeWrapper: {
    height: '135rem',
  },
  errorWrapper: {
    paddingTop: '37rem',
  },
  error: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: '36.5rem',
    color: 'red',
  },
  countDownWrapper: {
    paddingTop: '37rem',
  },
  codeInputStyle: {
    color: colors.font.descBlack,
  },
});

export default style;
