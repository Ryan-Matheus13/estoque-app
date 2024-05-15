import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { handleResetFavorites } from "../store/root/actions";
import SearchInput from "./SearchInput";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Header({ mode, navigation, onSearch }) {
  const [search, setSearch] = useState("");

  const rootStore = useAppSelector((store) => store.root);

  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(handleResetFavorites());
  };
  return (
    <>
      {mode == "default" && (
        <View style={styles.headerContainer}>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <MaterialIcons name="arrow-back-ios" size={26} color="#558CF8" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={handleClearCart}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              {/* <MaterialIcons name="delete-sweep" size={34} color="#558CF8" /> */}
              <MaterialIcons name="clear" size={24} color="#558CF8" />
              <Text style={styles.clearText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {mode == "home" && (
        <View style={styles.headerContainer}>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <MaterialIcons name="menu" size={28} color="#558CF8" />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <SearchInput
              type={"default"}
              placeholder={"Buscar..."}
              onChange={onSearch}
            />
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Favorites")}
              activeOpacity={0.5}
              style={styles.headerIcon}
            >
              <MaterialCommunityIcons name="tag" size={22} color="#558CF8" />
              <View style={styles.quantBall}>
                <Text style={styles.quantBallText}>
                  {rootStore.favorites.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    color: "#555",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headerIcons: {
    position: "relative",
    height: 40,
    gap: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  quantBall: {
    position: "absolute",
    backgroundColor: "red",
    height: 15,
    width: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    top: -0.5,
    right: -0.5,
  },
  quantBallText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 9,
    color: "#fff",
  },
  headerIcon: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 12,
    color: "#558CF8",
  },
});
