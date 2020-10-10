import { StyleSheet} from 'react-native';
import color from '../../styles/color';
import { FontFamilySemiBold } from '../../styles/fonts';

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
      },
      
      innerContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#ba4343',
        marginTop:-100,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
      },
      bottomContainer:{
        flex:2,
        backgroundColor:'white',
        marginTop:30,
        
    },
    inner:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:'40%',
    },
    topText:{
        fontSize:26,
        fontFamily:'OpenSans-Regular',
    marginLeft:-50,
color:'white',
fontWeight:'600'

    } ,
    bckText:{
        marginTop:20,
           fontSize:18,
           fontFamily:'OpenSans-Regular',
color:'white'
       } ,
    imageStyle:{
        width:20,
        height:20,
        marginTop:20,
        marginLeft:20,
        tintColor:'white'
    },
    cardView:{
        height:100,
       marginRight:30,
       marginLeft:30,
    // borderBottomColor:'#c7c7c7',
    // borderBottomWidth:1
    },
    textStyle:{
        ...FontFamilySemiBold,
        fontSize: 16,
        color: color.font.lightText,
        marginTop:20
    },
    textStyle2:{
        ...FontFamilySemiBold,
        fontSize: 16,
        color: color.font.darkText,
        marginTop:10
    },
    avatarContainer: {
        alignItems: 'center',
        marginRight: 20,
       marginTop:-20
      },
      accessTxt:{
        color:'#413E3E',
          ...FontFamilySemiBold,
          fontSize: 16,
          marginTop:40
      },
      aImageStyle:{
        width:35,
        height:35,
        marginTop:30
       
    },
    arrImageStyle:{
        width:15,
        height:15,
        marginTop:45,
        transform: [{ rotate: '180deg' }],
      marginLeft:180,
      tintColor:'#413E3E'
    },
    lImageStyle:{
        width:20,
        height:20,
        marginTop:30
       
    },
    logTxt:{
        color:'red',
          ...FontFamilySemiBold,
          fontSize: 16,
          marginTop:30 ,
          marginLeft:10
    }
}
)
export default styles;