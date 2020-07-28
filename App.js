import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import Article from "./Components/Article";
import LoginForm from "./Components/LoginForm";
import Loading from './Components/Loading';
import BG from './Images/bg.png';
import * as firebase from "firebase";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyBu6h6PxyRYQ4MkHLOJ8tQOA42SmCc1I-4",
        authDomain: "rn-project-5bf36.firebaseapp.com",
        databaseURL: "https://rn-project-5bf36.firebaseio.com",
        projectId: "rn-project-5bf36",
        storageBucket: "rn-project-5bf36.appspot.com",
        messagingSenderId: "758096598968",
        appId: "1:758096598968:web:f4384a261f8514b85ae14d"
      
    };
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error raised", err.stack);
      }
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  });

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return <Article />;
      case false:
        return (
          <ImageBackground style={styles.container} source={BG}>
            <LoginForm />
          </ImageBackground>
        );

      default:
        return <Loading/>;
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center"
  }
});
export default App;
