import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, Image, Text} from 'native-base';
import Details_description from './Details_description';
import Footer_component from './Footer_component';
type Props = {};

const Details_sold_component = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Details_description />
      </View>
      <View>
        <View style={styles.priceCon}>
          <View style={styles.soldPrice}>
            <Text
              fontFamily={'body'}
              fontSize={'20px'}
              fontStyle={'normal'}
              color={'white'}>
              Sold for
            </Text>
            <Text
              fontFamily={'body'}
              fontSize={'16px'}
              fontStyle={'bold'}
              color={'white'}>
              $2,683.73
            </Text>
          </View>
          <View style={styles.owned}>
            <Text
              fontFamily={'body'}
              fontSize={'20px'}
              fontStyle={'normal'}
              color={'white'}
              marginRight={'10px'}>
              Owner by
            </Text>
            <View style={styles.ownerDeds}>
              <Image source={require('../assets/Etherscan.png')} />
              <Text
                fontFamily={'body'}
                fontSize={'20px'}
                fontStyle={'normal'}
                color={'white'}
                marginRight={'10px'}>
                @david
              </Text>
            </View>
          </View>
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

export default Details_sold_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceCon: {
    height: 140,
    width: '90%',
    backgroundColor: '#333333',
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  soldPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  owned: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerDeds: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#555555',
    width: 145,
    height: 40,
    borderRadius: 120,
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
