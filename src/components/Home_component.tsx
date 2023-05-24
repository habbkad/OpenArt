import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header_component from './Header_component';
import Home_content from './Home_content';
import Footer_component from './Footer_component';

type Props = {};

const Home_component = (props: Props) => {
  return (
    <ScrollView style={styles.container} scrollEnabled>
      <View style={styles.header}>
        <Header_component />
      </View>
      <View style={styles.content}>
        <Home_content />
      </View>
      <View style={styles.footer}>
        <Footer_component />
      </View>
    </ScrollView>
  );
};

export default Home_component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
  footer: {
    flex: 2,
  },
});
