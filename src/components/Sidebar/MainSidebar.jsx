import { LogoutBtn } from "./LogoutBtn"
import { SidebarContent } from "./SidebarContent"
import { useSelector } from 'react-redux'

export const MainSidebar = () => {
    const toggle = useSelector((s) => s.sidebar.open)

    return (

        <div className={`transition-all ${toggle ? "min-w-0 absolute left-[-20%]" : "min-w-[264px]"} hidden lg:flex main_sidebar overflow-x-hidden  bg-base-200 `}>
            <SidebarContent />
            <LogoutBtn />
        </div>

    )
}