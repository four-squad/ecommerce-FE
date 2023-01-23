import { Link } from 'react-router-dom'
import { FaShoppingCart, FaStore } from 'react-icons/fa'
import React from 'react'

import logo from 'assets/Happy-Shop-square.png'

const Navbar = () => {
    return (
        <div className="navbar h-10 bg-[#756152] shadow-xl sticky top-0 z-50">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost ">
                    <img src={logo} className='w-9' />
                    <p className='mx-2 normal-case text-white'>Happy Shop</p>
                </Link>
            </div>
            <div className="navbar-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered input-md bg-[#D9D9D9] w-96 text-black"
                />
            </div>
            <div className="navbar-end mr-10">
                <div className='flex justify-between'>
                    <p className='text-white'>Hello, Yudha</p>
                </div>
                <div className='flex justify-between mx-2'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <Link to={'/mycart'}>
                            <FaShoppingCart color='white' size={22} />
                        </Link>
                    </label>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                            {/* <img
                                src={
                                    cookie.token ? (
                                        photo ? photo : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    ) : (
                                        "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                                    )

                                }
                                className="w-[40px] h-[40px] rounded-full"
                            /> */}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
                    >
                        <li> Login
                            {/* {
                                cookie.token ? (
                                    <>
                                        <div onClick={() => logOutHandler()}>
                                            <p>Log Out</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link to={'/login'}>
                                            <p>Log in</p> </Link>
                                    </>
                                )
                            } */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar