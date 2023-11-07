import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image, Text, Icon} from 'native-base';

type Props = {};

const Details_description = ({data}: any) => {
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.imgCon}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
          }}
          height={'430px'}
          width={'90%'}
          borderRadius={'20px'}
        />
      </View>
      <View style={styles.titleCon}>
        <View>
          <Text
            fontFamily={'body'}
            fontSize={'24px'}
            fontStyle={'semiBold'}
            color={'white'}>
            {data.title}
          </Text>
          <TouchableOpacity style={styles.nameTag}>
            <Image style={styles.nameIcon} />
            <Text
              fontFamily={'body'}
              fontSize={'13px'}
              fontStyle={'semiBold'}
              color={'white'}>
              @openart
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.titleIcon}>
            <Icon
              as={<Image source={require('../assets/Heart.png')} />}
              size={5}
              ml="2"
              mt="2"
              color="muted.400"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleIcon}>
            <Icon
              as={<Image source={require('../assets/Export.png')} />}
              size={5}
              ml="2"
              mt="2"
              color="muted.400"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textCon}>
        <Text
          fontFamily={'body'}
          fontSize={'16px'}
          fontStyle={'normal'}
          color={'white'}>
          {data.details}
        </Text>
        <View style={styles.tags}>
          <View style={styles.tag}>
            <Text
              fontFamily={'body'}
              fontSize={'13px'}
              fontStyle={'normal'}
              color={'white'}>
              #color
            </Text>
          </View>
          <View style={styles.tag}>
            <Text
              fontFamily={'body'}
              fontSize={'13px'}
              fontStyle={'normal'}
              color={'white'}>
              #circle
            </Text>
          </View>
          <View style={styles.tag}>
            <Text
              fontFamily={'body'}
              fontSize={'13px'}
              fontStyle={'normal'}
              color={'white'}>
              #black
            </Text>
          </View>
          <View style={styles.tag}>
            <Text
              fontFamily={'body'}
              fontSize={'13px'}
              fontStyle={'normal'}
              color={'white'}>
              #art
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.detailsCon}>
        <TouchableOpacity style={styles.detail}>
          <Image source={require('../assets/Etherscan.png')} />
          <Text
            fontFamily={'body'}
            fontSize={'17px'}
            fontStyle={'semiBold'}
            color={'white'}>
            View on Etherscan
          </Text>
          <Icon
            as={<Image source={require('../assets/Redirect.png')} />}
            size={5}
            ml="2"
            mt="2"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detail}>
          <Image source={require('../assets/Star.png')} />
          <Text
            fontFamily={'body'}
            fontSize={'17px'}
            fontStyle={'semiBold'}
            color={'white'}>
            View on IPFS
          </Text>
          <Icon
            as={<Image source={require('../assets/Redirect.png')} />}
            size={5}
            ml="2"
            mt="2"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detail}>
          <Image source={require('../assets/Chart-pie.png')} />
          <Text
            fontFamily={'body'}
            fontSize={'17px'}
            fontStyle={'semiBold'}
            color={'white'}>
            View IPFS Metadata
          </Text>
          <Icon
            as={<Image source={require('../assets/Redirect.png')} />}
            size={5}
            ml="2"
            mt="2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details_description;

const styles = StyleSheet.create({
  container: {flex: 1},
  imgCon: {flex: 5, alignItems: 'center'},
  titleCon: {
    flex: 2,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  titleIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    marginLeft: 10,
  },
  nameTag: {
    flexDirection: 'row',
    height: 40,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#333333',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
  },
  textCon: {
    flex: 3,
    width: '88%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    height: 30,
    width: 66,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  detailsCon: {alignItems: 'center'},
  detail: {
    flexDirection: 'row',
    height: 60,
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
