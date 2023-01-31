import React from 'react';
import { View, Text, Touchable,TouchableOpacity,Button } from 'react-native';
import {IconButton} from 'react-native-paper';
import { Context } from '../../helepers/userContext';
import { useContext } from 'react';

const HomeHeader = () => {

    const {slideAniMenu, slideOut, slideIn}=useContext(Context);

    return (
        
        <View style={{flexDirection:'row',position:'relative',width:400,alignItems:'center'}}>
            
               <IconButton style={{position:'absolute',left:1}} onPress={()=>{slideAniMenu._value===0?slideOut():slideIn()}} icon='text-box-outline'></IconButton>                
            
            <Text style={{left:'43%',position:'absolute'}}>
               Home
            </Text>
        </View>
        
    );
}

export default HomeHeader;
