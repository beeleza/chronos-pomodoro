import type { Dispatch, SetStateAction } from "react";

export type TaskState = {
  tasks: any[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: any | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

export type TaskContextType = {
  state: TaskState;
  setState: Dispatch<SetStateAction<TaskState>>;
};
