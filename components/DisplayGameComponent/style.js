import { LOGO } from "../../constants/screen/logo";
import { StyleSheet } from "react-native";

const flex = {
  display: "flex",
  alignItems: "center",
};
export const styled = StyleSheet.create({
  gameScreen: {
    height: "100%",
    position: "relative",
  },
  head: {
    display: "flex",
    flexDirection: "row",
  },
  scoreBoxBackground: {
    ...flex,
    justifyContent: "center",
    margin: 10,
  },
  scoreBoxText: {
    textAlign: "center",
    color: "#fff",
  },
  swipeStyle: {
    ...flex,
    height: "100%",
  },
  scoreBox: {
    backgroundColor: "#654747",
    height: 90,
    width: 90,
    ...flex,
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 2,
  },
  logo: {
    ...flex,
    ...LOGO,
  },
  logoContent: { fontSize: 50, color: "#fff", fontWeight: "bold" },
  noteBox: { paddingTop: 40, paddingBottom: 5, color: "#654747" },
});
