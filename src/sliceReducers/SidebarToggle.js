import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false
}
export const SidebarToggle = createSlice(
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

export const { updateOpen, toggleMenu,clickLinkClose } = SidebarToggle.actions


export default SidebarToggle.reducer