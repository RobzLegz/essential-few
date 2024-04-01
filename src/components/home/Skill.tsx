import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Skill, Task } from "../../types/skill";
import { black, darkGray, gray, white } from "../../styles/colors";
import { calculateLevel } from "../../utils/calculateLevel";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { completeTasks } from "../../redux/slices/appSlice";
import { calculatePercentage } from "../../utils/calculatePercentage";

const SkillComponent: React.FC<Skill> = ({ ...props }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);

  const updateStats = () => {
    dispatch(completeTasks({ tasks: selectedTasks, skill: props }));

    setOpen(false);
    setSelectedTasks([]);
  };

  return (
    <TouchableOpacity
      onPress={() => setOpen(true)}
      disabled={open}
      style={{
        width: "100%",
        padding: 12,
        borderWidth: 0.5,
        borderRadius: 6,
        marginBottom: 12,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{props.title}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 12,
        }}
      >
        <Text style={{ color: darkGray }}>{props.level}</Text>
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
              width: `${calculatePercentage(
                props.currentXp,
                Math.pow(2, props.level + 1)
              )}%`,
              height: "100%",
              backgroundColor: props.color,
            }}
          />
        </View>
        <Text style={{ color: darkGray }}>{props.level + 1}</Text>
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
          {props.currentXp}xp / {Math.pow(2, props.level + 1)}xp
        </Text>
      </View>

      {open ? (
        <View style={{ width: "100%", marginTop: 10, flexDirection: "row" }}>
          <ScrollView
            horizontal
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
          >
            {props.tasks.map((task, i) => (
              <TouchableOpacity
                style={{
                  padding: 6,
                  height: 44,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selectedTasks.some(
                    (t) => t.title === task.title
                  )
                    ? props.color
                    : gray,
                  borderRadius: 6,
                  borderWidth: 0.5,
                  opacity: selectedTasks.some((t) => t.title === task.title)
                    ? 1
                    : 0.8,
                  borderColor: selectedTasks.some((t) => t.title === task.title)
                    ? props.color
                    : undefined,
                  marginRight: 6,
                }}
                key={i}
                onPress={() => {
                  if (selectedTasks.some((t) => t.title === task.title)) {
                    setSelectedTasks(
                      selectedTasks.filter((t) => t.title !== task.title)
                    );
                    return;
                  }

                  setSelectedTasks([...selectedTasks, task]);
                }}
              >
                <Text
                  style={{
                    color: selectedTasks.some((t) => t.title === task.title)
                      ? white
                      : darkGray,
                  }}
                >
                  {task.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={{
              height: 44,
              backgroundColor: black,
              borderRadius: 6,
              marginLeft: 6,
              alignItems: "center",
              justifyContent: "center",
              width: 60,
            }}
            onPress={updateStats}
          >
            <MaterialIcons name="check" size={28} color={white} />
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default SkillComponent;

const styles = StyleSheet.create({});
