import { BUTTON } from "../../constants/buttons/mainButton";
import { SCREENTRANSPARENT } from "../../constants/screen/screenTranssparent";
import { StyleSheet } from "react-native";

const text = {
  fontSize: 20,
  fontWeight: "bold",
};

export const styled = StyleSheet.create({
  screenPostion: {
    ...SCREENTRANSPARENT,
    justifyContent: "space-between",
  },
  scoreButton: {
    ...BUTTON,
    height: 50,
    width: 200,
    backgroundColor: "green",
    margin: 15,
    padding: 30,
  },
  nextButton: {
    ...BUTTON,
    height: 50,
    width: 120,
    backgroundColor: "white",
  },
  scoreText: {
    ...text,
    color: "white",
  },
  nextText: {
    ...text,
    color: "#654747",
    textTransform: "uppercase",
  },
});
