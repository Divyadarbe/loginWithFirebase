import React from "react";
import firebase from 'firebase';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Article = () => {
  return (
    <View style={styles.container}>
      <View style={styles.articleContianer}>
        <Text style={styles.heading}>Welcome to the authorized screen.</Text>
        <Text style={styles.content}>You're logged in from Firebase.</Text>
        <TouchableOpacity style={{ padding: 20 }} onPress={()=>firebase.auth().signOut()}>
          <Text style={{ color: "#1B9CFC" }}>Logout</Text>
        </TouchableOpacity>
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
  articleContianer: {
    padding: 10,
    borderColor: "rgba(255,255,255,7)",
    borderBottomWidth: 5
  },
  heading: {
    fontSize: 22,
    color: "black",

    marginBottom: 10
  },
  content: {
    marginTop: 10,
    fontSize: 19
  }
});
export default Article;
