import 'react-native-url-polyfill/auto';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const MainScreen = ({ navigation }) => {

  var [inputBars, setInputBars] = useState('');
  var [inputQuantity, setInputQuantity] = useState('');
  var [inputTone, setInputTone] = useState('');
  var [barsValue, setBarValue] = useState("Generated bars will appear here");

  const handleInputBars = (text1) => {
    setInputBars(text1);
  };

  const handleInputQuantity = (text2) => {
    setInputQuantity(text2);
  };

  const handleInputTone = (text3) => {
    setInputTone(text3);
  };

  const generateBars = async () => {

    setBarValue('Generating bars....');
    var message = ""

    if (inputBars.length > 100) {
      alert("Bar input too long! Max character length of 100.")
      setBarValue('Generated bars will appear here');
      return
    } if (inputBars == ''){
      alert("Bar input required!")
      setBarValue('Generated bars will appear here');
      return
    }

    if (inputQuantity == '' || parseInt(inputQuantity) > 10) {
      inputQuantity = '10'
      alert("Max quantity is 10! Defaulting to 10.")
    }

    if (inputTone.length > 20) {
      alert("Tone input too long! Max character length of 20.")
      setBarValue('Generated bars will appear here');
      return
    } if (inputTone == '') {
      message = 'Give me '+inputQuantity+' song lines that all directly rhyme with: "'+inputBars+'". Use a rhyming dictionary to ensure every line you output rhymes directly with my inputted line (avoid using the same word to rhyme). List the lines in numbered in a "1." format. Please provide the information I am looking for and respond with the requested data. Provide the data without any introductory statements or additional information to ensure that only the information I need is recieved.'
    } else {
      message = 'Give me '+inputQuantity+' song lines that all directly rhyme with: "'+inputBars+'" in the tone of '+inputTone+'. Use a rhyming dictionary to ensure every line you output rhymes directly with my inputted line (avoid using the same word to rhyme). List the lines in numbered in a "1." format. Please provide the information I am looking for and respond with the requested data. Provide the data without any introductory statements or additional information to ensure that only the information I need is recieved.'
    }

    var completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: message}],
    });

    var output = completion.data.choices[0].message["content"]
    setBarValue(output.substring(output.indexOf(1)));
  }

  return (
      <SafeAreaView style={styles.topContainer}>
        <View  style={styles.titleContainer}>
          <Text style={styles.title}>&gt; BARBUILDER</Text>
          <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('Help')}>
            <Ionicons name="help" size={24} color="black" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Bar (100 character max)"
            onChangeText={handleInputBars}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity generated (10 max)"
            keyboardType="numeric"
            onChangeText={handleInputQuantity}
          />
          <TextInput
            style={styles.input}
            placeholder="Tone (20 character max)"
            onChangeText={handleInputTone}
          />
          <TouchableOpacity
            style={styles.generateButton}
            onPress={generateBars}>
            <Text style={styles.generateButtonText}>GENERATE</Text>            
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.outputBox}>
          <Text style={styles.outputText}>
            {barsValue}
          </Text>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  titleContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  helpButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#CCCCCC',
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 16,
  },
  generateButton: {
    fontSize: 30,
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#000000'
  },
  generateButtonText: {
    fontSize: 20,
    backgroundColor: '#333333',
    color: '#FFFFFF',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    textAlign: 'center'
  },
  outputBox: {
    backgroundColor: '#000000',
    padding: 20,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 30,
    alignSelf: 'center',
    width: '90%',
    height: '60%',
    marginTop: 30,
  },
  outputText: {
    fontSize: 15,
    color: 'white',
  }
});

export default MainScreen;