import { createSlice } from '@reduxjs/toolkit';
import { PostsData } from '../DummyData';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: { value: PostsData },
	reducers: {
		addPost: (state, action) => {
			state.value.push(action.payload);
		},
		deletePost: (state, action) => {
			console.log(state.value[action.payload.id]);
			console.log(action.payload.id);

			//state.value = state.value.splice(action.payload.id, 1)
		},
	}
});
export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;