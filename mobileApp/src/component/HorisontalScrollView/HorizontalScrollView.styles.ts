import { StyleSheet,Dimensions} from 'react-native';

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
      textContainer:{
          marginTop:80
      }
    
}
)
export default styles;