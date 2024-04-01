import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { AppInfo, selectApp } from "../../redux/slices/appSlice";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { accent, darkGray, gray } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const HomeContainer = () => {
  const navigation = useNavigation<any>();

  const appInfo: AppInfo = useSelector(selectApp);

  if (!appInfo.skills) {
    return null;
  }

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: 60,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <MaterialIcons name="add" size={36} color={darkGray} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/resources/avatar.png")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              resizeMode: "cover",
            }}
          />

          <View
            style={{
              width: "100%",
              maxWidth: 320,
              height: 14,
              backgroundColor: gray,
              borderRadius: 20,
              marginTop: 20,
              borderWidth: 0.5,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
                backgroundColor: accent,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
