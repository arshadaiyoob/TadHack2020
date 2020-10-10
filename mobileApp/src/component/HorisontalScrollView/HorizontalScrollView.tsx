import React,{Component} from 'react';
import { ScrollView, Text, View,  StatusBar,Animated,Image, TouchableOpacity} from 'react-native';
import styles from './HorizontalScrollView.styles';
import LottieView from 'lottie-react-native';
import logoImage from '../../../assets/logo.png';

export default class HorizontalScrollView extends Component{
  width=new Animated.Value(200);
  height=new Animated.Value(200);

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
<View style={styles.imageStyle}>
<LottieView
         ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 220,
            height: 200,
            backgroundColor: '#eee',
          }}
          source={require('../../../assets/coro.json')}
           />
</View>
<Text style={styles.body}>
    This will help you access your symptoms and determine if you're a 
    candidate for a coronavirus disease 2019 (COVID-19) test.
    It also offers guidance on when to seek medical care and what to do in the meantime.
</Text>
    </View>
    <View style={styles.indicatorContainer}>
    <View style={styles.active}></View>
<View style={styles.dot}></View>
<View style={styles.dot}></View>
    </View>
    
</View>
<View style={styles.container}>
<View style={styles.textContainer}>
    <Text style={styles.header2}>Thank you for helping MOHAP to</Text>
<Text style={styles.header2}>control COVID_19</Text>
<View style={styles.imageStyle}>
<LottieView
         ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 300,
            height: 200,
          }}
          source={require('../../../assets/prevent.json')}
           />
</View>
<Text style={styles.body2}>
    Keep your app open when you are in crowded area such as Malls, Office, Bus stops, Hospitals and Meetings
</Text>
    </View>
    <View style={styles.indicatorContainer2}>
    <View style={styles.dot}></View>
<View style={styles.active}></View>
<View style={styles.dot}></View>
    </View>
</View>
<View style={styles.container3}>
<View style={styles.innerContainer} >
<Animated.Image
          style={[styles.logoImage,{width:this.width, height:this.height}]}
          source={require('../../../assets/logo.png')}
          
        />
        <TouchableOpacity  onPress={()=>{Animated.timing(
            this.width,
            {
              toValue:100000,
              duration:300,
              useNativeDriver:false
            }).start();
            Animated.timing(
                this.height,
                {
                  toValue:100000,
                  duration:300,
                  useNativeDriver:false
                }).start();}}>
                            <View style={{flexDirection:'row',display:"flex",justifyContent:"center",alignItems:"center"}}>

                    <Text style={styles.body3}>GETTING STARTED</Text>
                <Image  source={require('../../../assets/backArrow.png')} style={styles.arrImageStyle}/>
                </View>
                </TouchableOpacity>

</View>
</View>
</ScrollView>


);
    }
}