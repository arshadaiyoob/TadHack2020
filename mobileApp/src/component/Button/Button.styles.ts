import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/color';
import { FontFamilySemiBold } from '../../styles/fonts';

const style = StyleSheet.create({
  container: {
    // flex: 1,
    borderRadius: 50,
    backgroundColor: colors.backgrounds.primaryRed,
    paddingVertical: 25,
    height: '160rem',
  },

  buttonStyle: {},

  titleTextStyle: {
    ...FontFamilySemiBold,
    fontSize: '56rem',
  },

  disabledStyle: {
    backgroundColor: colors.backgrounds.disabled
  },

  disabledTitleStyle: {
    color: colors.white,
  },

  additionalStyle: {
    justifyContent: 'space-between',
    // paddingLeft: '30%',
    paddingRight: 17,
  },
  emptyButtonStyle: {
    backgroundColor: 'transparent',
    paddingRight: '10%',
  },

  arrowImageStyle: {
    width: '52rem',
    height: '44rem',
  },
});

export default style;
