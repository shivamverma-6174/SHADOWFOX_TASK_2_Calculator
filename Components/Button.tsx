import { Colors } from "@/utils/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  title,
  type,
  onPress,
}: {
  title: string;
  type: "top" | "right" | "number";
  onPress: Function;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type == "top"
              ? Colors.btnDark
              : type == "right"
              ? Colors.btnRight
              : type == "mm"
              ? Colors.red
              : Colors.btnLight,
        },
      ]}
      onPress={onPress}
    
    >
      <Text
        style={{
          fontSize: 34,
          color: type == "number" ? Colors.black : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: 55,
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.btnDark,
  },
});
