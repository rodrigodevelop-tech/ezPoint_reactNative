import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface CategoryButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function CategoryButtonTask({
  title,
  active = false,
  ...rest
}: CategoryButtonProps) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    // width: 76,
    paddingHorizontal: 10,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 7,
  },
  containerActive: {
    backgroundColor: colors.green_light,
    borderWidth: 1,
    borderColor: "blue",
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    color: "black",
    fontFamily: fonts.text,
  },
});
