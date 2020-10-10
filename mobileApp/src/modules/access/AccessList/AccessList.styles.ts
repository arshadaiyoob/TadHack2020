// import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet} from 'react-native';import colors from '../../../styles/color';
import {  FontFamilySemiBold } from '../../../styles/fonts';


const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ba4343'
      },
      innerContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#ba4343',
      },
      bottomContainer:{
        flex:5,
        backgroundColor:'#f5f5f5',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
      topText:{
        marginTop:'15%',
        fontSize:22,
        fontFamily:'OpenSans-Regular',
        color:'white',
        fontWeight:'500',
        marginRight:'20%',
        justifyContent:'center',
    } ,
    
    imageStyle:{
        width: 26,
        height: 22, 
        marginLeft:'15%',
        marginTop:'65%'
    },
    keyboardAwareContentContainer: {
        flex: 1,
      },    
      textInput:{
          margin:20,
      } ,
      textStyle:{
          marginTop:80,
          margin:20
      },
      text:
      {
        margin:10,
        ...FontFamilySemiBold,
        fontSize: 14,
        color: colors.font.lightText,
        fontWeight:'600'
      },
      add:{
        color:colors.font.primaryRed,
        fontSize:20,
        margin:20
      }
     
}
)
export default styles;