import React,{Component} from 'react';
import { ScrollView, Text, View,  StatusBar} from 'react-native';
import styles from './HorizontalScrollView.styles';
import LottieView from 'lottie-react-native';

export default class HorizontalScrollView extends Component{
    componentDidMount() {
        this.animation.play();
      }
    
      
    render(){


return(
<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}
>
<StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
<View style={styles.container}>
    <View style={styles.textContainer}>
    <Text style={styles.header}>Welcome to the COVID -19</Text>
<Text style={styles.header}>Self-Assessment</Text>
<LottieView
         ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 210,
            height: 200,
            backgroundColor: '#eee',
          }}
          source={require('../../../assets/coro.json')}
           />
    </View>

</View>
<View style={styles.container}>
<Text>Screen 2</Text>
</View>
<View style={styles.container}>
<Text>Screen 3</Text>
</View>
</ScrollView>


);
    }
}