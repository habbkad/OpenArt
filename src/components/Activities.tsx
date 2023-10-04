import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Icon, Image} from 'native-base';
import React from 'react';

type Props = {};

const Activities = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.activity}>
        <View>
          <Image
            source={require('../assets/Etherscan.png')}
            height={'50px'}
            width={'50px'}
          />
        </View>

        <View style={{marginLeft: 20}}>
          <Text
            fontFamily={'body'}
            fontSize={'14px'}
            fontStyle={'bold'}
            color={'white'}>
            Auction won by David
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'14px'}
            fontStyle={'normal'}
            color={'white'}>
            June 04, 2021 at 12:00am
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'14px'}
            fontStyle={'bold'}
            color={'white'}>
            Sold for 1.50 ETH
          </Text>
        </View>
        <View style={{marginLeft: 50}}>
          <Icon
            as={<Image source={require('../assets/Redirect.png')} />}
            size={6}
            ml="2"
            mt="2"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  activity: {
    height: 100,
    backgroundColor: '#333333',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
  },
});
