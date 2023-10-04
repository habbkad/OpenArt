import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

type Props = {};

const Header_component = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu');
          }}>
          {/* <Image source={require('../assets/Menu.png')} /> */}

          <Icon name="menu" size={35} color={'white'} />
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
    height: 50,
    alignContent: 'space-between',
    backgroundColor: '#222222',
  },
  logo: {
    flex: 4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    alignItems: 'flex-end',

    justifyContent: 'center',
  },
});
