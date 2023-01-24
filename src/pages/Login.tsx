import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

import login from 'assets/bg-login.jpg'

const Login = () => {
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [cookie, setCookie] = useCookies()
    const navigate = useNavigate()

    function authLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        axios.post('https://remotecareer.tech/login', {
            email: email,
            password: password
        })
        .then((res) => {
            console.log("berhasil", res.data)
            const {message, token} = res.data
            const {avatar, name} = res.data.data
            Swal.fire({
                position: "center",
                icon: "success",
                text: message,
                showConfirmButton: false,
                timer: 1500,
            })
            setCookie("token", token)
            setCookie("name", name)
            setCookie("avatar", avatar)
            navigate('/')
        })
        .catch((err) => {
            console.log("gagal", err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong email or password",
            });
        })
    }

    return (
        <div className='flex w-full h-screen bg-white'>
            <div className="flex flex-col w-full h-screen">
                <div className='w-full h-full bg-no-repeat bg-cover opacity-80' style={{ backgroundImage: `url( ${login})` }}>
                </div>
            </div>
            <div className="relative flex flex-col w-full h-screen bg-dark-alta">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex flex-col justify-center w-[400px]">
                        <form
                            className="w-full mx-auto rounded-2xl bg-[#e5e5e5] p-8 px-8 h-[480px] shadow-2xl"
                        onSubmit={(e) => authLogin(e)}
                        >
                            <h2 className="text-4xl text-black text-center font-bold">Login</h2>
                            <div className='my-5 h-6'>
                                <p className="text-center text-black my-5">Selling only the best things online </p>
                            </div>

                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-black">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black"
                                    type="email"
                                    placeholder="yourname@email.com"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="font-semibold text-black">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="p-2 rounded-lg bg-white mt-2 border-2 focus:outline-none text-black"
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-[90%] text-lg flex m-auto my-5 py-2 capitalize bg-[#967E76]  hover:bg-[#756152] border-none shadow-lg text-white font-semibold rounded-lg btn"
                            >
                                login
                            </button>
                            <div className="flex justify-center underline my-3">
                                <Link to="/register">
                                    <p className="text-[#967E76] hover:text-[#756152] font-semibold text-sm">Sign Up</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login