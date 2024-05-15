import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function SearchInput({ onChange, value, placeholder, type }) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchIconContainer}>
        <Octicons name="search" size={22} color="#ccc" />
      </View>
      <TextInput
        style={styles.search}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={type}
        placeholderTextColor="#ccc"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
  },
  search: {
    flex: 1,
    height: 30,
    fontFamily: "Gilroy-Regular",
    fontSize: 15,
    color: "#555",
  },
  searchIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
