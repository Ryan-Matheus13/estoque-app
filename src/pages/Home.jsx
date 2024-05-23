import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useAppSelector } from "../store/hooks/useAppSelector";
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { handleSetProducts } from "../store/root/actions";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Product from "../components/Product";

// import {  } from "../store/root/actions";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  useEffect(() => {
    handleLoadProducts();
  }, []);

  const handleLoadProducts = () => {
    dispatch(
      handleSetProducts([
        {
          id: 0,
          name: "Pá",
          price: 47.99,
          inventory: 50,
          update_at: "15/05/2024 às 13:23:17",
          image: "pa.png",
        },
        {
          id: 1,
          name: "Pvc",
          price: 80.99,
          inventory: 13,
          update_at: "15/05/2024 às 13:23:17",
          image: "pvc.png",
        },
        {
          id: 2,
          name: "Telha",
          price: 123.5,
          inventory: 22,
          update_at: "15/05/2024 às 13:23:17",
          image: "telha.png",
        },
        {
          id: 3,
          name: "Tijolo",
          price: 240.0,
          inventory: 45,
          update_at: "15/05/2024 às 13:23:17",
          image: "tijolo.png",
        },
        {
          id: 4,
          name: "Tinta",
          price: 37.99,
          inventory: 76,
          update_at: "15/05/2024 às 13:23:17",
          image: "tinta.png",
        },
        {
          id: 5,
          name: "Areia",
          price: 10.99,
          inventory: 7,
          update_at: "15/05/2024 às 13:23:17",
          image: "areia.png",
        },
        {
          id: 6,
          name: "Carrinho de mão",
          price: 10.99,
          inventory: 7,
          update_at: "15/05/2024 às 13:23:17",
          image: "carrinhoDeMao.png",
        },
        {
          id: 7,
          name: "Cimento",
          price: 12.99,
          inventory: 7,
          update_at: "15/05/2024 às 13:23:17",
          image: "cimento.png",
        },
        {
          id: 8,
          name: "Furadeira",
          price: 43.99,
          inventory: 7,
          update_at: "15/05/2024 às 13:23:17",
          image: "furadeira.png",
        },
        {
          id: 9,
          name: "Martelo",
          price: 10.99,
          inventory: 7,
          update_at: "15/05/2024 às 13:23:17",
          image: "martelo.png",
        },
        {
          id: 10,
          name: "Massa",
          price: 40.99,
          inventory: 7,
          update_at: "15/05/2024 às 13:23:17",
          image: "massa.png",
        },
      ])
    );
  };

  const handleFilterList = () => {
    const filteredRows = rootStore.inventory.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredRows;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 20,
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Header
          mode={"home"}
          navigation={navigation}
          onSearch={(value) => setSearch(value)}
        />
        {/* <View style={styles.locContainer}>
          <View style={styles.address}>
            <Entypo name="location" size={24} color="#31A508" />
            <Text style={styles.addressText}>Rua sei la, bairro.</Text>
          </View>
          <Text style={styles.complementText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View> */}
        <View style={styles.products}>
          <Text style={styles.productsText}>Produtos</Text>
          {handleFilterList().map((product, index) => {
            return <Product key={index} product={product} />;
          })}
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
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight,
    paddingBottom: navbarHeight + 60,
  },
  locContainer: {
    backgroundColor: "#F4FFF0",
    padding: 20,
    borderRadius: 15,
    gap: 10,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  addressText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
    color: "#555",
  },
  productsText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    paddingVertical: 10,
  },
  complementText: {
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    color: "#555",
  },
  products: {
    gap: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  inventoryBtn: {
    backgroundColor: "#558CF8",
    height: 180,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  inventoryText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 28,
    color: "#fff",
  },
});
