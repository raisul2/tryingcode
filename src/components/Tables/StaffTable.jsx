import React from 'react'
import { staffTabletitle, staffsdata } from './tabledata'
import { BiPen, BiTrash } from 'react-icons/bi'
import TableSystemwrapper from './TableSystemwrapper'
import { Tablebtngrp } from './Tablebtngrp'
import DrawerWrapper from '../Drawer/DrawerWrapper'
import ModalWrapper from '../modal/ModalWrapper'
import InputField from '../Form/InputField'
import { PrimaryButton } from '../Button/Button'

const StaffTable = () => {
    return (
        <TableSystemwrapper TableHead={<TableHead tabletitle={staffTabletitle} />}
            TableBody={<TableBody tabledata={staffsdata} />}
        />
    )
}

export default StaffTable




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


const CheckBox = () => {
    return (
        <th>
            <label>
                <input type="checkbox" className="checkbox w-[18px] p-0 h-[18px] rounded-sm" />
            </label>
        </th>
    )
}

const TableBody = ({ tabledata }) => {

    return (
        <>
            {
                tabledata && tabledata.map((item, index) => (
                    <tr className='capitalize bg-base-100 border-b-1'>
                        <th><Avater /></th>
                        <th>{item.email}</th>
                        <th>{item.phone}</th>
                        <th>{item.joiningdate}</th>
                        <th>{item.role}</th>

                        <th>
                            <div key={index} className={`rounded-full p-1 text-xs
                         ${item.status === "Active" ? "bg-green-600 text-white" : ""

                                }  flex items-center justify-center ${item.color} capitalize self-baseline`}>{item.status}</div>
                        </th>
                        <th><input type="checkbox" className=" toggle toggle-sm" checked /></th>
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


function Avater() {

    return (
        <div className="flex items-center gap-3">
            <div className="avatar">
                <div className="mask mask-squircle w-8 h-8">
                    <img src="https://res.cloudinary.com/raiusl/image/upload/v1649700629/posts/fjf7wwppajbpi9xvqbpv.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div className="font-bold">Hart Hagerty</div>
            </div>
        </div>
    )
}



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

    const options = []


    return (

        <div className="p-6 w-100 md:w-[60vw]">
            <div className="p-6 bg-base-300 rounded-md flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='text-xl'>Update Staff</h2>
                    <p className='text-sm'>Updated your staff necessary information from here</p>
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