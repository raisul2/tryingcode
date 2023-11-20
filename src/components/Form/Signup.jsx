import React from 'react'
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import InputField from './InputField'
const Signup = () => {

  const inputdata = [
    {
      type: "text",
      placeholder: "exmpe name",
      name: "name",
    
      leftlabel: "Enter your name",
      onchange: () => { },
    },
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
        <div className=" p-4 sm:p-6 md:p-12 flex flex-col items-start justify-center gap-6 ">
          <h2 className='text-2xl text-black font-semibold'>Create account</h2>
          <from className="w-full flex flex-col gap-2  justify-center ">
          {
              inputdata && inputdata.map((item, index) => (
                <InputField  cls={"bg-white"} data={item} key={index} />
              ))
            }
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="select bg-white select-bordered w-full">
                <option disabled selected>Adim</option>
                <option value="someOption">Adim</option>
                <option value="otherOption">CEO</option>
                <option value="otherOption">Manager</option>
                <option value="otherOption">Accountent</option>
                <option value="otherOption">Driver</option>
                <option value="otherOption">Security Guard</option>
                <option value="otherOption">Delevary Person</option>
              </select> 
            </div>
            <Button name="Signup" cls={"border-none mt-2  bg-violet-800 hover:bg-violet-900 text-white"} />
            <hr className='border-gray-200 my-6 w-full' />
            <Button icon={<BiLogoFacebook size={20} />} name="Signup with facebook" cls={"bg-blue-500 border-none  hover:bg-blue-600 text-white"} />
            <Button icon={<BiLogoGoogle size={20} />} name="Signup with google" cls={"bg-red-500  hover:bg-red-600 border-none  text-white"} />
          </from>

          <div className=" flex flex-col gap-2">
            <p className=' text-zinc-900  '>Already have an account? <Link to="/login" className='hover:underline cursor-pointer'>Login</Link>  </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup