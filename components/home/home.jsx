import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Post from './post';

const Home = ({navigation}) => {
    
    return (
        
            <ScrollView style={topStyle.container}>

              <View style={{flexDirection:'row',justifyContent:"space-around"}}>

                  <TouchableOpacity onPress={()=>{navigation.navigate("PinkCat")}} style={innerStyle.container}>
                  <Post/>
                  </TouchableOpacity>
                  <TouchableOpacity style={innerStyle.container}>
                  <Post/>
                  </TouchableOpacity>
                  
              </View>  

            </ScrollView> 
       
       
    );
}

const topStyle = StyleSheet.create({
    container: {
      flex:1,
      position:'relative',
      backgroundColor:'green',
  
    },
  });
  
  const innerStyle = StyleSheet.create({
    container: {
      
      top:100,
      backgroundColor:'blue',
      width:'40%'
    },
  });

export default Home;
