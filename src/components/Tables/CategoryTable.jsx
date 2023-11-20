import React from 'react'
import TableSystemwrapper from './TableSystemwrapper'
import { categoryTabletitle, categorysdata } from './tabledata'
import { Tablebtngrp } from './Tablebtngrp'
import { BiPen, BiPrinter, BiTrash, BiZoomIn } from 'react-icons/bi'
import DrawerWrapper from '../Drawer/DrawerWrapper'
import ModalWrapper from '../modal/ModalWrapper'
import InputField from '../Form/InputField'
import { PrimaryButton } from '../Button/Button'
const Categorytable = () => {
    return (
        <TableSystemwrapper

            TableHead={<TableHead tabletitle={categoryTabletitle} />}
            TableBody={<TableBody tabledata={categorysdata} />}
        />
    )
}

export default Categorytable




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
                        <th><span className='w-6 h-6 rounded-full'>icon</span></th>
                        <th>{item.description}</th>
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
            placeholder: "catename",
            name: "text",
            leftlabel: "Name",
            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "Most fresh vegetables are low in calories and have a water content in excess of ",
            name: "text",
            leftlabel: "Description",

            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "Product SKU",
            name: "text",
            leftlabel: "Product SKU",

            onchange: () => { },
        },
        {
            type: "number",
            placeholder: "$13.63",
            name: "number",
            leftlabel: "Product Price",

            onchange: () => { },
        },
        {
            type: "number",
            placeholder: "$13.63",
            name: "number",
            leftlabel: "Sale Price",

            onchange: () => { },
        },
        {
            type: "number",
            placeholder: "174.63",
            name: "number",
            leftlabel: "Product Quantity",

            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "parsley",
            name: "text",
            leftlabel: "Product Slug",

            onchange: () => { },
        },

    ]

    const options = [
        {
            leftlabel: "Parent Category",
            name: "Apple",
            data: ["Apple", "Orange", "Comla", "TR", "Pound"]
        },
        {
            leftlabel: "Default Category",
            name: "Apple",
            data: ["Apple", "Orange", "Comla", "TR", "Pound"]
        },
    ]
    return (

        <div className="p-6  w-100 md:w-[60vw]">
            <div className="p-6 bg-base-300 flex rounded-md justify-between items-center">
                <div className=" flex-col gap-2"> 
                    <h2 className='text-xl'>Update Category</h2>
                    <p className='text-sm'>Update Category info</p>
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

            <div className=" mt-6 flex flex-col justify-end items-end bg-base-200 rounded-md  ">
                <div className=' grid w-full   gap-2 sm:grid-cols-2 lg:grid-cols-2 grid-cols-1'>
                    {
                        inputdata && inputdata.map((item, index) => (
                            <InputField data={item} key={index} />
                        ))
                    }
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Products image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full " />

                    </div>

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