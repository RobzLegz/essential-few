import { createSlice } from "@reduxjs/toolkit";
import { Skill, Task } from "../../types/skill";
import { calculateLevel } from "../../utils/calculateLevel";
import { calculateCurrentXP } from "../../utils/calculateCurrentXp";

export interface RdxAction<T> {
  type: string;
  payload: T;
}

export interface AppInfo {
  skills: Skill[];
  xp: number;
  level: number;
  currentXp: number;
}

const initialState: AppInfo = {
  skills: [],
  xp: 0,
  level: 1,
  currentXp: 0,
};

export const appSlice: any = createSlice({
  name: "app",
  initialState,
  reducers: {
    loadState: (state, action: RdxAction<AppInfo>) => {
      if (!action.payload) {
        return state;
      }

      return action.payload;
    },
    addNewSkill: (state, action: RdxAction<Skill>) => {
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    },
    removeSkill: (state, action: RdxAction<string>) => {
      return {
        ...state,
        skills: state.skills.filter((s) => s.title !== action.payload),
      };
    },
    updateSkill: (state, action: RdxAction<Skill>) => {
      return {
        ...state,
        skills: state.skills.map((sk) =>
          sk.title === action.payload.title ? action.payload : sk
        ),
      };
    },
    completeTasks: (
      state,
      action: RdxAction<{ skill: Skill; tasks: Task[] }>
    ) => {
      let globalXp = state.xp;

      const newSkills = state.skills.map((sk) => {
        if (sk.title === action.payload.skill.title) {
          const prevXp = action.payload.skill.xp;
          const newXp = action.payload.tasks
            .map((t) => t.xp)
            .reduce((a, b) => a + b, 0);

          const totalXp = prevXp + newXp;
          globalXp += newXp;

          const lvl = calculateLevel(totalXp);
          const currentXp = calculateCurrentXP(totalXp);

          return {
            ...sk,
            xp: totalXp,
            level: lvl,
            currentXp,
          };
        }

        return sk;
      });

      const lvl = calculateLevel(globalXp);
      const currentXp = calculateCurrentXP(globalXp);

      return {
        ...state,
        skills: newSkills,
        xp: globalXp,
        level: lvl,
        currentXp: currentXp,
      };
    },
  },
});

export const {
  loadState,
  addNewSkill,
  removeSkill,
  updateSkill,
  completeTasks,
} = appSlice.actions;

export const selectApp = (state: any) => state.app;

export default appSlice.reducer;
