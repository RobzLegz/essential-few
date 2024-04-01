import { createSlice } from "@reduxjs/toolkit";
import { Skill, Task } from "../../types/skill";

export interface RdxAction<T> {
  type: string;
  payload: T;
}

export interface AppInfo {
  skills: Skill[];
}

const initialState: AppInfo = {
  skills: [],
};

export const appSlice: any = createSlice({
  name: "app",
  initialState,
  reducers: {
    loadState: (state, action: RdxAction<AppInfo>) => {
      if (!action.payload) {
        return state;
      }

      let { skills } = action.payload;

      return {
        skills,
      };
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
    completeTask: (state, action: RdxAction<{ skill: Skill; task: Task }>) => {
      return {
        ...state,
        skills: state.skills.map((sk) =>
          sk.title === action.payload.skill.title
            ? {
                ...action.payload.skill,
                xp: action.payload.skill.xp + action.payload.task.xp,
              }
            : sk
        ),
      };
    },
  },
});

export const {
  loadState,
  addNewSkill,
  removeSkill,
  updateSkill,
  completeTask,
} = appSlice.actions;

export const selectApp = (state: any) => state.app;

export default appSlice.reducer;
