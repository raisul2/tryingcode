import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}
export const dashboardSlice = createSlice(
    {
        name: 'toggle',
        initialState,
        reducers: {
            updateOpen: (state, action) => {
                state.open = action.payload
            },
            toggleMenu: (state) => {
                state.open = !state.open
            },
            clickLinkClose: (state, action) => {
                if (action.payload === "phn") {
                    state.open = false
                } else {
                    state.open = true

                }
            }
        }

    }
)

export const { updateOpen, toggleMenu, clickLinkClose } = dashboardSlice.actions


export default dashboardSlice.reducer