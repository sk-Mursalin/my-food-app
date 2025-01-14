import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBuilding, faEnvelope, faCartShopping, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarHide } from '../utils/sidebarSlice';

const Sidebar = () => {
    const cartLength = useSelector((store) => store.cart.items);
    const sidebarStatus = useSelector((store) => store.sidebar.isOpen);
    console.log(sidebarStatus);
    const dispatch = useDispatch();
    function sidebarClose(){
        dispatch(sidebarHide())
    }
   
    if (sidebarStatus) return (
        <div className="w-60 bg-white h-screen fixed right-0 top-0 z-10 pl-2 transition-all">
            <div className='mt-2'>
                <FontAwesomeIcon icon={faXmark} className='text-lg cursor-pointer hover:opacity-60 transition-all' onClick={sidebarClose}  />
            </div>
            <div className='mt-4 flex flex-col gap-6'>
                <div className='flex items-center gap-4 cursor-pointer  py-1  hover:bg-slate-300 rounded-sm transition-all'>
                    <FontAwesomeIcon icon={faHouse} className='text-slate-500' />
                    <p className="font-semibold  hover:text-slate-700 cursor-pointer transition-all"><Link to={"/"}>Home</Link></p>
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-1 hover:bg-slate-300 rounded-sm transition-all'>
                    <FontAwesomeIcon icon={faBuilding} className='text-slate-500 ml-1' />
                    <p className="font-semibold  hover:text-slate-700 cursor-pointer transition-all"><Link to={"/about"}>About</Link></p>
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-1  hover:bg-slate-300 rounded-sm transition-all'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-slate-500 ml-1' />
                    <p className="font-semibold  hover:text-slate-700 cursor-pointer transition-all"><Link to={"/contact"}>Contact</Link></p>
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-1  hover:bg-slate-300 rounded-sm transition-all'>
                    <FontAwesomeIcon icon={faCartShopping} className='text-slate-500 ml-1' />
                    <p className="font-semibold  hover:text-slate-700 cursor-pointer transition-all"><Link to={"/cart"}>Cart({cartLength.length})</Link></p>
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-1  hover:bg-slate-300 rounded-sm transition-all'>
                    <FontAwesomeIcon icon={faUser} className='text-slate-500 ml-1' />
                    <p className="font-semibold  hover:text-slate-700 cursor-pointer transition-all"><Link to={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;