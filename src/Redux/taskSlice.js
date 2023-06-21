import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action) => {},
    editTask: (state, action) => {},
    completeTask: (state, action) => {},
    removeAllTask: (state) => {},
  },
});
export const { addTask, deleteTask, editTask, completeTask, removeAllTask } =
  taskSlice.actions;
export default taskSlice.reducer;
