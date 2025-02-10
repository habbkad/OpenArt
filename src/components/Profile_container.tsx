import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile_content from './Profile_content';

type Props = {};

const Profile_container = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Profile_content />
      </View>

      <Text>Profile</Text>
    </View>
  );
};

export default Profile_container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
