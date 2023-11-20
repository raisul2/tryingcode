import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BiLeftArrow, BiRightArrow, BiZoomIn, BiPrinter } from 'react-icons/bi'
import { resentOrderdata, statusColor, statusData } from './tabledata';
import TableSystemwrapper from './TableSystemwrapper';
import { Tablebtngrp } from './Tablebtngrp';
import {useNavigate} from 'react-router-dom'
const DashBoardTable = ({ tabletitle, tabledata }) => {



    return (
        <TableSystemwrapper
            TableHead={<TableHead tabletitle={tabletitle} />}
            TableBody={<TableBody tabledata={tabledata} />}
        />
    )
}

export default DashBoardTable

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
 const navigate =  useNavigate()
    return (
        <>
            {
                tabledata && tabledata.map((item, index) => (
                    <tr className='capitalize bg-base-100 border-b-1'>
                        <th>{item.id}</th>
                        <th>{item.ordertime}</th>
                        <th>{item.author}</th>
                        <th>{item.method}</th>
                        <th>{item.amount}</th>

                        <th>
                            <div key={index} className={`rounded-full p-1 text-xs
                         ${item.status === "pending" ? statusColor.pending : item.status === "processing" ? statusColor.processing : item.status === "delivered" ? statusColor.delivered : item.status === "cancel" ? statusColor.cancel : ""

                                }  flex items-center justify-center ${item.color} capitalize self-baseline`}>{item.status}</div>


                        </th>
                        <th><DropDownStatus /></th>
                        <th><Tablebtngrp Iconone={<BiPrinter size={18} />} IconTwo={<BiZoomIn size={18} 
                         onClick={()=>navigate('/pid')}
                         />} /></th>
                    </tr>
                ))
            } 
        </>


    )
}

function DropDownStatus() {
    return (
        <div className="form-control w-full max-w-md  ">

            <select className="select capitalize select-sm text-sm font-normal select-bordered">
                <option disabled selected>{statusData[0].tatus}</option>
                {
                    statusData.map((item, index) => (
                        <option key={index}>{item.tatus}</option>
                    ))
                }

            </select>

        </div>
    )
}

