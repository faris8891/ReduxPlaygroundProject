import { createSlice, current } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      const data = current(state.tasks).filter((e) => e.id !== action.payload);
      state.tasks = data;
    },
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id == action.payload.id);
      if (task) {
        task.task = action.payload.editedTask;
      }
    },

    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },

    removeAllTask: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, removeTask, editTask, completeTask, removeAllTask } =
  taskSlice.actions;
export default taskSlice.reducer;
