import React from 'react'
import Controll from './Controll'
import ActionBar from './ActionBar'
import TableSystemwrapper from '../Tables/TableSystemwrapper'
import Categorytable from '../Tables/Categorytable'

const Categories = () => {
  return (
    <div>
       <h1 className='section_heading'>Category</h1>

    <Controll mainbtnname={"Add Category"} />
    <ActionBar placeholder={"Search by Category name"}/>
     <Categorytable/>
    </div> 
  )
}

export default Categories




