import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'native-base';
import {Text} from 'native-base';

type Props = {};

const Hot_bid_component = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgCon}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
          }}
          width={'260px'}
          height={'300'}
          borderRadius={'20px'}
        />
      </TouchableOpacity>
      <View style={styles.detailsCon}>
        <View style={styles.titleCon}>
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={'16px'}
            fontStyle={'bold'}
            color={'white'}>
            Inside Kings Cross
          </Text>

          <TouchableOpacity style={styles.bid}>
            <Text
              fontFamily={'heading'}
              fontWeight={'700'}
              fontSize={'16px'}
              fontStyle={'bold'}
              color={'white'}>
              2.3 ETH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.highestBidCon}>
          <Text
            fontFamily={'heading'}
            fontWeight={'400'}
            fontSize={'13px'}
            fontStyle={'semiBold'}
            color={'white'}>
            Highest bid
          </Text>
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontSize={'14px'}
            fontStyle={'bold'}
            color={'white'}>
            {' '}
            1.00ETH
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Hot_bid_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    marginLeft: 20,
    marginRight: 20,
  },
  imgCon: {
    flex: 8,
  },
  detailsCon: {
    flex: 2,
    marginTop: 10,
  },
  titleCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  bid: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    height: 32,
    width: 78,
  },
  highestBidCon: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
});
