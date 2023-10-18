import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/logo.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
  
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>
        {/* <li><NavLink to="/register">Register</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-base-100 my-10 flex justify-between lg:px-24">
            <div className="navbar-start w-fit md:justify-start">
                <div className="dropdown p-1">
                    <label tabIndex={0} className="text-[#ff6969] btn-ghost hover:bg-[#ff6969] hover:text-white btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <div className='flex w-fit items-center gap-2 '>
                    <img className='w-10' src={logo} alt="" />
                    <h1 className='text-4xl font-bold'>CarGo</h1>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-md font-bold">
                    {navLinks}
                </ul>
            </div>

            {
                user ? <div className="navbar-end w-fit">
                    <img className='rounded-full w-[30px] mr-3' src={user.photoURL} alt="" />
                    <p className='text-xs mr-4'>{user.displayName}</p>
                    
                    <button onClick={handleSignOut} className='outline-white px-2 py-1 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Log out</button>
                </div>
                    :
                    <div className="navbar-end">
                        <Link to='/login'><button className='outline-white px-2 py-1 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Log in</button></Link>
                    </div>
            }

        </div>
    );
};

export default Navbar;