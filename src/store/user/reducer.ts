import {createSlice} from '@reduxjs/toolkit';
import {AnswerType} from '../../screens/PromptSelected/PromptSelected.container';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  prompt: AnswerType[];
}

const initialState: UserState = {
  prompt: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addPrompt: (state, action) => {
      state.prompt.push(action.payload);
    },
    deletePrompt: (state, action) => {
      state.prompt = state.prompt.filter(
        prompt =>
          !(
            prompt.sectionKey === action.payload.sectionKey &&
            prompt.questionKey === action.payload.questionKey
          ),
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addPrompt, deletePrompt} = userSlice.actions;

export default userSlice.reducer;
