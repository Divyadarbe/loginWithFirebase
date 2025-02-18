import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size='large'/>
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
});
export default Loading;
