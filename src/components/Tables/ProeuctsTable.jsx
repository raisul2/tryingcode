import React from 'react'
import TableSystemwrapper from './TableSystemwrapper'
import { productsTabletitle, productsdata, statusColor } from './tabledata'
import { Tablebtngrp } from './Tablebtngrp'
import { BiTrash, BiPen, BiZoomIn, BiPrinter, BiCross } from 'react-icons/bi'
import ModalWrapper from '../modal/ModalWrapper'
import DrawerWrapper from '../Drawer/DrawerWrapper'
import { PrimaryButton } from '../Button/Button'
import InputField from '../Form/InputField'
import { useNavigate } from 'react-router-dom'
export const ProeuctsTable = () => {
    return (
        <TableSystemwrapper TableHead={<TableHead tabletitle={productsTabletitle} />}
            TableBody={<TableBody productsdata={productsdata} />}
        />
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
    const navigate = useNavigate()
    return (
        <>
            {
                productsdata && productsdata.map((item, index) => (
                    <tr className='capitalize bg-base-100 border-b-1'>
                        <CheckBox />
                        <th><Avater /></th>
                        <th>{item.category}</th>
                        <th>{item.price}</th>
                        <th>{item.saleprice}</th>
                        <th>{item.stock}</th>

                        <th>
                            <div key={index} className={`rounded-full p-1 text-xs
                         ${item.status === "selling" ? "bg-green-200 text-green-800" : ""

                                }  flex items-center justify-center ${item.color} capitalize self-baseline`}>{item.status}</div>


                        </th>
                        <th><Tablebtngrp
                            Iconone={<BiZoomIn size={18} onClick={() => navigate("/productdetal")} />}
                        /></th>
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
                <div className="text-sm opacity-50">United States</div>
            </div>
        </div>
    )
}


export const DrawerContent = () => {
    const inputdata = [
        {
            type: "text",
            placeholder: "parsely",
            name: "text",
            leftlabel: "Product Title/Name",
            onchange: () => { },
        },
        {
            type: "text",
            placeholder: "Most fresh vegetables are low in calories and have a water content in excess of ",
            name: "text",
            leftlabel: "Product Description",

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
            leftlabel: "Category",
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

        <div className="p-6 w-100 md:w-[60vw]">
            <div className="p-6 bg-base-300 rounded-md flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='text-xl'>Update Porducts</h2>
                    <p className='text-sm'>Update products info</p>
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
                </div>
                <PrimaryButton cls={"mt-6  "} name={"Update"} />
            </div>
        </div>

    )
}