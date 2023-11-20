import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { updateOpen } from '../../sliceReducers/SidebarToggle';


export const NavItem = ({ item }) => {
    const { icon: Icon, sublink, label, link } = item
    const dispatch = useDispatch()

    return (
        <>
            {
                sublink ? (
                    <li className=' text-sm  font-semibold'>

                        <details >
                            <summary className='text-sm '><Icon size={20} />  <span>{label}</span> </summary>
                            <ul>
                                {
                                    sublink.map((sitem, index) => (

                                        <li onClick={() => dispatch(updateOpen(false))} className='font-normal capitalize' key={index}> <NavLink
                                            className={({ isActive }) =>
                                                [
                                                    isActive ? "activemore" : "",
                                                ].join(" ")}
                                            to={sitem.link}>{sitem.label}
                                        </NavLink>
                                        </li>
                                    ))
                                }
                                <li>

                                </li>
                            </ul>
                        </details>

                    </li>
                ) : (<NavLink className={({ isActive }) =>
                    [
                        isActive ? "activemore" : "",
                    ].join(" ")} onClick={() => dispatch(updateOpen(false))} to={link}> <li className='text-sm font-semibold  '> <summary>
                        <Icon size={20} /><span>{label}</span>  </summary>
                    </li></NavLink>)
            }
        </>
    )
}