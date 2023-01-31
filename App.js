import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BarberApp from './components/barberApp';
import AppContext from './helepers/appContext';

export default function App() {

  return (

    <AppContext>

    <BarberApp/>
   
    </AppContext>
   
  );
}
