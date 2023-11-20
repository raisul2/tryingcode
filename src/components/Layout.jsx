import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header'
const Layout = () => {
  return (
    <main className='h-screen overflow-hidden flex'>
      <Sidebar />
      <div className="w-full ">
        <Header />
        <div className='p-2  lg:max-w-[1440px] h-[90vh] md:h-[90vh] overflow-auto m-auto sm:p-6 md:p-6'>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Layout