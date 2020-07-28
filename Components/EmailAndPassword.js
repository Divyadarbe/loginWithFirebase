import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase/app";
const EmailAndPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

  const onLoginSuccess = () => {
    setError("");
    setLoading(false);
  };
  const onButtonPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess())
      .catch(err=>{
        setError(err.message)
      })
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        style={styles.input}
        value={email}
        onChangeText={email => {
          setEmail(email);
        }}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onButtonPress()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20
  },
  input: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  errorText: {
    fontSize: 15,
    color: "red",
    alignSelf: "center",
    marginTop: 10
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#383B98",
    padding: 15,
    borderRadius: 8
  }
});
export default EmailAndPassword;
