import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Details_sold_component from '../../components/Details_sold_component';
import Header_component from '../../components/Header_component';

type Props = {};

const Detail_sold = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.content}>
        <Details_sold_component />
      </View>
    </SafeAreaView>
  );
};

export default Detail_sold;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  header: {
    flex: 1,
  },
  content: {flex: 9},
});
