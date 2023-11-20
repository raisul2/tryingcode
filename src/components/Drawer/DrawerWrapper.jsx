import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const DrawerWrapper = ({ btn, content, cls }) => {
    return (
        <div className="drawer  drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className=" btn bg-transparent btn-sm rounded-md btn-square ">{btn}</label>
            </div>
            <div className="drawer-side  z-40">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-auto min-h-full bg-base-200 text-base-content">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="btn btn-square z-20  absolute left-1 top-1 btn-ghost btn-circle">
                        <AiOutlineClose size={24} />
                    </label>
                    {/* Sidebar content here */}
                    {content}
                </ul>
            </div>
        </div>
    )
}

export default DrawerWrapper


