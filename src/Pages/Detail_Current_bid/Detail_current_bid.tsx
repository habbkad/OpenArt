import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import Header_component from '../../components/Header_component';
import Details_current from '../../components/Details_current';
type Props = {};

const Detail_current_bid = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.content}>
        <Details_current />
      </View>
    </SafeAreaView>
  );
};

export default Detail_current_bid;

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
