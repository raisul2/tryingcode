import React from 'react'
import InputField from '../Form/InputField'
import Button, { PrimaryButton } from '../Button/Button'
import { BiPlus } from 'react-icons/bi'
import StaffTable from '../Tables/StaffTable'

const OurStaff = () => {
  const options = [
    {
      name:"Staff role",
      data:["admin","ceo","selsman","manager"]
    },
   
  ]
  const inputdata = {
    type: "text",
    placeholder: `Search by name/email/phn `,
    name: "text",
    onchange: () => { },
}
  return (
    <div className="">
       <h1 className='section_heading'>All Staff</h1>
    <div className='bg-base-200 p-3 sm:p-6 mb-6 gap-2 flex flex-col  sm:flex-row  sm:flex justify-between items-center  rounded-md  '>
    <div className={`${options ? "w-full  grid-cols-1 justify-between gap-2 grid sm:grid-cols-5 items-center" : " w-full "} `}>
        <InputField data={inputdata} />
        {
                    options && (
                        options.map((item, index) => (
                            <div className="form-control w-full ">
                                <select className=" select select-bordered w-full">
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
        <PrimaryButton icon={<BiPlus size={20}/>}  name={"Add Staff"} cls={"w-full sm:w-auto"} />
        <Button  name={"Filter"} cls={" bg-base-500 w-full btn-success text-white "} />
        <Button  name={"Reset"} cls={" bg-base-300 w-full sm:w-auto bg-base-200 btn-outline  "} />
        </div>
        </div>
        <StaffTable/>
    </div>
  )
}

export default OurStaff