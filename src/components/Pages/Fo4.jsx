import React from 'react'
import For0svg from '../../constants/For0svg'
import { PrimaryButton } from '../Button/Button'
import { useNavigate } from 'react-router-dom'
const Fo4 = () => {
  const navigate = useNavigate()
  return (
    <div className=' grid justify-center items-center  p-6 gap-6'>
    <div className="flex flex-col w-[30vw] items-center justify-center gap-4">
      <For0svg/>
       <p>Page is not Found</p>
    </div>
      
     <PrimaryButton onClick={()=>navigate("/")} name={"Back to Home"}/>
    </div>
  )
}

export default Fo4