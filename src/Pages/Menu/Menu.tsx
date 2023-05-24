import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Menu_component from '../../components/Menu_component';
import Header_component from '../../components/Header_component';

type Props = {};

const Menu = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.menu}>
        <Menu_component />
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
  header: {
    flex: 1,
  },
  menu: {
    flex: 9,
  },
});
