import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { StyleSheet, ImageBackground, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../stores/auth";

import axios from "axios";
import StyledButton from "../components/StyledButton";

const HomeView = ({ navigation }) => {
  useLayoutEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/unsplash.jpg")}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <StyledButton
          title="LOGIN"
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btnStyle}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {},

  btnStyle: {
    bottom: 100,
  },

  container: {
    flex: 1,
    ...StyleSheet.absoluteFill,
  },

  imgBackground: { flex: 1, justifyContent: "flex-end" },
});

export default HomeView;
