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
import {NativeBaseProvider, extendTheme} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const theme = extendTheme({
  fontConfig: {
    Epilogue: {
      700: {
        normal: 'Epilogue-Light',
        bold: 'Epilogue-Bold',
      },
      400: {
        normal: 'Epilogue-Light',
        bold: 'Epilogue-ExtraBold',
        semiBold: 'Epilogue-SemiBold',
        thin: 'Epilogue-Thin',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Epilogue',
    body: 'Epilogue',
    mono: 'Epilogue',
    thin: 'Epilogue',
  },
});

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider theme={theme}>
        <Routing />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
