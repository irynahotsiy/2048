import { StyleSheet } from "react-native";
import { BUTTON } from "../../constants/buttons/mainButton";
import { SCREENTRANSPARENT } from "../../constants/screen/screenTranssparent";
import { LOGO } from "../../constants/screen/logo";

const flex = {
  display: "flex",
  alignItems: "center",
};
const text = {
  fontSize: 20,
  fontWeight: "bold",
};

export const styled = StyleSheet.create({
  screenPostion: {
    ...SCREENTRANSPARENT,
    justifyContent: "center",
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    ...flex,
    ...LOGO,
  },
  nextButton: {
    ...BUTTON,
    height: 50,
    width: 120,
    backgroundColor: "white",
  },
  nextText: {
    ...text,
    color: "#654747",
    textTransform: "uppercase",
  },
});
