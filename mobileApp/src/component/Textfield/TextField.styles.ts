import StyleSheet from 'react-native-extended-stylesheet';
import colors from '../../styles/color';
import { FontFamilyRegular, FontFamilySemiBold } from '../../styles/fonts';

const styles = StyleSheet.create({
  defaultContainerStyle: {},
  defaultDisabledInputStyle: {},
  defaultErrorLabelStyle: {
    ...FontFamilySemiBold,
    fontSize: '36.5rem',
  },
  defaultInputStyle: {
    ...FontFamilyRegular,
    color: colors.font.darkText,
    fontSize: '56.5rem',
  },
  defaultLabelStyle: {
    ...FontFamilySemiBold,
    fontSize: 14,
    color: colors.font.lightText,
    fontWeight:'600'
  },
  defaultInputContainerStyle: {
    borderBottomColor: 'red',
  },
  errorInputContainerStyle: {
    borderBottomColor: 'red',
  },
  defaultLeftIconContainerStyle: {},
  defaultRightIconContainerStyle: {},
});

export default styles;
