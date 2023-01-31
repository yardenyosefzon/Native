import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '../routes/homeStack';
import Slide from './slide';
import { Context } from '../helepers/userContext';
import { useContext } from 'react';

const BarberApp=()=> {

    const {slideIn,slideOut,slideAniMenu,slideAniBody}=useContext(Context);

  return (
    <>
        <NavigationContainer>
          <TouchableWithoutFeedback onPress={()=>{slideAniMenu._value===0?slideOut():null}}>
            <Animated.View style={{flex:1,left:slideAniBody._value}}>
                <MyStack/>
            </Animated.View>
          </TouchableWithoutFeedback>
        </NavigationContainer>
        
        <Animated.View style={{flex:1,zIndex:999,width:'50%',height:'100%',position:'absolute', left:slideAniMenu._value,backgroundColor:'pink'}}>
        <Slide />
        </Animated.View>
    </>
  );
}
export default BarberApp;
