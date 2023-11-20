import React from 'react'
import Controll from './Controll'
import ActionBar from './ActionBar'
import CouponsTable from '../Tables/CouponsTable'

const Coupons = () => {
  return (
    <div>
       <h1 className='section_heading'>Coupons</h1>
      <Controll mainbtnname={"Add Coupons"} />
      <ActionBar placeholder={"Search by coupon code/name"} />
      <CouponsTable/>
    </div>
  )
}

export default Coupons