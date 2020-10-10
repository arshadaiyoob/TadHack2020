// import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet} from 'react-native';
import colors from '../../../styles/color';
import { FontFamilySemiBold } from '../../../styles/fonts';

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ba4343'
      },
      innerContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ba4343'
      },
      bottomContainer:{
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
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
    text:{
        margin:'10%',
        fontSize:20
    }  ,
    textContainerStyle:{
        backgroundColor:'transparent',
    borderBottomColor:colors.font.lightText,
    borderBottomWidth:1,
    },
    mobileStyle:{
        margin:30,
        marginTop:-5
    },
    mobileText:{
        ...FontFamilySemiBold,
        fontSize: 14,
        color: colors.font.lightText,
        fontWeight:'600'
    }
    
    
}
)
export default styles;