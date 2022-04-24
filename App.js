/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {  useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name, setName] = useState('');

  const changeText = (t) => {
    setName(t)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <KeyboardAvoidingView behavior="padding">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.box}>
        <View style={styles.boxTopImage}>
          <Image
            source={require('./assets/shape.png')}
          />
        </View>

        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={require('./assets/imagelogo.png')}
          />
        </View>

        <View style={styles.boxTexts}>
          <Text style={styles.title}>
            Gets things done with TODO
          </Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Interdum dictum tempus, 
            interdum at dignissim metus. Ultricies sed nunc.
          </Text>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
      </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E5E5'
  },
  boxTopImage: {
    flex: 0.1,
  },
  boxImage: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 150
  },
  boxTexts: {
    flex: 0.2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: 'center'
  },
  title: {
    color: 'rgba(0, 0, 0, 0.75)',
    marginHorizontal: 40,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.74)',
    marginHorizontal: 40,
    fontSize: 16,
    textAlign: 'center'
  },
  boxButton: {
    flex: 0.1,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#50C2C9',
    marginHorizontal: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default App;
