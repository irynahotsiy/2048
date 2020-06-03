import { BUTTON } from "../../constants/buttons/mainButton";
import { StyleSheet } from "react-native";

const flex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const styled = StyleSheet.create({
  container: {
    ...flex,
    justifyContent: "flex-start",
    marginTop: 100,
    height: "100%",
  },
  contentBox: {
    ...flex,
    flexDirection: "column",
  },
  imageBackground: {
    width: 270,
    height: 270,
    borderWidth: 3,
    borderColor: "#a09e9e",
  },
  buttonsBox: {
    ...flex,
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
  },
  buttonBackground: {
    fontSize: 30,
    paddingHorizontal: 28,
    paddingVertical: 15,
    backgroundColor: "#efebca",
    color: "#654747",
    fontWeight: "bold",
    borderRadius: 100,
  },
  buttonsBackForward: {
    width: 0,
    height: 0,
    borderStyle: "solid",
  },
  labelSize: {
    textAlign: "center",
    width: 200,
    fontSize: 25,
    fontWeight: "bold",
    color: "#654747",
  },
  buttonBox: {
    ...BUTTON,
    height: 50,
    width: 200,
    backgroundColor: "#654747",
    margin: 5,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
  },
});
