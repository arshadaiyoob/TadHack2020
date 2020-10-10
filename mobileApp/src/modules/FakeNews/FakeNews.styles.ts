import {StyleSheet} from 'react-native';
import color from '../../styles/color';

const styles=StyleSheet.create({

container:{
flex:1,
},
innerContainer:{
    flex:1,
    marginTop:70
},
headerContainer:{
    height:70,
    borderBottomColor:color.salmon,
    borderBottomWidth:2,
    marginLeft:10,
    flex:1
},
imgStyle:{
    width:20,
    height:20,
    tintColor:color.salmon,
    marginLeft:10
},
proStyle:{
    width:40,
    height:40,
    margin:10
},
buttonStyle:{
    backgroundColor:'white',
    marginTop:50,
    borderRadius:8,
    width:150,
    height:40,
    alignSelf:'flex-end',
    color:'black',
    borderColor:'black',
    borderWidth:1
},
btnContainer:{
    margin:20
},

})
export default styles;