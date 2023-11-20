import React from 'react'
import InputField from '../Form/InputField'
import Button, { PrimaryButton } from '../Button/Button'
import { BiDownload } from 'react-icons/bi'
import { ProeuctsTable } from '../Tables/ProeuctsTable'
import DashBoardTable from '../Tables/DashBoardTable'
import { resentOrderdata, tableTitle } from '../Tables/tabledata'

const Orders = () => {
  const inputdata = {
    type: "text",
    placeholder: `Search by Customers Name`,
    name: "text",
    onchange: () => { },
}
const options = [
  {
    name:"Status",
    data:["Delevered","Process","pending","cancle"]
  },
  {
    name:"Order limits",
    data:["Delevered","Process","pending","cancle"]
  },
  {
    name:"Methond",
    data:["Card","Cash","Cradit"]
  },
]
  return (
    <div>
       <h1 className='section_heading'>Orders</h1>

       <div className='bg-base-200 p-3 sm:p-6 mb-6 gap-2 flex flex-col  sm:flex-row sm:flex justify-between items-center  rounded-md  '>
            <div className={`${options ? "  grid-cols-1 justify-between gap-2 grid xs:grid-cols-3 md:grid-cols-5 w-full items-center" : " w-auto"} `}>
                <InputField data={inputdata} />
                {
                    options && (
                        options.map((item, index) => (
                            <div className="form-control w-full ">
                                <select className="select select-bordered w-full">
                                    <option disabled selected>{item.name}</option>
                                    {
                                        item.data.map((data, index) => (
                                            <option key={index} value="someOption">{data}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        ))

                    )
                }
                <PrimaryButton icon={<BiDownload size={20}/>} name={"Download orders"} cls={"w-full sm:w-auto"} />
            </div>

 
        </div>

     {/* filters */}
     <div className='bg-base-200 p-3 sm:p-6 mb-6 gap-2 flex flex-col  sm:flex-row  sm:flex justify-between items-center  rounded-md  '>
            <div className={`${options ? "w-full  grid-cols-1 justify-between gap-2 grid sm:grid-cols-4 items-center" : " w-full "} `}>
                <InputField data={inputdata} />
                <InputField data={inputdata} />
                <Button  name={"Filter"} cls={"w-full sm:w-auto btn-success text-white "} />
                <Button name={"Reset"} cls={" bg-base-300 w-full sm:w-auto bg-base-200 btn-outline  "} />
                </div>

                {/* <div className='flex gap-2 w-full sm:w-auto flex-col sm:flex-row  justify-between items-center'> 

            </div> */}
                </div>
     
          <DashBoardTable tabletitle={tableTitle} tabledata={resentOrderdata} />
    </div>
  )
}

export default Orders