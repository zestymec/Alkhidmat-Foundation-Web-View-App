import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [toggle, setToggle] = useState(false); 

  const handleRedirect = () => {
    setToggle(true);
  };

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

     
      <View style={toggle ? styles.webviewContainer : styles.menuContainer}>
        {!toggle ? (
          <>
            <TouchableOpacity onPress={handleRedirect}>
              <Text style={styles.yoyo}>Umer (Open Web)</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleRedirect}>
              <Text style={styles.yoyo}>AKFP Website</Text>
            </TouchableOpacity>

            <Text style={styles.yoyo}>More Info</Text>
          </>
        ) : (
          <WebView
            source={{ uri: 'https://alkhidmat.org/' }}
            style={styles.webview}
            startInLoadingState={true}
            renderLoading={LoadingIndicatorView}
            domStorageEnabled={true}
            javaScriptEnabled={true}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'yellow',
  },

  webviewContainer: {
    flex: 1,
    width: '100%',
  },
  yoyo: {
    color: 'red',
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 6,
    marginBottom: 10, 
    width: 200,
    textAlign: 'center',
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