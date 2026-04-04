import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import Btn from './gluestack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';


import '@/global.css';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1, 
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
      
      <View style={styles.container}>
        {/* Provider aur Btn ke darmiyan koi space nahi honi chahiye */}
        <GluestackUIProvider mode="light">
          <Btn />
        </GluestackUIProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  
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