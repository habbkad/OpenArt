import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header_component from '../../components/Header_component';
import Profile_container from '../../components/Profile_container';

type Props = {};

const Profile = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.menu}>
        <Profile_container />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  header: {
    flex: 1,
  },
  menu: {
    flex: 9,
  },
});
