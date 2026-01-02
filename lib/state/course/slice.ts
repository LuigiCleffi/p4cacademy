import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CourseCardProps {
  title: string;
  description: string;
  content?: {
    title: string;
    description: string;
  }[];
}

interface CoursesInfo extends CourseCardProps {
  img: string;
  badges: string[];
  courseModules: CourseCardProps[];
}

const initialState: CoursesInfo = {
  img: "",
  title: "",
  description: "",
  badges: [],
  courseModules: [
    {
      title: "",
      description: "",
      content: [],
    },
  ],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseInfo: (_state, action: PayloadAction<CoursesInfo>) => {
      return action.payload;
    },
    updateCourseTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCourseModules: (state, action: PayloadAction<CourseCardProps[]>) => {
      state.courseModules = action.payload;
    },
    resetCourse: () => initialState,
  },
});

export const {
  setCourseInfo,
  updateCourseTitle,
  setCourseModules,
  resetCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
