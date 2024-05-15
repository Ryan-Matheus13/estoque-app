import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Quantity({ value, increment, decrement, size }) {
  return (
    <>
      {size == "small" && (
        <View style={styles.buttonContainerSmall}>
          <TouchableOpacity onPress={increment} style={styles.buttonSmall}>
            <Ionicons name="add" size={14} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonTextSmall}>{value}</Text>
          <TouchableOpacity onPress={decrement} style={styles.button}>
            <Ionicons name="remove" size={14} color="white" />
          </TouchableOpacity>
        </View>
      )}
      {size == "default" && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>{value}</Text>
          <TouchableOpacity onPress={decrement} style={styles.button}>
            <Ionicons name="remove" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FE724C",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "Gilroy-Medium",
    fontSize: 18,
    color: "#555",
  },
  buttonContainerSmall: {
    // flex: 1,
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
  },
  buttonSmall: {
    backgroundColor: "#FE724C",
    padding: 5,
    borderRadius: 5,
  },
  buttonTextSmall: {
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
