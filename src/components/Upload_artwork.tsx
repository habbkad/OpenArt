import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Input, Text, TextArea, Image} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Footer_component from './Footer_component';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {useCreateNft} from '../hooks/hooks';
import axios from 'axios';

type Props = {};

const Upload_artwork = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [image, setImage] = useState([]);
  const [name, setName] = useState('');
  const [tags, setTags] = useState([]);
  const [desc, setDesc] = useState('');

  const upload = async e => {
    e.preventDefault();
    console.log(image);
    useCreateNft(image, name, tags, desc);
  };

  //image picker
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        if (selectedImage.length < 3) {
          setSelectedImage([...selectedImage, imageUri]);
          setImage([...image, response.assets]);
        }
      }
    });
  };

  return (
    <ScrollView style={styles.container} scrollEnabled>
      <View style={styles.uploadCon}>
        <Text
          fontFamily={'heading'}
          fontSize={'24px'}
          fontWeight={'700'}
          fontStyle={'bold'}
          color={'white'}>
          Upload Artwork
        </Text>
        <TouchableOpacity style={styles.btnPicSelect} onPress={openImagePicker}>
          {selectedImage.length < 3 ? (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Icon name={'image'} color={'white'} size={25} />
              <Text
                fontFamily={'heading'}
                fontSize={'20px'}
                fontStyle={'bold'}
                fontWeight={'700'}
                color={'white'}>
                Drag and drop or browce a file
              </Text>
              <Text
                fontFamily={'heading'}
                fontSize={'13px'}
                fontStyle={'normal'}
                fontWeight={'700'}
                color={'white'}>
                PNG, GIF, WEBP, MP4 or MP3. (Max 1Gb)
              </Text>
            </View>
          ) : (
            selectedImage && (
              <Image
                source={{uri: selectedImage[selectedImage.length - 1]}}
                style={{flex: 1, width: '100%', height: '100%'}}
                resizeMode="center"
              />
            )
          )}
        </TouchableOpacity>
        <Text
          marginTop={5}
          fontFamily={'heading'}
          fontSize={'16px'}
          fontStyle={'bold'}
          fontWeight={'700'}
          color={'white'}>
          Multi-file
        </Text>
        <View style={styles.picPreviews}>
          <TouchableOpacity
            style={[
              styles.picsPicked,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Feather name="upload" size={30} />
          </TouchableOpacity>
          <View style={styles.picsPicked}>
            {selectedImage && (
              <Image
                source={{uri: selectedImage[0]}}
                style={{flex: 1, width: 75, height: 75}}
              />
            )}
          </View>
          <View style={styles.picsPicked}>
            {selectedImage[1] && (
              <Image
                source={{uri: selectedImage[1]}}
                style={{flex: 1, width: 75, height: 75}}
              />
            )}
          </View>
          <View style={styles.picsPicked}>
            {selectedImage[2] && (
              <Image
                source={{uri: selectedImage[2]}}
                style={{flex: 1, width: 75, height: 75}}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.infoCon}>
        <Text
          marginTop={5}
          fontFamily={'heading'}
          fontSize={'16px'}
          fontStyle={'bold'}
          fontWeight={'700'}
          color={'white'}>
          Information
        </Text>
        <View
          style={{
            backgroundColor: '#333333',
            height: 80,
            borderRadius: 15,
            padding: 7,
          }}>
          <Text
            fontFamily={'heading'}
            fontSize={'14px'}
            fontStyle={'body'}
            fontWeight={'700'}
            marginLeft={3}
            color={'white'}>
            Item name
          </Text>
          <Input
            variant="Underlined"
            placeholder="name"
            size="md"
            color={'white'}
            onChangeText={text => {
              setName(text);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#333333',
            height: 70,
            borderRadius: 15,
            padding: 7,
          }}>
          <Text
            fontFamily={'heading'}
            fontSize={'14px'}
            fontStyle={'body'}
            fontWeight={'700'}
            marginLeft={3}
            color={'white'}>
            Tags
          </Text>
          <Input
            variant="Underlined"
            placeholder="seperate tags with ' , '"
            size="md"
            color={'white'}
            onChangeText={Text => {
              setTags(Text);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#333333',
            height: 200,
            borderRadius: 15,
            padding: 7,
          }}>
          <Text
            fontFamily={'heading'}
            fontSize={'14px'}
            fontStyle={'body'}
            fontWeight={'700'}
            marginLeft={3}
            color={'white'}>
            Description
          </Text>
          <TextArea
            marginTop={3}
            alignSelf={'center'}
            h={150}
            placeholder="Text Area Placeholder"
            w="100%"
            maxW="300"
            color={'white'}
            onChangeText={Text => {
              setDesc(Text);
            }}
          />
        </View>
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity style={styles.discoverBtn}>
          <Feather name="eye" size={30} />

          <Text
            fontFamily={'heading'}
            fontSize={'20px'}
            fontWeight={'700'}
            fontStyle={'bold'}
            color={'white'}
            marginLeft={1}>
            Preview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.earnBtn} onPress={upload}>
          <Feather name="upload" size={30} />
          <Text
            fontFamily={'heading'}
            fontSize={'20px'}
            fontWeight={'700'}
            fontStyle={'bold'}
            color={'white'}
            marginLeft={1}>
            Upload
          </Text>
        </TouchableOpacity>
      </View>
      <Footer_component />
    </ScrollView>
  );
};

export default Upload_artwork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  uploadCon: {
    flex: 3,
  },
  btnPicSelect: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#333333',
    height: 200,
    borderRadius: 20,
  },
  picPreviews: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picsPicked: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    borderColor: '#555555',
  },
  infoCon: {
    flex: 3,
  },
  btnCon: {
    flex: 3,
    alignItems: 'center',
  },
  discoverBtn: {
    flex: 3,
    flexDirection: 'row',
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 40,
    borderColor: '#0038F5',
    borderWidth: 1,
  },
  earnBtn: {
    flex: 3,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#0038F5',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 60,
  },
});
