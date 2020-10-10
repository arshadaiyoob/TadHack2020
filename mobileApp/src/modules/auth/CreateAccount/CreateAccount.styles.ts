import { StyleSheet} from 'react-native';
import color from '../../../styles/color';
import colors from '../../../styles/color';
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
        backgroundColor:'white',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    logoImage: {
        width: '75%',
        height: '40%' ,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 5
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
      modal:{
        height:400,
        backgroundColor:'white',
        borderRadius:8,
      },
      innerModal:{
        padding:20,
        marginTop:20
      },
      header:{
        ...FontFamilySemiBold,
        fontSize: 20,
        color: colors.font.darkText,
        fontWeight:'600',
        textAlign:'center'
      },
      markStyle:{
        height:40,
        width:40,
        alignSelf:'center',
        marginTop:60
      },
      contentText:{
        ...FontFamilySemiBold,
        fontSize: 16,
        
        marginTop:10,
        textAlign: 'auto'
      },
      questStyle:{
        height:30,
        width:30,
        margin:20,
        alignSelf:'flex-end'
      },
      buttonStyle:{
backgroundColor:'black',
marginTop:50,
borderRadius:8,
width:200,
height:50,
alignSelf:'flex-end',
margin:30,
      },
      btnContainer:{
        marginTop:20
      },
      btnStyle:{
        backgroundColor:'#e85f5f',
        marginTop:50,
        borderRadius:8,
        width:200,
        height:50,
        alignSelf:'center',
        margin:30,
              }

}
)
export default styles;