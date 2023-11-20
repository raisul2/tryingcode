import React from 'react'
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import InputField from './InputField'
import Button from '../Button/Button'
const Login = () => {

  const inputdata = [
    {
      type: "email",
      placeholder: "exmple@gamil.com",
      name: "email",
    
      leftlabel: "Enter your mail",
      onchange: () => { },
    },
    {
      type: "password",
      placeholder: "234j2l4",
      name: "password",
      leftlabel: "Enter your password",
      
      onchange: () => { },
    },
  ]



  return (
    <div className="auth_section bg-gray-100 ">
      <div className="auth_wrapper bg-white ">
        <div>
          <img src="logimg.jpeg" className='object-cover sm:h-full   w-full h-40' alt="" />
        </div>
        <div className="p-4 sm:p-6 md:p-12 flex flex-col justify-center gap-6 ">
          <h2 className='text-2xl text-black font-semibold'>Login</h2>
          <form className="w-full flex flex-col gap-2 justify-center ">
            {
              inputdata && inputdata.map((item, index) => (
                <InputField cls={"bg-white"} data={item} key={index} />
              ))
            }

            <Button name="Login" cls={" mt-2 border-none bg-violet-800 hover:bg-violet-900 text-white"} />
            <hr className='border-gray-200 my-6 w-full' />
            <Button icon={<BiLogoFacebook size={20} />} name="Login with facebook" cls={"bg-blue-500 border-none hover:bg-blue-600 text-white"} />
            <Button icon={<BiLogoGoogle size={20} />} name="Login with google" cls={"bg-red-500 border-none  hover:bg-red-600  text-white"} />
          </form>
          <div className=" flex flex-col gap-2">
            <p className=' text-zinc-900 cursor-pointer hover:underline'>Forgot your password</p>
            <p className=' text-zinc-900 cursor-pointer hover:underline'><Link to="/signup">Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login