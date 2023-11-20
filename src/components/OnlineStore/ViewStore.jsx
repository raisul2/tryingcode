import React from 'react'
import { PrimaryButton } from '../Button/Button'
import {useNavigate} from 'react-router-dom'
const ViewStore = () => {
  const navigate = useNavigate()
  return (
    <div className='flex h-[90vh] flex-col gap-6 items-center justify-center'>
      <h1 className='text-3xl'>Sorry ! you don't have any store</h1>
      <PrimaryButton onClick={()=>navigate("/")} name={"Back to Home"} />
    </div>
  )
} 

export default ViewStore

   