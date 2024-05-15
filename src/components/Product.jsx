import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { handleAddProduct } from "../store/root/actions";

export default function Product({ product }) {
  const dispatch = useAppDispatch();

  const handleAddProductToFavorites = () => {
    const obj = {
      id: product.id,
      name: product.name,
      inventory: product.inventory,
      price: product.price,
    };
    dispatch(handleAddProduct(obj));
  };
  return (
    <View style={styles.productContainer}>
      <View style={styles.productLabel}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.productLabelContainer}>
          <Text style={styles.productQuantityBold}>Quantidade em estoque:</Text>
          <Text style={styles.productQuantity}>
            {product.inventory} unidades
          </Text>
        </View>
        <View style={styles.productLabelContainer}>
          <Text style={styles.productUpdatedBold}>Ultima atualização:</Text>
          <Text style={styles.productUpdated}>{product.update_at}</Text>
        </View>
        <View style={styles.productLabelContainer}>
          <Text style={[styles.productUpdatedBold, { color: "green" }]}>
            Preço:
          </Text>
          <Text style={[styles.productUpdated, { color: "green" }]}>
            R$ {product.price.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={handleAddProductToFavorites}
          style={styles.actionButton}
        >
          <MaterialCommunityIcons name="tag" size={24} color="white" />
          <Text style={styles.actionButtonText}>Adicionar aos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  productLabel: {
    flex: 1,
    justifyContent: "space-between",
    gap: 5,
  },
  actionButton: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 10,
    padding: 10,
    gap: 5,
  },
  actionButtonText: {
    fontFamily: "Gilroy-Medium",
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
  iconContainer: {
    flex: 0.3,
    gap: 10,
  },
  productName: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 16,
    color: "#555",
  },
  productLabelContainer: {
    flexDirection: "row",
    gap: 5,
  },
  productQuantityBold: {
    fontFamily: "Gilroy-Medium",
    fontSize: 11,
    color: "#555",
  },
  productQuantity: {
    fontFamily: "Gilroy-Regular",
    fontSize: 11,
    color: "#555",
  },
  productUpdatedBold: {
    fontFamily: "Gilroy-Medium",
    fontSize: 11,
    color: "#555",
  },
  productUpdated: {
    fontFamily: "Gilroy-Regular",
    fontSize: 11,
    color: "#555",
  },
});
