import {StyleSheet, View, Image} from 'react-native';
import {Text, Input, Icon} from 'native-base';
import React from 'react';
import {MaterialIcons} from 'react-native-vector-icons';
import Product_component from './Product_component';

type Props = {};

const Home_content = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          fontFamily={'heading'}
          fontWeight={'700'}
          fontStyle={'bold'}
          fontSize={'18'}>
          Discover, collect, and sell
        </Text>
        <Text
          fontFamily={'heading'}
          fontWeight={'700'}
          fontStyle={'bold'}
          fontSize={'32'}>
          Your Digital Art
        </Text>
      </View>
      <View style={styles.search}>
        <Input
          placeholder="Search items, collections, and accounts"
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
      <View style={styles.content}>
        <Product_component />
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
});
