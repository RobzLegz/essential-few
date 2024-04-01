import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React from "react";
import { AppInfo, selectApp } from "../../redux/slices/appSlice";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { accent, darkGray, gray } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import Skill from "./Skill";
import { calculateLevel } from "../../utils/calculateLevel";

const HomeContainer = () => {
  const navigation = useNavigation<any>();

  const appInfo: AppInfo = useSelector(selectApp);

  const xp = appInfo.skills.map((s) => s.xp).reduce((a, b) => a + b, 0);

  const level = calculateLevel(xp);

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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 12,
            }}
          >
            <Text style={{ color: darkGray }}>{level}</Text>
            <View
              style={{
                flex: 1,
                height: 14,
                backgroundColor: gray,
                borderRadius: 20,
                borderWidth: 0.5,
                marginHorizontal: 6,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: accent,
                }}
              />
            </View>
            <Text style={{ color: darkGray }}>{level + 1}</Text>
          </View>

          <Text style={{ color: darkGray, fontWeight: "300", marginTop: 10 }}>
            {xp}xp / {Math.pow(2, level)}xp
          </Text>
        </View>

        <View style={{ width: "100%", padding: 20, marginTop: 12 }}>
          {appInfo.skills.map((sk, i) => (
            <Skill key={i} {...sk} />
          ))}
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
