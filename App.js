import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, Image} from 'react-native';
import TabScreen from './src/screens/TabScreen';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (splash) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        {/* <Text style={styles.splashText}>Virnews</Text> */}
        <Image
          style={styles.splashImage}
          source={require('./HatchfulExport-All/logo_transparent.png')}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#1a7366" barStyle="light-content" />
        <TabScreen />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1a7366',
  },
  splashImage: {
    width: 250,
    height: 250,
  },
});

export default App;
