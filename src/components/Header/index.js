import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../assets';
import styles from './styles';

const Header = props => {
  return (
    <View
      style={
        props.color ? styles.containerColor(props.color) : styles.container
      }>
      {props.onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{props.title}</Text>
        {props.subtitle && (
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        )}
      </View>
    </View>
  );
};

export default Header;
