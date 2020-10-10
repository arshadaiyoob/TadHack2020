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
        marginTop:50,
        borderRadius:8,
        width:200,
        height:50,
        alignSelf:'flex-end',
        margin:30,
              },
              btnContainer:{
                flexDirection:'row',
                marginTop:150,
                alignSelf:'flex-end'
                
  
              },
              nameWrapper: {
                flexDirection: 'row',
                paddingTop: 20,
                paddingHorizontal: 10,
                marginTop:50,
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
            cancelBtn:{
                color: colors.font.lightText,
                fontSize: 20,
                marginTop:60
            
            }
}
)
export default styles;