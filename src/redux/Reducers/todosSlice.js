import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		characters: {},
		detailCharater: {}
	},
	reducers: {
		setDataCharaters(state, action) {
			state.characters = action.payload
		},
		detailCharater(state, action) {
			state.detailCharater = action.payload
		}
	}
})

export const { setDataCharaters, detailCharater } = todosSlice.actions

export default todosSlice.reducer