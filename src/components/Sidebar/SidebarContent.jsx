
import { FaReact } from 'react-icons/fa'
import { NavItem } from './NavItem'
import { NavbarItems } from '../../constants'

export const SidebarContent = () => {

    return (
        <ul className="menu bg-base-200 overflow-auto h-full  w-full ">
            <div className="flex flex-col gap-4 ">
                <div className='flex gap-2 px-3 py-2 items-center justify-start'>
                    <FaReact size={38} />
                    <span className='text-xl'>TryingCode</span>
                </div>
                {
                    NavbarItems.map((item, index) => (
                        <NavItem key={index} item={item} />
                    ))
                }
            </div>
        </ul>
    )
}