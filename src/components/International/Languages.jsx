import React from 'react'
import Controll from '../Catalog/Controll'
import LanguageTable from '../Tables/LanguageTable'

const Languages = () => {
  return (
    <div>
    <h2 className='section_heading'>Languages</h2>
      <Controll mainbtnname={"Add Language"} />
      <LanguageTable/>
    </div>
  )
}

export default Languages