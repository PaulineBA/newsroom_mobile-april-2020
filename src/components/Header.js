import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";

const Header = ({ navigation }) => {
  let [fontsLoaded] = useFonts(fonts);
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View style={styles.background}>
          <TouchableOpacity onPress={() => navigation.push("ArticleList")}>
            <Text style={styles.header}>DNS </Text>
          </TouchableOpacity>
          <Text style={styles.sub}> Daily News Sense</Text>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 25,
    fontFamily: "CinzelDecorative_900Black",
    padding: 20,
  },
  background: {
    flexDirection: "row",
    backgroundColor: "#409d9b",
    justifyContent: "center",
    alignItems: "center",
  },
  sub: {
    color: "white",
    fontSize: 25,
    fontFamily: "EBGaramond_400Regular",
    padding: 20,
  },
});

export default Header;
