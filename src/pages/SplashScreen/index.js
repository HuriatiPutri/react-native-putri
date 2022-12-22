/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;
