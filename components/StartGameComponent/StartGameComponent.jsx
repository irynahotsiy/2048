import "react-native-gesture-handler";

import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import { LEFT_BUTTON } from "../../constants/buttons/leftButton";
import { RIGHT_BUTTON } from "../../constants/buttons/rightButton";
import { styled } from "./style";
import { GameComponent } from "../GameComponent/GameComponent";

export function StartGameComponent(props) {
  const {
    onLeftButtonClick,
    onRightButtonClick,
    displaySize,
    navigation,
    gameStarted,
    generateNew,
    imageSourse,
    gameArray,
    size,
  } = props;
  const variant = "small";
  function generateNewArray() {
    generateNew();
    navigation.navigate("Game");
  }

  return (
    <View style={styled.container}>
      <View style={styled.contentBox}>
        <View style={{ height: 250 }}>
          <GameComponent gameArray={gameArray} size={size} variant={variant} />
        </View>

        <View style={styled.buttonsBox}>
          <TouchableOpacity activeOpacity={1} onPress={onLeftButtonClick}>
            <View
              style={[
                styled.buttonsBackForward,
                { borderTopRightRadius: 5 },
                { ...LEFT_BUTTON.top },
              ]}
            ></View>
            <View
              style={[
                styled.buttonsBackForward,
                { borderBottomEndRadius: 5 },
                { ...LEFT_BUTTON.bottom },
              ]}
            ></View>
          </TouchableOpacity>

          <Text style={styled.labelSize}> {displaySize} </Text>

          <TouchableOpacity
            activeOpacity={1}
            style={{
              borderRadius: 20,
            }}
            onPress={onRightButtonClick}
          >
            <View
              style={[
                styled.buttonsBackForward,
                { borderTopStartRadius: 5 },
                { ...RIGHT_BUTTON.top },
              ]}
            ></View>
            <View
              style={[
                styled.buttonsBackForward,
                { borderBottomStartRadius: 5 },
                { ...RIGHT_BUTTON.bottom },
              ]}
            ></View>
          </TouchableOpacity>
        </View>
        {gameStarted ? (
          <View>
            <TouchableOpacity
              style={styled.buttonBox}
              onPress={() => {
                navigation.navigate("Game");
              }}
            >
              <Text style={styled.buttonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styled.buttonBox}
              onPress={() => generateNewArray()}
            >
              <Text style={styled.buttonText}>New Game</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styled.buttonBox}
            onPress={() => generateNewArray()}
          >
            <Text style={styled.buttonText}>Play</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
