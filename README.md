# BARBUILDER

This is a mobile app built with React Native and Expo that utilizes the ChatGPT API to generate "bars" (rhyming lines) based on user input. The app is designed to be simple and user-friendly, with an intuitive interface that allows users to easily generate bars.

## Demo

[![IMAGE ALT TEXT HERE](https://www.shareicon.net/download/2015/09/08/97834_video.ico)](https://youtube.com/shorts/ApICgG_fkKQ?feature=share)

## Getting Started

To get started with this app, you'll need to have Node.js and npm installed on your machine. You can download them from the official Node.js website. Once you have Node.js and npm installed, you can install the Expo CLI by running the following command:

```
npm install -g expo-cli
```

Next, you'll need to clone this repository and install the dependencies by running the following commands:

```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

Once the dependencies are installed, you can start the app by running the following command:

```
expo start
```

This will start the Expo development server and open the app in your default web browser or on the Expo Go mobile application.

### NOTE

To use the application, one must have access to an OpenAI key. As this application isn't yet published, any individual who wishes to use BARBUILDER must acquire a personal api key.

To get an OpenAI API key, you need to create an account on the OpenAI website and then follow these steps:

* Log in to your OpenAI account at https://beta.openai.com/login/.
* Once you are logged in, click on your username in the top right corner of the screen and select "Dashboard" from the dropdown menu.
* On the Dashboard page, click on the "Create API Key" button.
* Enter a name for your API key, such as "My App Key", and select the permissions you want to grant to the key.
* Click on the "Create API Key" button to generate your key.
* Your API key will be displayed on the next screen. Copy the key and store it in a safe place.

Once you have your API key, you can use it to access OpenAI's APIs and services. Input it in MainScreen.js at line 9:

```
const configuration = new Configuration({
  apiKey: '',
});
```

## Usage

To use the app, simply enter your line in the input field and tap the "GENERATE" button. The app will use OpenAI's gpt-3.5-turbo model to generate a specified number of bars based on your input and display it on the screen. The applications parameters are as follows:

* Bars: Text input where the line to be rhymed with is inputted. Max character length of 100. Example inputs: "Don't stop believing, life's a journey" and "My girlfriend dislikes my taste in door frames"
* Quantity: Numerical input where the number of lines to be generated is inputted. Max of 10 per generation. Example inputs: 1, 5, 9
* Tone: Text input where the desired tone of the generated lines is inputted. Max character length of 20. Example inputs: Angry, Tired, Pathetic

## Contributing

If you find any issues with the app or have ideas for new features, feel free to open an issue or submit a pull request on GitHub. We welcome contributions from the community.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.