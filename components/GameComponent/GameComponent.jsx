import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { AsyncStorage } from "react-native";
import { reverseNumberToEmptyString } from "../../services/services";
import {
  getBoxSize,
  getFontSize,
  getBackgroundNumberBox,
  getNumberColor,
} from "../../helpers/helpers";
import { styled } from "./style";

export function GameComponent(props) {
  const { gameArray, variant } = props;
  const size = gameArray.length;
  return (
    <View style={styled.numbersBox}>
      {gameArray.map((el, idx) => (
        <View
          key={idx}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {el.map((e, idx) => (
            <View
              key={idx}
              style={[
                styled.numberBox,
                {
                  width: getBoxSize(size, variant),
                  height: getBoxSize(size, variant),
                  backgroundColor: getBackgroundNumberBox(e),
                },
              ]}
            >
              <Text
                style={{
                  fontSize: getFontSize(size, variant),
                  color: getNumberColor(Number(e)),
                  fontWeight: "bold",
                }}
              >
                {reverseNumberToEmptyString(e)}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
