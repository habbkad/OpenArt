import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

type Props = {};

const Menu_component = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.menu_text}>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            marginTop={'70'}>
            About OpenArt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            marginTop={'32'}>
            Blog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            marginTop={'32'}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            fontSize={'3xl'}
            fontFamily={'heading'}
            fontWeight={'700'}
            fontStyle={'bold'}
            marginTop={'32'}>
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
  container: {flex: 1, justifyContent: 'space-between'},
  menu_text: {
    flex: 4,
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
    marginTop: 150,
    borderRadius: 10,
  },
});
