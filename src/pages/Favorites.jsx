import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Constants from "expo-constants";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import ProductCartItem from "../components/ProductCartItem";
import { StatusBar } from "expo-status-bar";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

export default function Favorites({ navigation }) {
  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  const totalOrder = () => {
    let total = 0;
    rootStore.favorites.map((product) => {
      total += product.total * product.quantity;
    });

    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 90 }}
      >
        <Header navigation={navigation} mode={"default"} />
        <View style={styles.productsContainer}>
          <Text style={styles.productsText}>Favoritos</Text>
          {rootStore.favorites.length > 0 && (
            <>
              {rootStore.favorites.map((product, index) => {
                return (
                  <ProductCartItem key={index} product={product} id={index} />
                );
              })}
            </>
          )}
          {rootStore.favorites.length < 1 && (
            <Text style={styles.empty}>Nenhum favorito encontrado!</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight,
    paddingBottom: navbarHeight + 60,
  },
  productsContainer: {
    gap: 10,
  },
  productsText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    paddingBottom: 15,
  },
  empty: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    padding: 15,
    flex: 1,
    alignItems: "center",
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
  },
});
