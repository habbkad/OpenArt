import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header_component from '../../components/Header_component';
import Footer_component from '../../components/Footer_component';
import Details_auction_component from '../../components/Details_auction_componet';

type Props = {};

const Details_auctions = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.content}>
        <Details_auction_component />
      </View>
    </SafeAreaView>
  );
};

export default Details_auctions;

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
