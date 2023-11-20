import React from 'react'
import TableSystemwrapper from './TableSystemwrapper'
import { customersTabletitle, customersdata } from './tabledata'
import { Tablebtngrp } from './Tablebtngrp'
import { BiPen, BiPrinter, BiTrash, BiZoomIn } from 'react-icons/bi'
import InputField from '../Form/InputField'
import { PrimaryButton } from '../Button/Button'
import ModalWrapper from '../modal/ModalWrapper'
import DrawerWrapper from '../Drawer/DrawerWrapper'

const CustomersTable = () => {
    return (
        <TableSystemwrapper
            TableHead={<TableHead tabletitle={customersTabletitle} />}
            TableBody={<TableBody tabledata={customersdata} />}
        />
    )
}

export default CustomersTable



const TableHead = ({ tabletitle }) => {
    return (
        <tr>
            {
                tabletitle && tabletitle.map((item, index) => (
                    <th className='uppercase' key={index} >{item}</th>
                ))
            }
        </tr>
    )
}

const TableBody = ({ tabledata }) => {

    return (
        <>
            {
                tabledata && tabledata.map((item, index) => (
                    <tr className='capitalize bg-base-100 border-b-1'>
                        <th>{item.id}</th>
                        <th>{item.joiningdate}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>{item.phone}</th>


                        <th><Tablebtngrp Iconone={<BiZoomIn />} /></th>
                        <th>
                            <div className="flex gap-2 justify-center items-center ">
                                <DrawerWrapper content={<DrawerContent />} btn={<BiPen

                                    size={18}
                                />} />
                                <ModalWrapper content={"hwllmodel"} btn={<BiTrash size={18} />} />
                            </div>
                        </th>
                    </tr>
                ))
            }
        </>


    )
}
const options = []


const DrawerContent = () => {
    const inputdata = [
        {
            type: "text",
            placeholder: "xyz",
            name: "text",
            leftlabel: "Name",
            onchange: () => { },
        },
        {
            type: "email",
            placeholder: "exmple2gmail.com",
            name: "email",
            leftlabel: "Email",

            onchange: () => { },
        },
        {
            type: "number",
            placeholder: "phn",
            name: "number",
            leftlabel: "Phone",

            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "address",
            name: "text",
            leftlabel: "Address",

            onchange: () => { },
        },
       


    ]

    
    return (

        <div className="p-6 w-100 md:w-[60vw]">
            <div className="p-6 bg-base-300 rounded-md flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='text-xl'>Update Customer</h2>
                    <p className='text-sm'>Update your Customer necessary information from here</p>
                </div>
                <div className="flex gap-2 items-center ">
                    <select className="select select-accent w-full ">
                        <option disabled selected>en</option>
                        <option>dn</option>
                        <option>de</option>
                        <option>en</option>
                    </select>
                </div>


            </div>

            <div className=" flex mt-6 flex-col justify-end items-end bg-base-200 rounded-md  ">
                <div className=' grid w-full    gap-2 grid-cols-1'>
                   
                    {
                        inputdata && inputdata.map((item, index) => (
                            <InputField data={item} key={index} />
                        ))
                    }


                    {
                        options && (
                            options.map((item, index) => (
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text  ">{item.leftlabel}</span>
                                    </label>

                                    <select className="select select-bordered w-full">
                                        <option disabled selected>{item.name}</option>
                                        {
                                            item.data.map((data, index) => (
                                                <option value="someOption">{data}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            ))

                        )
                    }
                
                </div>
                <PrimaryButton cls={"mt-6  "} name={"Update"} />
            </div>
        </div>

    )
}