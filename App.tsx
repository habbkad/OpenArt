/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routing from './src/routing/Routing';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Routing />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
