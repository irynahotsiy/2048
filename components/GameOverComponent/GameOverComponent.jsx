import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import { styled } from "./style";
import { LABEL } from "../../constants/screen/label";

export function GameOverComponent(props) {
  const { score } = props;
  return (
    <View style={styled.screenPostion}>
      <View>
        <Text style={{ ...LABEL }}>YOU LOST!</Text>
        <View style={styled.scoreButton}>
          <Text style={styled.scoreText}>Score</Text>
          <Text style={styled.scoreText}> {score}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styled.nextButton}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styled.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
