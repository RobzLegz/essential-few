import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { AppInfo, selectApp } from "../../redux/slices/appSlice";
import { useSelector } from "react-redux";

const HomeContainer = () => {
  const appInfo: AppInfo = useSelector(selectApp);

  if (!appInfo.skills) {
    return null;
  }

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.homeContainer}></View>
      </ScrollView>
    </View>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
  },
  homeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
});
