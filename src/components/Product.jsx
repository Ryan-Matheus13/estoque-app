import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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

  const getImage = (image) => {
    switch (image) {
      case "pa.png":
        return require("../assets/images/pa.png");
      case "pvc.png":
        return require("../assets/images/pvc.png");
      case "telha.png":
        return require("../assets/images/telha.png");
      case "tijolo.png":
        return require("../assets/images/tijolo.png");
      case "tinta.png":
        return require("../assets/images/tinta.png");
      case "areia.png":
        return require("../assets/images/areia.png");
      case "carrinhoDeMao.png":
        return require("../assets/images/carrinhoDeMao.png");
      case "cimento.png":
        return require("../assets/images/cimento.png");
      case "furadeira.png":
        return require("../assets/images/furadeira.png");
      case "martelo.png":
        return require("../assets/images/martelo.png");
      case "massa.png":
        return require("../assets/images/massa.png");
    }
  };
  return (
    <View style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={getImage(product.image)} />
      </View>

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
          <Text style={styles.actionButtonText}>Add to Favorites</Text>
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
    gap: 10,
    alignItems: "center",
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
  productImageContainer: {
    height: 50,
    width: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: "#558CF8",
    borderRadius: 100,
  },
  productImage: {
    height: "100%",
    borderRadius: 100,
    width: "100%",
    objectFit: "contain",
  },
});
