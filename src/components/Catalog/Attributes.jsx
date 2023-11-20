import React from 'react'
import Controll from './Controll'
import ActionBar from './ActionBar'
import { AttributeTable } from '../Tables/AttributeTable'

const Attributes = () => {
  return (
    <div>
       <h1 className='section_heading'>Attributes</h1>
      <Controll mainbtnname={"Add Attribute"} />
      <ActionBar placeholder={"Search by attribute name"}/>
      <AttributeTable/>
    </div>
  )
}

export default Attributes