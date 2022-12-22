/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AddProduct, EditProduct, HomeScreen, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
