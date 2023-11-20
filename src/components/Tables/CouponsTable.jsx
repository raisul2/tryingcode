import React from 'react'
import TableSystemwrapper from './TableSystemwrapper'
import { Tablebtngrp } from './Tablebtngrp'
import { BiPen, BiPrinter, BiTrash, BiZoomIn } from 'react-icons/bi'
import { couponsTabletitle, couponsdata } from './tabledata'
import DrawerWrapper from '../Drawer/DrawerWrapper'
import ModalWrapper from '../modal/ModalWrapper'
import InputField from '../Form/InputField'
import { PrimaryButton } from '../Button/Button'

const CouponsTable = () => {
    return (
        <TableSystemwrapper

            TableHead={<TableHead tabletitle={couponsTabletitle} />}
            TableBody={<TableBody tabledata={couponsdata} />}
        />
    )
}

export default CouponsTable





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
                        <th>{item.campaignname}</th>
                        <th>{item.code}</th>
                        <th>{item.discount}</th>
                        <th><input type="checkbox" className=" toggle toggle-sm" checked /></th>
                        <th>{item.startdate}</th>
                        <th>{item.startdate}</th>

                        <th>
                            <div key={index} className={`rounded-full p-1 text-xs
                         ${item.status === "Expired" ? "bg-red-200 text-red-800" : ""

                                }  flex items-center justify-center ${item.color} capitalize self-baseline`}>{item.status}</div>


                        </th>
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
            placeholder: "xyz",
            name: "text",
            leftlabel: "Campaign Name",
            onchange: () => { },
        },
        {
            type: "Number",
            placeholder: "23423", 
            name: "Number",
            leftlabel: "Campaign Code",

            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "12/01/2023 01:37 AM", 
            name: "text",
            leftlabel: "Coupon Validity Time",

            onchange: () => { },
        },
        {
            type: "number",
            placeholder: "$25", 
            name: "number",
            leftlabel: "DISCOUNT", 

            onchange: () => { },
        },
        {
            type: "number",
            placeholder: "$252", 
            name: "number",
            leftlabel: "Minimum Amount", 

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
                    <h2 className='text-xl'>Update Coupon</h2>
                    <p className='text-sm'>Updated your coupon and necessary information from here</p>
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
                <div className=' grid w-full md:grid-cols-2   gap-2 grid-cols-1'>
                <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Coupon Banner</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full " />

                    </div>
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
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Published</span>
                            <input type="checkbox" className="toggle" checked />
                        </label> 
                    </div>
                </div>
                <PrimaryButton cls={"mt-6  "} name={"Update"} />
            </div>
        </div>

    )
}  