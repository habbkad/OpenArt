import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image, Text, Avatar} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export interface nftState {
  _id: string;
  title: string;
  creator: string;
  details: string;
  tags: [string];
  autionTime: string;
  nft_picture: [string];
  hotbid: boolean;
}

type Props = {
  info: nftState;
};

const Product_component = ({title, creator}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <TouchableOpacity style={styles.productImg}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            }}
            width={'320px'}
            height={'425px'}
            borderRadius={30}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            fontSize={'24px'}
            style={styles.text}>
            {title}
          </Text>
        </View>
        <View style={styles.creatorCon}>
          <View style={styles.avatarCon}>
            <View style={styles.creatorAvatar}>
              <Avatar
                bg="amber.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
                size="md">
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </View>
            <View style={styles.creatorTitle}>
              <Text
                fontFamily={'heading'}
                fontWeight={'700'}
                fontStyle={'bold'}
                fontSize={'18px'}
                style={styles.text}>
                {creator}
              </Text>
              <Text
                fontFamily={'heading'}
                fontWeight={'700'}
                fontSize={'14px'}
                style={styles.text}>
                Creator
              </Text>
            </View>
          </View>

          <View style={styles.likeCon}>
            <TouchableOpacity>
              <Icon name="hearto" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    alignItems: 'center',
    shadowColor: '#00000014',
    shadowOffset: {width: 10, height: 24},
    shadowRadius: 20,
  },
  con: {flex: 1, padding: 10, borderRadius: 30, backgroundColor: '#333333'},
  productImg: {
    flex: 6,
  },
  title: {
    flex: 2,
    marginTop: 10,
    margin: 3,
  },
  creatorCon: {
    flex: 8,
    flexDirection: 'row',
    marginLeft: 3,
    marginBottom: 10,
  },
  avatarCon: {
    flex: 6,
    flexDirection: 'row',
  },
  creatorAvatar: {
    flex: 2,
    marginRight: 10,
  },
  creatorTitle: {
    flex: 8,
    marginLeft: 6,
  },
  likeCon: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#F8F8F8',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 25,
//     alignItems: 'center',
//     shadowColor: '#00000014',
//     shadowOffset: {width: 10, height: 24},
//     shadowRadius: 20,
//   },
//   con: {flex: 1, padding: 10, borderRadius: 30, backgroundColor: '#333333'},
//   productImg: {
//     flex: 6,
//   },
//   title: {
//     flex: 2,
//     marginTop: 10,
//     margin: 3,
//   },
//   creatorCon: {
//     flex: 8,
//     flexDirection: 'row',
//     marginLeft: 3,
//     marginBottom: 10,
//   },
//   avatarCon: {
//     flex: 6,
//     flexDirection: 'row',
//   },
//   creatorAvatar: {
//     flex: 2,
//   },
//   creatorTitle: {
//     flex: 8,
//   },
//   likeCon: {
//     flex: 2,
//   },
// });
