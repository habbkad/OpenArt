import {StyleSheet, View} from 'react-native';
import React from 'react';
import Product_component from './Product_component';
import {Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export interface nftState {
  _id: string;
  title: string;
  creator: string;
  details: string;
  tags: [string];
  autionTime: string;
  nft_picture: [string];
  hotbid: boolean;
}

type Props = {
  data: nftState;
};

const Product_price_component = ({data}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details_sold', {state: data});
        }}>
        <View style={styles.product}>
          <Product_component title={data.title} creator={data.creator} />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.soldBtn}>
            <Text
              fontFamily={'body'}
              fontStyle={'normal'}
              fontSize={'20px'}
              color={'white'}>
              Sold For{'  '}
            </Text>
            <Text
              fontFamily={'body'}
              fontStyle={'bold'}
              fontWeight={'400'}
              fontSize={'24px'}
              color={'white'}>
              2.00 ETH
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product_price_component;

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
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 65,
    borderRadius: 50,
    backgroundColor: '#333333',
  },
  soldBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  // soldBtn: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
