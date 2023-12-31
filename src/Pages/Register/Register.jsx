import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { createUser, logInWithGoogle } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const checkBox = e.target.checkBox.checked;
        setRegisterError('')

        if(password.length < 6) {
            setRegisterError('Password should be at least six character')
            return;
        }
        if(!/(?=.*[A-Z])(?=.*[!@#$%^&+=])/.test(password)){
            setRegisterError('Password is missing an uppercase letter or special character')
            return;
        }
        if(!checkBox) {
            setRegisterError('Please accept our terms and conditions to proceed')
            return;
        }


        createUser(email, password)
            .then(result => {

                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                new Swal("CarGo", "Account created successfully!");
                navigate(location?.state ? location.state : "/")
                
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })


        

    }


    const handleGoogleSignIng = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.log(error)
            })
    }

    const {t} = useTranslation();

    return (
        <section className="bg-gray-50 dark:bg-slate-400">
            <Helmet>
                <title>CarGo | Register</title>
            </Helmet>
            
            <div className="px-4 py-20 mx-auto max-w-7xl">
                <h1 className="mb-5 text-4xl font-bold text-gray-800 text-center dark:text-white">{t("registration")}</h1>

                <div
                    className="w-full p-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white dark:bg-slate-600 md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"
                >
                    <form onSubmit={handleRegister} className="pb-1 space-y-4">
                        
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">{t("name")}</span>
                            <input className="form-input w-full p-2 rounded-lg" type="text" name='name' placeholder={t("name")} required />
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">{t("photo")}</span>
                            <input className="form-input w-full p-2 rounded-lg" type="text" name='photo' placeholder={t("photo")} required />
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">{t("email")}</span>
                            <input className="form-input w-full p-2 rounded-lg" type="email" name='email' placeholder={t("email")} inputmode="email" required />
                        </label>
                        <label className="block relative">
                            <span className="block mb-1 text-md font-medium text-gray-700">{t("password")}</span>
                            <input className="form-input w-full p-2 rounded-lg" type={showPassword ? "text" : "password"} name='password' placeholder={t("password")} required />
                            <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 bottom-3'>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </label>
                        
                        <div className="flex flex-col items-start justify-between sm:items-center sm:flex-row">
                            <label className="flex items-center">
                                <input type="checkbox" name='checkBox' className="form-checkbox" />
                                <span className="block ml-2 text-md font-medium text-gray-700 cursor-pointer">{t("policy")}</span>
                            </label>
                            <input type="submit" className="w-full mt-5 outline-white px-4 py-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969] sm:w-auto sm:mt-0" value={t("reg")} />
                        </div>
                        {
                            registerError && <p className='text-red-500'>{registerError}</p> 
                            
                            
                        }
                    </form>

                </div>

                <div className='max-w-fit mx-auto my-4'>
                    <a onClick={handleGoogleSignIng} href="#" className="w-full py-3 btn btn-icon btn-google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                            <path
                                d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                            />
                        </svg>
                        {t("google")}
                    </a>
                </div>

                <p className="my-4 text-md font-medium text-center text-gray-700 sm:my-5">
                {t("aacc")}
                    <Link to='/login'><span className='ml-3 text-[#ff6969]'>{t("login")}</span></Link>
                </p>

            </div>
        </section>

    );
};

export default Register;