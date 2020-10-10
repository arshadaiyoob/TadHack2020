
import { Dimensions,StyleSheet} from 'react-native';
import colors from '../../styles/color';
const { width} = Dimensions.get('window');
const styles = StyleSheet.create({
  itemSeparatorWrapper: {
    alignItems: 'center',
  },
  itemSeparator: {
    height: 10,
    backgroundColor: colors.backgrounds.disabled,
  },
});

export default styles;