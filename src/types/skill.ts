export interface Skill {
  title: string;
  description: string;
  tasks: Task[];
  xp: number;
}

export interface Task {
  title: string;
  xp: number;
}
