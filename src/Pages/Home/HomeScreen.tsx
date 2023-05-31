import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header_component from '../../components/Header_component';
import Home_component from '../../components/Home_component';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header_component />
      </View>
      <View style={{flex: 9}}>
        <Home_component />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
