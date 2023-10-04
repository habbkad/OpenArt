import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import React from 'react';

type Props = {};

const Place_bid_modal = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text
          fontFamily={'body'}
          fontSize={'24px'}
          fontStyle={'bold'}
          color={'white'}>
          Place a bid
        </Text>
        <Text
          fontFamily={'body'}
          fontSize={'16px'}
          fontStyle={'normal'}
          color={'white'}>
          You must bid at least 0.825 ETH
        </Text>
      </View>
      <View style={styles.bid}>
        <Text
          fontFamily={'body'}
          fontSize={'16px'}
          fontStyle={'bold'}
          color={'white'}>
          Your Bid
        </Text>
        <View style={styles.bidDetails}>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'normal'}
            color={'white'}>
            Enter bid
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            ETH
          </Text>
        </View>
        <View style={styles.bidDetails}>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'normal'}
            color={'white'}>
            Your balance
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            4.568 ETH
          </Text>
        </View>
        <View style={styles.bidDetails}>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'normal'}
            color={'white'}>
            Service fee
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            0.001 ETH
          </Text>
        </View>
        <View style={styles.bidDetails}>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'normal'}
            color={'white'}>
            Total
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            0.001 ETH
          </Text>
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.placeBidBtn}>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            Place a bid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Place_bid_modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 2,
  },
  bid: {
    marginTop: 20,
  },
  bidDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btns: {},
  placeBidBtn: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0038F5',
    marginTop: 40,
  },
  cancelBtn: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    marginTop: 20,
  },
});
