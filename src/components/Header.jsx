import React, { useEffect, useState } from 'react'
import { BiSun, BiMoon, BiSolidCart, BiMenu, BiBell, BiCross } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../sliceReducers/SidebarToggle'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
const Header = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {

      setTheme("light")
    }
  }

  useEffect(() => {

    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)


  }, [theme])



  const dispatch = useDispatch()
  // const toggle = useSelector((s) => s.sidebar.open)
  const navigate = useNavigate()

  return (
    <div className=' min-h-[64px] max-w-[1440px]   m-auto  '>
      <div className="navbar bg-base-200 shadow sm:px-3 ">
        <div className="flex-1">
          <button onClick={() => dispatch(toggleMenu())} className="btn btn-square btn-ghost">
            <BiMenu size={24} />
          </button>
        </div>
        <div className="flex-none">
          <label className="swap swap-rotate btn btn-ghost btn-circle">

            {/* this hidden checkbox controls the state */}
            <input onChange={handleTheme} type="checkbox" className="theme-controller"
              checked={theme === "light" ? false : true}
              value="synthwave" />

            {/* sun icon */}
            <BiSun size={24} className="swap-on " />

            {/* moon icon */}
            <BiMoon size={24} className="swap-off fill-current" />

          </label>

          <div className="dropdown dropdown-end">

            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">

                <BiBell size={24} />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>

            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-[300px] bg-base-100 shadow overflow-auto">
              {
                [1, 2, 3, 4, 5].map((item, index) => (
                  <NotivationsCard key={index} />
                ))
              }
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://res.cloudinary.com/raiusl/image/upload/v1649700629/posts/fjf7wwppajbpi9xvqbpv.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => navigate("/")} className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a onClick={() => navigate("/settings")}>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Header



const NotivationsCard = () => {
  return (
    <div className="flex justify-center gap-3 items-center p-3">
      <div className="rounded-full w-10 h-10 overflow-hidden">
        <img src="https://res.cloudinary.com/raiusl/image/upload/v1649700629/posts/fjf7wwppajbpi9xvqbpv.jpg" alt="" />
      </div>
      <div className="flex items-start gap-2 flex-col justify-center">
        <h3 className='text-sm'>Yellow Sweet caort Stock ... </h3>
        <div className="flex gap-2 justify-center items-center">
          <div className="badge-accent badge text-xs">Stock Out</div>
          <span className='text-xs'>Dec 12 01-2:40PM</span>
        </div>
      </div>
      <span className='text-base-content cursor-pointer hover:text-red-500 '><AiOutlineClose size={18} /></span>
    </div>
  )
}