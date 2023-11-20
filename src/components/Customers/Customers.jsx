import React from 'react'
import Button from '../Button/Button'
import { BiExport, BiImport } from 'react-icons/bi'
import ActionBar from '../Catalog/ActionBar'
import CustomersTable from '../Tables/CustomersTable'

const Customers = () => {


  return (
    <div>
       <h1 className='section_heading'>Customers</h1>

    <div>
        <div className='bg-base-200 p-3 sm:p-6 mb-6  flex gap-2 justify-between rounded-md items-center flex-wrap '>
            <div className=' grid grid-cols-2  w-full sm:w-auto sm:flex gap-2  justify-center items-center'>

                <Button icon={<BiExport size={18} />} name={"Export"} cls={"btn-md btn-outline"} />
                <Button icon={<BiImport size={18} />} name={"Imoprt"} cls={"btn-outline "} />
            </div>
        </div>
    </div>
    

    <ActionBar placeholder={"Search customers"} />
    <CustomersTable/>
    </div>
  )
}

export default Customers