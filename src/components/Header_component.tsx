import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {};

const Header_component = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Image source={require('../assets/Menu.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    height: 60,
    alignContent: 'space-between',
    alignSelf: 'center',
  },
  logo: {
    flex: 4,
  },
  menu: {flex: 1, alignItems: 'flex-end'},
});
