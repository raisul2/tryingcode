import { updateOpen } from "../../sliceReducers/SidebarToggle";
import { LogoutBtn } from "./LogoutBtn"
import { SidebarContent } from "./SidebarContent"
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
export const PhoneSidebar = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((s) => s.sidebar.open)

    return (
        <div className={`absolute ${toggle ? " left-0" : "left-[-100%]"} min-w-[254px] h-[100vh]  z-10 lg:hidden  top-0 transition-all  bg-base-200  main_sidebar flex   `}>

            <button onClick={() => dispatch(updateOpen(false))} className="btn btn-square z-20  absolute right-0 top-3 btn-ghost btn-circle">
                <AiOutlineClose size={24} />
            </button>

            <SidebarContent />
            <LogoutBtn />

        </div>
    )
}
