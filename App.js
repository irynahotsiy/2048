import "react-native-gesture-handler";
import React, { useState, useRef, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StartGameComponent } from "./components/StartGameComponent/StartGameComponent";
import { DisplayGameComponent } from "./components/DisplayGameComponent/DisplayGameComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { SIZE_TITLES } from "./constants/titles";
import {
  getBack,
  getForward,
  getIndex,
  getForwardSize,
  getBackSize,
} from "./helpers/helpers";
import { generateArrayWithTwoRandoms } from "./services/services";
import { AsyncStorage } from "react-native";

import { NavigationContainer, useBackButton } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function App() {
  const [displaySize, setDisplaySize] = useState(SIZE_TITLES[0]);
  const [size, setSize] = useState(3);

  const [score, setScore] = useState(0);
  const [theHigestScore, setTheHigestScore] = useState(0);
  const array = generateArrayWithTwoRandoms(size);
  const [gameArray, setGameArray] = useState(array);
  const [gameStarted, setGameStarted] = useState(true);

  function onLeftButtonClick() {
    if (SIZE_TITLES.indexOf(displaySize) !== 0) {
      setDisplaySize(getBack(SIZE_TITLES, displaySize));
      setSize(getBackSize(SIZE_TITLES, size, displaySize));
    }
  }

  function onRightButtonClick() {
    if (SIZE_TITLES.indexOf(displaySize) !== SIZE_TITLES.length - 1) {
      setDisplaySize(getForward(SIZE_TITLES, displaySize));
      setSize(getForwardSize(SIZE_TITLES, size, displaySize));
    }
  }

  const retrieveData = async (size) => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem(`${size}`));
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem(`${size}`);
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  };

  function generateNew() {
    deleteData();
    setGameArray(array);
    setScore(0);
    setTheHigestScore(theHigestScore);
    setGameStarted(false);
  }

  useEffect(() => {
    async function getData() {
      const data = await retrieveData(size);
      console.log("----------", data);
      if (data && data.gameArray) {
        setGameArray(data.gameArray);
        if (data.score) {
          setScore(data.score);
        }
        if (data.theHigestScore) {
          setTheHigestScore(data.theHigestScore);
        }
        console.log("score apps", score);
        setGameStarted(true);
        // } else {
        //   generateNew();
      }
    }
    getData();
  }, [size]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <StartGameComponent
              {...props}
              displaySize={displaySize}
              onLeftButtonClick={onLeftButtonClick}
              onRightButtonClick={onRightButtonClick}
              gameStarted={gameStarted}
              generateNew={generateNew}
              gameArray={gameArray}
              size={size}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Game">
          {(props) => (
            <DisplayGameComponent
              {...props}
              size={size}
              gameArray={gameArray}
              setGameArray={setGameArray}
              gameStarted={gameStarted}
              setGameStarted={setGameStarted}
              score={score}
              setScore={setScore}
              theHigestScore={theHigestScore}
              setTheHigestScore={setTheHigestScore}
              deleteData={deleteData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
