import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Linking} from 'react-native';
import React from 'react';

const HelpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Help</Text>
        <View style={{ width: 24 }}></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.minorTitle}>Summary</Text>
        <Text style={styles.textContent}>
        BarBuilder is a mobile application designed to generate lines, or "bars", that directly rhyme with an inputted line.{'\n'}{"\n"}
        </Text>
        <Text style={styles.minorTitle}>Parameters</Text>
        <Text style={styles.textContent}>
          {'\u2192'} Bars: Text input where the line to be rhymed with is inputted. Max character length of 100. Example inputs: "Don't stop believing, life's a journey" and "My girlfriend dislikes my taste in door frames"{"\n"}
          {'\u2192'} Quantity: Numerical input where the number of lines to be generated is inputted. Max of 10 per generation. Example inputs: 1, 5, 9{"\n"}
          {'\u2192'} Tone: Text input where the desired tone of the generated lines is inputted. Max character length of 20. Example inputs: Angry, Tired, Pathetic{"\n"}{"\n"}
        </Text>
        <Text style={styles.minorTitle}>About</Text>
        <Text style={styles.textContent}>
          Designed with React Native and Expo{"\n"}
          Accesses OpenAI's gpt-3.5.turbo GPT model via API
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/samuelbraun04')}>
          <Ionicons name='logo-github' size={24}></Ionicons>
        </TouchableOpacity>
        <Text style={styles.footerText}>
        Designed by Samuel Braun
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/samuel-braun-5a1435221/')}>
          <Ionicons name='logo-linkedin' size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  minorTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textContent: {
    fontSize: 14
  },
  icon: {
    margin: 20
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  footer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default HelpScreen;