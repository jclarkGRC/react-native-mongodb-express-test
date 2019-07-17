import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  state = {

  };

  render(){
      return (
          <View>
            <View style={{backgroundColor: "green",height: "50%"}}>
                <Text style={{fontSize: 22, color: "white", marginTop: 40, textAlign: "center"}}>Tell me what is your name?</Text>
                <TextInput
                    placeholder="Please enter your name here"
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyle}
                />
                <Text style={{fontSize: 22, color: "white", marginTop: 40, textAlign: "center"}}>How old are you?</Text>
                <TextInput
                    placeholder="Please enter your age here"
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyle}
                />
          </View>
            <View style={{backgroundColor: "black",height: "50%", textAlign: "center"}}>
              <Text style={{fontSize: 22, color: "white", marginTop: 30, textAlign: "center"}}>Your name has this many letters:</Text>
                <Text id={"age"} style={{fontSize: 22, color: "white", marginTop: 30, textAlign: "center"}}>0</Text>
                <View style={{marginTop: 40}}>
                <Button
                    title="Save your age"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
            </View>
          </View>
      );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  TextInputStyle: {
      textAlign: 'center',
      height: 40,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#009688',
      marginTop: 20,
      marginBottom: 10,
      position: "relative",
      marginLeft: "25%",
      width: "50%",
      backgroundColor: "white",
      color: "black"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 50,
    textAlign: 'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
