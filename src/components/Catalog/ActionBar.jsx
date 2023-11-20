import React from 'react'
import InputField from '../Form/InputField'
import Button, { PrimaryButton } from '../Button/Button'

const ActionBar = ({ placeholder, options }) => {
    const inputdata = {
        type: "text",
        placeholder: `${placeholder}`,
        name: "text",
        onchange: () => { },
    }

    return (
        <div className='bg-base-200 p-3 sm:p-6 mb-6 gap-2 flex flex-col  sm:flex-row sm:flex justify-between items-center  rounded-md  '>
            <div className={`${options ? "w-full  grid-cols-1 justify-between gap-2 grid sm:grid-cols-3 items-center" : " w-full sm:w-[40%]"} `}>
                <InputField data={inputdata} />
                {
                    options && (
                        options.map((item, index) => (
                            <div className="form-control w-full ">
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

            <div className='flex gap-2 w-full sm:w-auto flex-col sm:flex-row  justify-between items-center'>
                <Button name={"Filter"} cls={"w-full sm:w-auto btn-success text-white "} />
                <Button name={"Reset"} cls={" bg-base-300 w-full sm:w-auto bg-base-200 btn-outline  "} />
            </div>

        </div>
    )
}

export default ActionBar