import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useSelector, connect } from "react-redux";
import Login from "./Login";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import fonts from "./module/fonts";
import auth from "../modules/auth";
import * as RootNavigation from "../state/reducers/rootNavigation.js";

const Footer = ({ dispatch }) => {
  let [fontsLoaded] = useFonts(fonts);
  const authenticated = useSelector((state) => state.authenticated);
  const [modalVisible, setModalVisible] = useState(false);

  const showButton = authenticated ? (
    <TouchableOpacity
      testID={"Logoutbutton"}
      onPress={async () => {
        try {
          await auth.signOut();
          dispatch({
            type: "CHECK_LOGIN",
            payload: { authenticated: false },
          });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <Text style={styles.sub}>Logout</Text>
    </TouchableOpacity>
  ) : (
      <TouchableOpacity
        testID={"Loginbutton"}
        onPress={() => {
          setModalVisible(true);
        }}
      >``
        <Text style={styles.sub}>Login</Text>
      </TouchableOpacity>
    );

  const modalShow = !modalVisible && (
    { showButton }
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => RootNavigation.navigate("ArticleList")}
        >
          <Text style={styles.header}>DNS </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.background,
          modalVisible ? { backgroundColor: "rgba(0, 0, 0, 0.3)" } : "",
        ]}
      >
        <Modal
          style={styles.formModal}
          presentationStyle="overFullScreen"
          animationType={"slide"}
          backdropOpacity={1}
          transparent={true}
          isVisible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been Opened.");
          }}
        >
          <Login
            visibleForm={modalVisible}
            dispatch={dispatch}
            setModalVisible={setModalVisible}
          />
        </Modal>
        {modalShow}
      </View>
        
    );
  };
};
const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 20,
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
    fontSize: 20,
    fontFamily: "EBGaramond_400Regular",
    padding: 15,
  },
  formModal: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
});

export default connect()(Footer);
