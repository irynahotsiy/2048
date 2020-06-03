import React, { useState, useRef, useEffect } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { styled } from "./style";
import { LABEL } from "../../constants/screen/label";

export function NewMilestoneComponent(props) {
  return (
    <View style={styled.screenPostion}>
      <Text style={{ ...LABEL }}>New milestone reached</Text>
      <View style={styled.logo}>
        <Text style={{ fontSize: 50, color: "white", fontWeight: "bold" }}>
          {props.theBiggest}
        </Text>
      </View>
      <TouchableOpacity
        style={styled.nextButton}
        onPress={() => {
          props.navigation.navigate("Game");
          props.setNewMilestone(false);
        }}
      >
        <Text style={styled.nextText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
