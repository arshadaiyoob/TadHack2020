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
        alignItems: 'center',
        backgroundColor:'#ba4343',
      },
      bottomContainer:{
        flex:5,
        backgroundColor:'white',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        marginLeft:10,
        marginRight:10
    },
      topText:{
        marginTop:'13%',
        fontSize:18,
        fontFamily:'OpenSans-Regular',
        color:'white',
        fontWeight:'500',
        justifyContent:'center',
        marginLeft:-20
    } ,
    
    imageStyle:{
        width: 24,
        height: 20, 
        marginLeft:'15%',
        marginTop:'65%'
    },
    keyboardAwareContentContainer: {
        flex: 1,
      },    
      textInput:{
          marginTop:80,
          marginLeft:20,
          marginRight:20
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
      buttonStyle:{
        backgroundColor:'black',
        borderRadius:8,
        width:300,
        height:50,
        alignSelf:'center',
        
              },




    btnContainer:{
                marginTop:140
              },
              avatarContainer:{

                alignSelf:'center',
                marginBottom:-60,
                zIndex:5
              },
              nameWrapper: {
                flexDirection: 'row',
                paddingTop: 20,
                paddingHorizontal: 10,
                marginTop:80,
              },
              firstNameWrapper: {
                flex: 1,
              },
              lastNameWrapper: {
                flex: 1,
              },
              textContainerStyle:{
                backgroundColor:'transparent',
            borderBottomColor:colors.font.lightText,
            borderBottomWidth:1,
           
      
            },
            textInputStyle:{
                color:colors.font.lightText
            },
            mobileStyle:{
                margin:10
            },
}
)
export default styles;