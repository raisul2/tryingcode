import React from 'react'
import Controll from './Controll'
import ActionBar from './ActionBar'
import { ProeuctsTable } from '../Tables/ProeuctsTable'

const Products = () => {
  const option = [
    {
      name:"Category",
      data:["trying code","apple","banana","shirt","pant"]
    },
    {
      name:"Price",
      data:["low to high","high to low","12to234"]  
    },
  ]
  return (
    <div>
       <h1 className='section_heading'>Products</h1>
      <Controll mainbtnname={"Add Product"} />
      <ActionBar placeholder={"Search Proeuct"} options={option} />
      <ProeuctsTable/>
    </div>
  )
}  

export default Products