import { StyleSheet} from 'react-native';
import colors from '../../styles/color';

const style = StyleSheet.create({
container:{
   flex:3,
},
bottomContainer:{
    flex:1,
    backgroundColor:'white',
    borderTopRightRadius:10,
    borderTopLeftRadius:10
},
txtStyle:{
    margin:30,
    fontSize: 20,
    color: colors.font.darkText,
},
btnContainer:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:70
},
buttonStyle:{
    backgroundColor:'#bd0606',
        borderRadius:8,
        width:200,
        height:50,
        alignSelf:'flex-end',
      marginLeft:30
},
cancelBtn:{
    color: colors.font.lightText,
    fontSize: 20,
    marginTop:10

}
});

export default style;
