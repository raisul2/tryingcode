import React from 'react'
import TableSystemwrapper from './TableSystemwrapper'
import { Tablebtngrp } from './Tablebtngrp'
import { BiPen, BiPrinter, BiTrash, BiZoomIn } from 'react-icons/bi'
import { attributeTabeltitle, attributesdata } from './tabledata'
import ModalWrapper from '../modal/ModalWrapper'
import InputField from '../Form/InputField'
import { PrimaryButton } from '../Button/Button'
import DrawerWrapper from '../Drawer/DrawerWrapper'

export const AttributeTable = () => {
    return (
        <TableSystemwrapper

            TableHead={<TableHead tabletitle={attributeTabeltitle} />}
            TableBody={<TableBody tabledata={attributesdata} />}
        />
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

const TableHead = ({ tabletitle }) => {

    return (
        <tr>
            <CheckBox />
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
                    <tr key={index} className='capitalize bg-base-100 border-b-1'>
                        <CheckBox />
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.displayname}</th>
                        <th>{item.option}</th>
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



const DrawerContent = () => {
    const inputdata = [
        {
            type: "text",
            placeholder: "color",
            name: "text",
            leftlabel: "Attribute Title",
            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "color",
            name: "text",
            leftlabel: "Display Name",

            onchange: () => { },
        },


    ]

    const options = [
        {
            leftlabel: "Options",
            name: "Apple",
            data: ["Dropdown", "Radio"]
        },

    ]
    return (

        <div className="p-6 w-100 md:w-[60vw]">
            <div className="p-6 bg-base-300 rounded-md flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='text-xl'>Update Attribute</h2> 
                    <p className='text-sm'>Update Attribute info</p>
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
                <div className=' grid w-full   gap-2 grid-cols-1'>
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