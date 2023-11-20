import React from 'react'
import Controll from '../Catalog/Controll'
import CurrencyTable from '../Tables/CurrencyTable'

const Currenciess = () => {
  return (
    <div>
    <h2 className='section_heading'>Currencies</h2>
    <Controll mainbtnname={"Add Currency"} />
    <CurrencyTable/>
    </div>
  )
}

export default Currenciess