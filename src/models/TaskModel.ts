export type TaskModel = {
  id: string;
  name: string;
  duration: string;
  startDate: number;
  completeData: number | null;
  interruptData: number | null;
  type: "workTime" | "shortBreakTime" | "longBreak";
};
