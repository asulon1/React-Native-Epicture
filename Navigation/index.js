import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PostScreen from '../screens/PostScreen';
import { useAuth } from '../utils/Auth';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigation';

const Stack = createStackNavigator();

function RootNavigator() {
const { state } = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Epicture" component={state.userToken ? BottomTabNavigator : AuthNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation(){
  return(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
