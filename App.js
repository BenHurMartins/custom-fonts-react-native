/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily: 'BowlbyOneSC-Regular', fontSize: 30}}>
        BowlbyOneSC
      </Text>
      <Text style={{fontFamily: 'Heebo-Black', fontSize: 30}}>Heebo-Black</Text>
      <Text style={{fontFamily: 'Heebo-Bold', fontSize: 30}}>Heebo-Bold</Text>
      <Text style={{fontFamily: 'Heebo-ExtraBold', fontSize: 30}}>
        Heebo-ExtraBold
      </Text>
      <Text style={{fontFamily: 'Heebo-Light', fontSize: 30}}>Heebo-Light</Text>
      <Text style={{fontFamily: 'Heebo-Medium', fontSize: 30}}>
        Heebo-Medium
      </Text>
      <Text style={{fontFamily: 'Heebo-Regular', fontSize: 30}}>
        Heebo-Regular
      </Text>
      <Text style={{fontFamily: 'Heebo-Thin', fontSize: 30}}>Heebo-Thin</Text>
      <Text style={{fontSize: 30}}>Default Font</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
