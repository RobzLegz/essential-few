import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Skill } from "../../types/skill";
import { accent, darkGray, gray, green, red, white } from "../../styles/colors";
import { calculateLevel } from "../../utils/calculateLevel";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const SkillComponent: React.FC<Skill> = ({ tasks, title, xp }) => {
  const level = calculateLevel(xp);

  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setOpen(true)}
      disabled={open}
      style={{ width: "100%", padding: 12, borderWidth: 0.5, borderRadius: 6 }}
    >
      <Text style={{ color: darkGray }}>{title}</Text>

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
            height: 12,
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

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 6,
        }}
      >
        <Text style={{ color: darkGray, fontWeight: "300", fontSize: 12 }}>
          {xp}xp / {Math.pow(2, level)}xp
        </Text>
      </View>

      {open ? (
        <View style={{ width: "100%", marginTop: 10 }}>
          {tasks.map((task, i) => (
            <View
              style={{
                width: "100%",
                padding: 6,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={i}
            >
              <View style={{ flex: 1 }}>
                <Text>{task.title}</Text>
              </View>

              <View style={{ height: 40, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    height: "100%",
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: red,
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                  }}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    size={24}
                    color={white}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    height: "100%",
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: green,
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                  }}
                >
                  <MaterialCommunityIcons name="plus" size={24} color={white} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default SkillComponent;

const styles = StyleSheet.create({});
