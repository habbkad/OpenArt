import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';
import React from 'react';
import Product_component from './Product_component';
type Props = {};

const Product_auction_component = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Product_component />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.soldBtn}>
          <View style={{flex: 5}}>
            <Text
              fontFamily={'body'}
              fontStyle={'normal'}
              fontSize={'16px'}
              color={'white'}>
              Current Bid
            </Text>
            <Text
              fontFamily={'body'}
              fontStyle={'bold'}
              fontWeight={'400'}
              fontSize={'20px'}
              color={'white'}>
              2.00 ETH
            </Text>
          </View>
          <View style={{flex: 5}}>
            <Text
              fontFamily={'body'}
              fontStyle={'normal'}
              fontSize={'16px'}
              color={'white'}>
              Ending in
            </Text>
            <Text
              fontFamily={'body'}
              fontStyle={'bold'}
              fontWeight={'400'}
              fontSize={'20px'}
              color={'white'}>
              27m 30s
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product_auction_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  product: {
    flex: 6,
  },
  btn: {
    flex: 4,
    alignSelf: 'center',

    width: '90%',
    height: 65,
    borderRadius: 50,
    backgroundColor: '#333333',
  },
  soldBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    marginLeft: '17%',
  },
});
