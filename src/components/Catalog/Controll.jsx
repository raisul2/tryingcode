import React from 'react'
import Button, { PrimaryButton } from '../Button/Button'
import { BiExport, BiImport, BiTrash, BiPlus, BiPen } from 'react-icons/bi'
const Controll = ({mainbtnname,icon}) => {
    return ( 
        <div className='bg-base-200 p-3 sm:p-6 mb-6  flex gap-2 justify-between rounded-md items-center flex-wrap '>
            <div className=' grid grid-cols-2  w-full sm:w-auto sm:flex gap-2  justify-center items-center'>

                <Button icon={<BiExport size={18} />} name={"Export"} cls={"btn-md btn-outline"} />
                <Button icon={<BiImport size={18} />} name={"Imoprt"} cls={"btn-outline "} />
            </div>

            <div className=' grid grid-cols-1 w-full sm:w-auto sm:flex gap-2 justify-center  flex-wrap items-center'>
                <Button icon={<BiPen size={18} />} name={"Blank Action"} cls={"text-white btn-primary  "} />
                <Button icon={<BiTrash size={18} />} name={"Delete"} cls={"text-white bg-red-500 hover:bg-red-700 "} />
                <PrimaryButton icon={<BiPlus size={18} />} name={mainbtnname} />

            </div>
        </div>
    )
}

export default Controll