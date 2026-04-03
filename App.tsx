/**
 * Alkhidmat Foundation Web View App
 * Updated and Fixed
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1, // Puri screen cover karne ke liye zaroori hai
  };

  // Loading indicator dikhane ke liye function
  const LoadingIndicatorView = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#00833e" size="large" />
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      <View style={styles.container}>
        <WebView 
          source={{ uri: 'https://alkhidmat.org/' }} 
          style={styles.webview}
          // Performance aur User Experience ke liye extra props:
          startInLoadingState={true}
          renderLoading={LoadingIndicatorView}
          domStorageEnabled={true}
          javaScriptEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Yeh WebView ko poori jagah deta hai
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;