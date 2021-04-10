import React from "react";
import {StyleSheet, View, Text, ActivityIndicator} from "react-native";
import {Overlay} from "react-native-elements";

export default function Loading(props){
  return (
    <Overlay isVisible={true} overlayStyle={styles.overlay} >
        <ActivityIndicator size="large" color="#5B5B5B" />
        <Text>Cargando...</Text>
      </Overlay>
  );
}
const styles = StyleSheet.create({

  overlay: {
    width: 150,
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius:10,
    alignItems: "center",
    justifyContent: "center",
  },
  view:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
