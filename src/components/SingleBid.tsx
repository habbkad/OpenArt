import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Image, Icon} from 'native-base';
import ProductPrice_component from './Product_sold_component';
import React from 'react';

type Props = {};

const SingleBid = (props: Props) => {
  return (
    <View>
      <View>
        <ProductPrice_component />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.earnBtn}>
            <Text
              fontFamily={'heading'}
              fontSize={'20px'}
              fontWeight={'700'}
              fontStyle={'bold'}
              color={'white'}>
              Place a bid
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.discoverBtn}>
            <Text
              fontFamily={'heading'}
              fontSize={'20px'}
              fontWeight={'700'}
              fontStyle={'bold'}
              color={'white'}>
              View artwork
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingleBid;

const styles = StyleSheet.create({
  discoverBtn: {
    flex: 3,
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#0038F5',
    borderWidth: 1,
    marginBottom: 60,
  },
  earnBtn: {
    flex: 3,
    height: 60,
    backgroundColor: '#0038F5',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 40,
  },
});
