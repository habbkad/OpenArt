import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Image, ScrollView, Text} from 'native-base';
import image from '../assets/bgimage.png';
type Props = {};

const Profile_content = (props: Props) => {
  return (
    <ScrollView style={styles.container} scrollEnabled>
      <View style={styles.profilePic}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{height: 150}}>
          <Image
            size={'lg'}
            borderRadius={50}
            alignSelf={'center'}
            top={'40%'}
            source={{uri: 'https://wallpaperaccess.com/full/317501.jpg'}}
          />
          <View style={styles.profileInfo}>
            <Text color={'white'}>Name</Text>
            <Text color={'white'}>Desc</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.profileContent}></View>
      <View style={styles.nfts}></View>
    </ScrollView>
  );
};

export default Profile_content;

const styles = StyleSheet.create({
  container: {flex: 1},
  profilePic: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 250,
  },
  profileInfo: {top: '40%', alignItems: 'center'},
  profileContent: {
    flex: 3,
    height: 300,
    backgroundColor: '#333333',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  nfts: {
    flex: 5,
  },
});
