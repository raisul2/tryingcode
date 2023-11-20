import React from 'react'
import { PrimaryButton } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const StoreCustomization = () => {
  const navigate = useNavigate()

  return (
    <div className='flex h-[90vh] items-center flex-col gap-6 justify-center'>
      <h1 className='text-3xl'>Sorry ! you don't have any store to Customize</h1>
      <PrimaryButton onClick={() => navigate("/")} name={"Back to Home"} />

    </div>
  )
}
 
export default StoreCustomization