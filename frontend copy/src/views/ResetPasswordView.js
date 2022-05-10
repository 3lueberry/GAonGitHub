import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../stores/auth";

import StyledTextInput from "../components/StyledTextInput";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import axios from "axios";

const ResetPasswordView = () => {
  const dispatchStore = useDispatch();
  const token = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [submit, setSubmit] = useState(null);
  const [validation, setValidation] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = () => {
    setValidation(true);
    if (username === "") usernameRef.current.focus();
    else if (new_password === "" || new_password !== confirmPasswordRef.current.value)
      newPasswordRef.current.focus();
    else {
      setSubmit({ username, password, new_password });
    }
  };

  useEffect(() => {
    if (submit && validation) {
      setValidation(false);
      console.log(submit);
    }
  }, [submit]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Reset Password</Text>
      <StyledTextInput
        value={username}
        inputRef={usernameRef}
        placeholder="username"
        textContentType="username"
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
        autoFocus={true}
        blurOnSubmit={false}
        editable={!submit}
        returnKeyType="next"
        onChangeText={(value) => {
          setUsername(value.trim());
        }}
        onSubmitEditing={(e) => {
          passwordRef.current.focus();
        }}
      >
        <FontAwesome5 name="user-circle" size={30} color="grey" />
      </StyledTextInput>
      <StyledTextInput
        value={password}
        inputRef={passwordRef}
        placeholder="password"
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
        selectTextOnFocus={true}
        blurOnSubmit={false}
        editable={!submit}
        returnKeyType="next"
        onChangeText={(value) => {
          setPassword(value);
        }}
        onSubmitEditing={(e) => {
          newPasswordRef.current.focus();
        }}
      >
        <MaterialCommunityIcons name="form-textbox-password" size={30} color="grey" />
      </StyledTextInput>
      <Text style={styles.warnStyle}>{validation && !username && "username required."}</Text>
      <StyledTextInput
        value={new_password}
        inputRef={newPasswordRef}
        placeholder="new password"
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
        selectTextOnFocus={true}
        blurOnSubmit={false}
        editable={!submit}
        returnKeyType="send"
        onChangeText={(value) => {
          setNewPassword(value);
        }}
        onSubmitEditing={(e) => {
          confirmPasswordRef.current.focus();
        }}
      >
        <MaterialCommunityIcons name="form-textbox-password" size={30} color="grey" />
      </StyledTextInput>
      <StyledTextInput
        inputRef={confirmPasswordRef}
        placeholder="confirm password"
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
        selectTextOnFocus={true}
        blurOnSubmit={false}
        editable={!submit}
        returnKeyType="send"
        onChangeText={(value) => {
          confirmPasswordRef.current.value = value;
          if (new_password === value) setValidation(false);
        }}
        onSubmitEditing={handleSubmit}
      >
        <MaterialCommunityIcons name="form-textbox-password" size={30} color="grey" />
      </StyledTextInput>
      <Text style={styles.warnStyle}>
        {validation && !new_password && "new password required."}
        {validation &&
          new_password &&
          new_password !== confirmPasswordRef.current.value &&
          "passwords do not match."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "#333",
    fontWeight: "700",
    marginBottom: 30,
  },

  warnStyle: {
    color: "red",
  },

  container: {
    paddingTop: 150,
    backgroundColor: "#fff",
    alignItems: "center",
    ...StyleSheet.absoluteFill,
  },
});

export default ResetPasswordView;
