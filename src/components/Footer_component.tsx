import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image, Text} from 'native-base';

type Props = {};

const Footer_component = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoCon}>
        <Image source={require('../assets/Logo.png')} />
        <View style={styles.moto}>
          <Text
            fontFamily={'body'}
            fontSize={'26'}
            fontWeight={'400'}
            fontStyle={'thin'}>
            The{' '}
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'26'}
            fontWeight={'400'}
            fontStyle={'normal'}>
            New{' '}
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'26'}
            fontWeight={'400'}
            fontStyle={'semiBold'}>
            Creative{' '}
          </Text>
          <Text
            fontFamily={'body'}
            fontSize={'26'}
            fontWeight={'400'}
            fontStyle={'bold'}>
            Economy
          </Text>
        </View>
        <TouchableOpacity style={styles.earnBtn}>
          <Text
            fontFamily={'heading'}
            fontSize={'20px'}
            fontWeight={'700'}
            fontStyle={'bold'}
            color={'white'}>
            Earn now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.discoverBtn}>
          <Text
            fontFamily={'heading'}
            fontSize={'20px'}
            fontWeight={'700'}
            fontStyle={'bold'}
            color={'#555555'}>
            Discover more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerCon}>
        <View style={styles.footerContent}>
          <View style={styles.socialMedia}>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Instagram
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Twitter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Discord
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Blog
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.abt}>
            <TouchableOpacity>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Community Guidlines
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Privacy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Careers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
              <Text
                fontFamily={'heading'}
                fontSize={'16px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                color={'white'}>
                Help
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
      </View>
    </View>
  );
};

export default Footer_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoCon: {flex: 5, alignItems: 'center'},
  moto: {
    flex: 4,
    flexDirection: 'row',
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
  footerCon: {
    flex: 5,
    backgroundColor: '#222222',
    height: 200,
  },
  footerContent: {
    flex: 8,
    flexDirection: 'row',
  },
  socialMedia: {
    flex: 5,
  },
  abt: {
    flex: 5,
  },
  touchStyle: {
    marginTop: 10,
  },
});
