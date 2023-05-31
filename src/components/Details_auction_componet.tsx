import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, Image, Text} from 'native-base';
import Details_description from './Details_description';
import Footer_component from './Footer_component';

type Props = {};

const Details_auction_content_componet = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Details_description />
      </View>
      <View>
        <View style={styles.priceCon}>
          <Text
            fontFamily={'body'}
            fontSize={'20px'}
            fontStyle={'normal'}
            color={'white'}>
            Reserve Price
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text
              fontFamily={'body'}
              fontSize={'24px'}
              fontStyle={'bold'}
              color={'white'}>
              1.50 ETH{'  '}
            </Text>
            <Text
              fontFamily={'body'}
              fontSize={'16px'}
              fontStyle={'bold'}
              color={'white'}>
              $2,683.73
            </Text>
          </View>

          <Text
            fontFamily={'body'}
            fontSize={'16px'}
            fontStyle={'normal'}
            color={'white'}
            marginTop={'20px'}>
            Once a bid has been placed and the reserve price has been met, a 24
            hour auction for this artwork will begin.
          </Text>
          <TouchableOpacity style={styles.placeBidBtn}>
            <Text
              fontFamily={'body'}
              fontSize={'16px'}
              fontStyle={'bold'}
              color={'white'}>
              Place a bid
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activities}>
          <Text
            fontFamily={'body'}
            fontSize={'20px'}
            fontStyle={'normal'}
            color={'white'}
            marginBottom={'30px'}
            marginTop={'20px'}>
            Activity
          </Text>
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
        <View>
          <Footer_component />
        </View>
      </View>
    </ScrollView>
  );
};

export default Details_auction_content_componet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceCon: {
    height: 300,
    width: '90%',
    backgroundColor: '#333333',
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  placeBidBtn: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0038F5',
    marginTop: 40,
  },
  activities: {alignSelf: 'center', marginTop: 20},
  activity: {
    height: 100,
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
  },
});
