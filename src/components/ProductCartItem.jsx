import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Quantity from "./Quantity";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import {
  handleIncrementProduct,
  handleDecrementProduct,
} from "../store/root/actions";
import { MaterialIcons } from "@expo/vector-icons";
import { handleRemoveProduct } from "../store/root/actions";

export default function ProductCartItem({ product, id }) {
  const dispatch = useAppDispatch();

  const handleRemoveProductOfFavorites = () => {
    dispatch(handleRemoveProduct(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productContent}>
          <View style={styles.productLabel}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productInventory}>
              {product.inventory} Unidades
            </Text>
          </View>
        </View>
        <View style={styles.productPriceTotalContainer}>
          <Text style={styles.productPriceTotal}>
            R$ {product.price.toFixed(2)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleRemoveProductOfFavorites}
        style={styles.actionButton}
      >
        <View>
          <MaterialIcons name="delete" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  productContainer: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
  actionButton: {
    backgroundColor: "#F27F7F",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  productImageContainer: {
    height: 70,
    width: 70,
  },
  productImage: {
    borderRadius: 10,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  productContent: {
    flex: 1,
    gap: 5,
  },
  productPriceTotalContainer: {
    justifyContent: "flex-end",
  },
  productPriceTotal: {
    fontFamily: "Gilroy-Medium",
    fontSize: 18,
    color: "#555",
  },
  productLabel: {
    justifyContent: "center",
    flex: 1,
  },
  productName: {
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    color: "#555",
    height: 20,
  },
  productInventory: {
    fontFamily: "Gilroy-Medium",
    fontSize: 10,
    color: "#555",
  },
});
