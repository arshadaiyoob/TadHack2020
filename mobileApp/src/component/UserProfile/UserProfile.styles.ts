import {StyleSheet} from 'react-native';
import colors from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 127.4,
    paddingLeft: 24,
    backgroundColor:'white',
  },
  avatarWrapper: {
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingLeft: 24,
    justifyContent: 'center',
   flex:1
  },
  nameWrapper: {
    flex:1,
    flexDirection:'row',
    marginTop:50,
    justifyContent:'space-between',
    marginRight:20
    
  },
  name: {
    fontSize: 18,
    color: colors.font.darkText,
  
  },
  arrImageStyle:{
    width:20,
    height:20,
    transform: [{ rotate: '180deg' }],
  tintColor:'#413E3E',

},

});

export default styles;