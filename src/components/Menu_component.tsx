import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
type Props = {};

const Menu_component = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.menu_text}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Upload_art_work');
          }}>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            marginTop={'10'}
            color={'white'}>
            Upload Nfts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            color={'white'}
            fontStyle={'bold'}
            marginTop={'10'}>
            Blog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            color={'white'}
            marginTop={'10'}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            color={'white'}
            marginTop={'10'}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu_btn_con}>
        <TouchableOpacity style={styles.menu_btn}>
          <Text fontSize={'2xl'} color={'white'}>
            connect-wallet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#222222',
  },
  menu_text: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_btn_con: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },

  menu_btn: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgba(159, 3, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
});
