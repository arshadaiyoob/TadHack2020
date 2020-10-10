import { StyleSheet,Dimensions} from 'react-native';
import color from '../../styles/color';

const screenWidth = Dimensions.get('window').width;
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems:'center',
        width:screenWidth
      },
      header:{
          fontSize:26,
          fontWeight:'600',
          alignSelf:'center',
      },
      header2:{
        fontSize:24,
        fontWeight:'600',
        alignSelf:'center',
      },
      textContainer:{
          marginTop:80
      },
      imageStyle:{
marginTop:60,
alignSelf:'center',
      },
      body:{
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        
      },
      body2:{
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        color:color.salmon
      },
      dot:{
        height: 10,
        width: 10,
        backgroundColor: '#bbb',
        borderRadius: 50,
        margin:5,
        
      },
      active:{
        height: 10,
        width: 10,
        backgroundColor: color.font.lightText,
        borderRadius: 50,
        margin:5, 
      },
      indicatorContainer:{
          flex:1,
          flexDirection:'row',
          marginTop:100
      },
      indicatorContainer2:{
        flex:1,
          flexDirection:'row',
          marginTop:170  
      },
      container3: {
        flex: 1,
        backgroundColor:'#ba4343',
        alignItems:'center',
        width:screenWidth,
     
       justifyContent:'center',
   
      },
      innerContainer:{
         flex:1,
         flexDirection:'column',
         alignItems:'center',
       justifyContent:'center',
       display:'flex',
      },
      body3:{
        marginRight:30,
        marginLeft:30,
        marginTop:50,
        fontSize:32,
        fontWeight:'500',
        textAlign:'center',
        color:'white',
        display:"flex",
      },
      logoImage:{
        width: 200,
        height: 200 ,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 5,
      },
      arrImageStyle:{
        width:25,
        height:25,
        marginTop:50,
        transform: [{ rotate: '180deg' }],
    //   marginLeft:180,
      tintColor:'white',
      display:"flex",
    },
    
}
)
export default styles;