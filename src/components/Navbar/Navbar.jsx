import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/logo.png"
import { AuthContext } from '../Provider/AuthProvider';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const { i18n } = useTranslation();

    const change = (lng) => {
        i18n.changeLanguage(lng);
        console.log(lng)
    };
    
    const {t} = useTranslation();

    const navLinks = <>
        <li><NavLink to="/">{t("home")}</NavLink></li>
        <li><NavLink to="/login">{t("login")}</NavLink></li>
        <li><NavLink to="/addproduct">{t("addProduct")}</NavLink></li>
        <li><NavLink to="/mycart">{t("cart")}</NavLink></li>
        <li><NavLink to="/message">{t("chat")}</NavLink></li>
        {/* <li><NavLink to="/register">Register</NavLink></li> */}
    </>


    


    return (
        <div className='dark:bg-slate-500 bg-base-200 dark:text-white p-4'>
            <div className="navbar flex justify-between lg:px-24">
                <div className="navbar-start w-fit gap-0 md:justify-start">
                    <div className="dropdown p-1">
                        <label tabIndex={0} className="text-[#ff6969] btn-ghost hover:bg-[#ff6969] hover:text-white btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:text-black rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex w-fit items-center gap-2 '>
                        <img className='w-8 md:w-10' src={logo} alt="" />
                        <h1 className='text-lg md:text-4xl font-bold'>CarGo</h1>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-md font-bold">
                        {navLinks}
                    </ul>
                </div>

                {
                    user ? <div className="navbar-end w-fit">
                        <img className='rounded-full w-[30px] mr-1 md:mr-3' src={user.photoURL} alt="" />
                        <div className='w-fit'><p className='text-xs mr-1 md:mr-4'>{user.displayName.slice(0, 6)}..</p></div>

                        <button onClick={handleSignOut} className='outline-white text-xs md:font-normal px-2 py-1 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Log out</button>
                    </div>
                        :
                        <div className="navbar-end">
                            <Link to='/login'><button className='outline-white px-2 py-1 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]'>Log in</button></Link>
                        </div>
                }
                

                <div>
                    <button onClick={() => change('en')} className='bg-base-300 p-1 rounded-l-lg'>Eng</button>
                    <button onClick={() => change('es')} className='bg-base-100  p-1 rounded-r-lg'>Esp</button>
                </div>

            </div>

        </div>
    );
};

export default Navbar;