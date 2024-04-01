import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Task } from "../../types/skill";
import {
  accent,
  darkGray,
  green,
  red,
  white,
  yellow,
} from "../../styles/colors";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const NewSkill = () => {
  const [title, setTitle] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskFocused, setTaskFocused] = useState(false);
  const [taskXp, setTaskXp] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addNewTask = () => {
    setTasks([...tasks, { title: taskName, xp: taskXp }]);

    setTaskFocused(false);
    setTaskName("");
    setTaskXp(0);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={{ fontWeight: "300" }}>Title</Text>

        <TextInput
          placeholder="Name of the skill"
          style={{
            width: "100%",
            marginTop: 8,
            height: 44,
            borderRadius: 6,
            borderWidth: 0.5,
            paddingHorizontal: 10,
          }}
          value={title}
          onChangeText={(t) => setTitle(t)}
        />
      </View>

      <View style={{ width: "100%", marginTop: 12 }}>
        <Text style={{ fontWeight: "300" }}>Task name</Text>
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <TextInput
            placeholder="Task title"
            style={{
              flex: 1,
              height: 44,
              borderRadius: 6,
              borderWidth: 0.5,
              paddingHorizontal: 10,
            }}
            onFocus={() => setTaskFocused(true)}
            value={taskName}
            onChangeText={(t) => setTaskName(t)}
          />

          <TouchableOpacity
            style={{
              height: 44,
              width: 60,
              backgroundColor: accent,
              borderRadius: 6,
              marginLeft: 6,
              opacity: !taskName || !taskXp ? 0.65 : 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={!taskName || !taskXp}
            onPress={addNewTask}
          >
            <MaterialIcons name="check" size={28} color={white} />
          </TouchableOpacity>
        </View>

        {taskName || taskFocused ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 12,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                opacity: taskXp === 10 ? 1 : 0.65,
                backgroundColor: green,
                flex: 1,
                height: 44,
                borderRadius: 6,
              }}
              onPress={() => setTaskXp(10)}
            >
              <Text style={{ color: white }}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                opacity: taskXp === 25 ? 1 : 0.65,
                backgroundColor: yellow,
                flex: 1,
                height: 44,
                borderRadius: 6,
                marginHorizontal: 6,
              }}
              onPress={() => setTaskXp(25)}
            >
              <Text style={{ color: white }}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                opacity: taskXp === 50 ? 1 : 0.65,
                backgroundColor: red,
                flex: 1,
                height: 44,
                borderRadius: 6,
              }}
              onPress={() => setTaskXp(50)}
            >
              <Text style={{ color: white }}>Hard</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={{ height: 20 }} />

        {tasks.length ? <Text>Tasks:</Text> : null}
        
        {tasks.map((task, i) => (
          <View
            key={i}
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: 10,
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderWidth: 0.5,
              borderRadius: 6,
              alignItems: "center",
            }}
          >
            <Text style={{ color: darkGray, flex: 1 }}>{task.title}</Text>
            <Text style={{ marginLeft: 12, marginRight: 4, color: accent }}>
              {task.xp}
            </Text>
            <FontAwesome5 name="coins" size={16} color={accent} />
            <TouchableOpacity
              style={{
                marginLeft: 12,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setTasks(tasks.filter((t, j) => j !== i))}
            >
              <Feather name="trash" size={28} color={red} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default NewSkill;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
});
