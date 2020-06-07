import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";
import * as RootNavigation from "../state/reducers/rootNavigation.js";
const Header = () => {
  let [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View style={styles.background}>
          <TouchableOpacity
            onPress={() => RootNavigation.navigate("ArticleList")}
          >
            <Text style={styles.header}>DNS </Text>
          </TouchableOpacity>
          <Text style={styles.sub}> Daily News Sense</Text>
        </View>
      </>
    );
  }
};