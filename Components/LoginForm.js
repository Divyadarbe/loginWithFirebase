import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Logo from "./Logo";
import EmailAndPassword from "./EmailAndPassword";
const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.emailAndPasswordContainer}>
        <EmailAndPassword />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emailAndPasswordContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
export default LoginForm;
