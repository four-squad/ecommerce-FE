import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import React from 'react'

import logo from 'assets/Happy-Shop-square.png'

const Navbar = () => {
    const [cookie, setCookie, removeCookie] = useCookies()
    const navigate = useNavigate()

    function logOutHandler() {
        Swal.fire({
            title: "Are you sure want to logout?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                removeCookie("token");
                removeCookie("avatar");
                removeCookie("name");
                navigate("/");
                navigate(0);
            }
        });
    }
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
                    {
                        cookie.name ? (
                            <>
                                <div onClick={() => logOutHandler()}>
                                    <p className='text-white font-semibold'>Hi, {cookie.name}</p>
                                </div>
                            </>
                        ) : (
                            null
                        )
                    }
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
                            <img
                                src={
                                    cookie.token ? (
                                        `${cookie.avatar}` ? `${cookie.avatar}` : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    ) : (
                                        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    )

                                }
                                className="w-[40px] h-[40px] rounded-full"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-xl bg-white text-black rounded-box w-52"
                    >
                        <li>
                            {
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
                            }
                        </li>

                        {
                            cookie.token ? (
                                <>
                                    <li>
                                        <Link to={'/purchase'}>
                                            <p>Purchase History</p> </Link>
                                    </li>
                                    <li>
                                        <Link to={'/sale'}>
                                            <p>Sale History</p> </Link>
                                    </li>


                                </>
                            ) : (
                                null
                            )
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar