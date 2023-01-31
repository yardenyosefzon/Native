import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Post from '../components/home/post';
import Home from '../components/home/home';
import PinkCat from '../components/home/pinkCat';
import HomeHeader from '../components/home/homeHeader';
import { useContext } from 'react';

const Stack = createStackNavigator();

export default function MyStack() {
  

  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'pink',
        }

    }}>
      <Stack.Screen name="HomePage" component={Home} options={{headerTitle: () => <HomeHeader/>}} />
      <Stack.Screen name="PinkCat" component={PinkCat} />
    </Stack.Navigator>
  );
}
