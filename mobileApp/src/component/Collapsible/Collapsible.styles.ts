import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

container:{
    flexDirection: 'row',
    height: 100,
    backgroundColor:'white',
    marginLeft:20,
    marginTop:10,
    marginRight:20,
    shadowColor:'grey',
    shadowOpacity:0.1,
    borderRadius:5
},
collapsedContainer:{
    flexDirection: 'row',
    height: 200,
    backgroundColor:'#f7f7f7',
    marginLeft:20,
    marginRight:20,
},
imgStyle:{
    height:50,
    width:50,
    marginLeft:10,
    alignSelf:'center'

},
header:{
    justifyContent:'center',
    fontSize:13,
    alignSelf:'center'
},
collText:{
    margin:20,
    flex:1
},
txt:{
    fontSize:14,
    marginTop:5
},
buttonStyle:{
    backgroundColor:'black',
    marginTop:50,
    borderRadius:8,
    width:150,
    height:40,
    alignSelf:'flex-end'
},
btnContainer:{
    marginTop:10
},

})
export default styles;