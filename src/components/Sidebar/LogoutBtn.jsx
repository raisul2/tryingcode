import { BiLogOut } from "react-icons/bi"
export  const LogoutBtn = () => {
    return (
        <button className="btn bg-violet-800 hover:bg-violet-900 text-white  m-6">
            <BiLogOut size={16} />
            LogOut
        </button>
    )
}
