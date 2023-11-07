/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
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
import axios from 'axios';
import {useGetNft} from './src/hooks/hooks';

// axios.defaults.baseURL = 'https://10.0.2.2:8000';
// axios.defaults.withCredentials = true;

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
  //   const fetch = async () => {
  //     axios
  //       .get('http://10.0.2.2:8000/nfts')
  //       .then(function (response) {
  //         // handle success
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   };
  //   fetch();
  // }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider theme={theme}>
          <Routing />
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
