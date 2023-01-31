import React, { Children } from 'react';
import { createContext } from 'react';
import { useRef } from 'react';
import { Animated } from 'react-native';
import 'react-native-gesture-handler';
export const Context=createContext(); 

const UserContext = ({children}) => {

    let slideAniMenu=new Animated.Value(-197)
    let slideAniBody=new Animated.Value(0)
  
    const slideIn=()=>{
  
      Animated.timing (slideAniMenu, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
  
      Animated.timing(slideAniBody, {
        toValue: 196,
        duration: 400,
        useNativeDriver: true,
      }).start();
      console.log(slideAniMenu)
      console.log(slideAniBody)
  
    }
   
    const slideOut=()=>{
  
      Animated.timing(slideAniBody, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
  
      Animated.timing(slideAniMenu, {
        toValue: -197,
        duration: 400,
        useNativeDriver: false,
      }).start();
  
    }

    return (
        <Context.Provider value={{slideIn,slideOut,slideAniMenu,slideAniBody}}>
            {children}
        </Context.Provider>
    );
}

export default UserContext;
