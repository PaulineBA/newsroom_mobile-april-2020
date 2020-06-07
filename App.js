import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./src/components/ArticleList";
import SingleArticle from "./src/components/SingleArticle";
import Header from "./src/components/Header";
import axios from "axios";
import Footer from "./src/components/Footer";
import { Provider } from "react-redux";
import configureStore from "./src/state/store/configureStore";
import { navigationRef } from "./src/state/reducers/rootNavigation";

axios.defaults.baseURL = "https://localhost:3000/api";
const Stack = createStackNavigator();
const store = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <NavigationContainer>
          <Header />

          <Stack.Navigator headerMode="none" initialRouteName="ArticleList">
            <Stack.Screen name="ArticleList" component={ArticleList} />
            <Stack.Screen name="SingleArticle" component={SingleArticle} />
          </Stack.Navigator>
          <Footer />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
