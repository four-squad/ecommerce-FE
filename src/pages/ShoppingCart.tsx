import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { CustomInput } from 'components/CustomInput'
import { CardCart } from 'components/Card'
import Button from 'components/Button'
import Layout from 'components/Layout'

interface CartType {
    id: number,
    image: string,
    price: number,
    qty: number
    title: string,
    total_price: number
}

const ShoppingCart = () => {
    const [cart, setCart] = useState<CartType[]>([])
    const [cookie, setCookie] = useCookies()

    function fetchData() {
        axios
            .get("https://remotecareer.tech/carts", {
                headers: {
                    Authorization: `Bearer ${cookie.token}`,
                },
            })
            .then((res) => {
                console.log("yey: ", res.data)
                const { data } = res.data
                setCart(data)
            })
            .catch((err) => {
                console.log("ney: ", err)
            });
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            <div className="px-20 pt-20 ">
                <div className="box-border w-full p-10 bg-[#E5E5E5] rounded-lg">
                    <h1 className="font-bold text-2xl text-black pb-5">Shopping cart</h1>
                    {
                        cart.map((data) => {
                            return (
                                <CardCart
                                    key={data.id}
                                    title={data.title}
                                    image={data.image}
                                    price={data.price}
                                    label1="Remove"
                                    onclick1={() => console.log("remove")}
                                    inputform={
                                        <form>
                                            <div className="">
                                                <CustomInput
                                                    label="Qty"
                                                    type="number"
                                                    parentSet="flex"
                                                    labelSet="flex items-center text-black mr-5"
                                                    inputSet="w-24 border-[#e5e5e5] text-black"
                                                />
                                                <p className="pb-24 text-black font-bold capitalize">
                                                    total: $ {"price"}
                                                </p>
                                            </div>
                                            <Button
                                                label="Checkout"
                                                buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full"
                                                onClick={()=>console.log("haha")}
                                            />
                                        </form>
                                    }
                                />
                            )
                        })
                    }

                    <div className='flex justify-end w-full'>
                        <div className='bg-white w-1/3 h-full my-10 rounded-lg shadow-xl'>
                            <div className='p-5'>
                                <p className='text-black'>Total Quantity: 2</p>
                                <p className='text-black'>Shipping: FREE</p>
                                <p className='text-black font-bold'>Total Price: $ 100</p>
                            </div>
                            <div className='flex justify-end w-full'>
                               <Button label='Order' buttonSet='w-1/4 m-5 bg-[#967E76] hover:bg-[#756152] text-white border-none'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCart