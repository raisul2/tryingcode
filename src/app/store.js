import {configureStore} from '@reduxjs/toolkit'
import SidebarToggle from '../sliceReducers/SidebarToggle'

const store = configureStore({
    reducer:{
         sidebar:SidebarToggle
    }
})

export default store