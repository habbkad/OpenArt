import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header_component from '../../components/Header_component';
import Upload_artwork from '../../components/Upload_artwork';

type Props = {};

const Upload_Artwork = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.upload}>
        <Upload_artwork />
      </View>
    </SafeAreaView>
  );
};

export default Upload_Artwork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  header: {
    flex: 1,
  },
  upload: {
    flex: 9,
  },
});
