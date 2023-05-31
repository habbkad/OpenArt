import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text, Input, Icon, Image} from 'native-base';
import React from 'react';
import {MaterialIcons} from 'react-native-vector-icons';
import Product_component from './Product_component';
import ProductPrice_component from './Product_sold_component';
import Product_auction_component from './Product_auction_component';
import Hot_bid_component from './Hot_bid_component';
import SingleBid from './SingleBid';

type Props = {};

const Home_content = (props: Props) => {
  const productPrice = [1, 2];
  const productAuction = [1, 3, 4, 3, 4, 5, 3];
  const hotBid = [1, 3, 4, 3, 4, 5, 3];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          fontFamily={'heading'}
          fontWeight={'700'}
          fontStyle={'bold'}
          fontSize={'18'}
          style={styles.text}>
          Discover, collect, and sell
        </Text>
        <Text
          fontFamily={'heading'}
          fontWeight={'700'}
          fontStyle={'bold'}
          fontSize={'32'}
          style={styles.text}>
          Your Digital Art
        </Text>
      </View>
      <View style={styles.search}>
        <Input
          placeholder="Search items, collections, and accounts"
          placeholderTextColor={'white'}
          fontSize={'13px'}
          height={'35px'}
          w={{
            base: '85%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon
              as={<Image source={require('../assets/Search.png')} />}
              size={5}
              ml="2"
              mt="2"
              color="muted.400"
            />
          }
          InputRightElement={
            <Icon
              as={<Image source={require('../assets/Mic.png')} />}
              size={4}
              mr="2"
              color="muted.400"
            />
          }
        />
      </View>
      <View>
        <SingleBid />
      </View>
      <View style={styles.content}>
        <FlatList
          data={productPrice}
          renderItem={({item}) => <ProductPrice_component />}
        />
        <FlatList
          data={productAuction}
          renderItem={({item}) => <Product_auction_component />}
        />
        <View style={styles.hotBidCon}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/FireEmoji.png')}
              height={'24px'}
            />
            <Text
              fontFamily={'heading'}
              fontWeight={'700'}
              fontStyle={'bold'}
              fontSize={'24px'}
              color={'white'}>
              Hot Bid
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Icon
              as={<Image source={require('../assets/LeftArrow.png')} />}
              size={5}
              ml="2"
              mt="2"
              color="muted.400"
            />
            <Icon
              as={<Image source={require('../assets/RightArrow.png')} />}
              size={5}
              ml="2"
              mt="2"
              color="muted.400"
            />
          </View>
        </View>
        <FlatList
          data={hotBid}
          renderItem={({item}) => <Hot_bid_component />}
          horizontal
        />
      </View>
    </View>
  );
};

export default Home_content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  search: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#00000014',
  },
  content: {
    flex: 6,
  },
  text: {
    color: '#F8F8F8',
  },
  hotBidCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flex: 1,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   search: {
//     flex: 3,
//     alignItems: 'center',
//     marginTop: 20,
//     borderRadius: 10,
//     shadowColor: '#00000014',
//   },
//   content: {
//     flex: 6,
//   },
// });
