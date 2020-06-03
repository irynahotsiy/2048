import { StyleSheet } from "react-native";

const flex = {
  display: "flex",
  alignItems: "center",
};
export const styled = StyleSheet.create({
  numbersBox: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#9e9c9c",
    backgroundColor: "#9e9c9c",
  },
  numberBox: {
    ...flex,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    margin: 2,
  },
});
