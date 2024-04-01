export interface Skill {
  level: number;
  color: string;
  title: string;
  description: string;
  tasks: Task[];
  xp: number;
  currentXp: number;
}

export interface Task {
  title: string;
  xp: number;
}
