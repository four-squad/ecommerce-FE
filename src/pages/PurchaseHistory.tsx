import { ImPriceTags } from 'react-icons/im'

import Layout from 'components/Layout'
import React from 'react'

const PurchaseHistory = () => {
    return (
        <Layout>
            <div className="px-20 pt-20 ">
                <div className="box-border w-full p-10 bg-[#E5E5E5] rounded-lg">
                    <h1 className="font-bold text-2xl text-black pb-5">Purchase History</h1>

                    <div className="card card-side bg-white shadow-xl">
                        <figure className="w-1/4 h-64 m-5 rounded-md ">
                            <img src="https://placeimg.com/200/280/arch" />
                        </figure>
                        <div className="card-body w-2/4 pr-4">
                            <h2 className="card-title text-black ">{"title"}</h2>
                            <p className="flex justify-start text-black text-sm md:text-lg">
                                <span className="flex justify-start px-2 py-1">
                                    <ImPriceTags color="black" />
                                </span>
                                $ {"price"}
                            </p>
                            <div className="my-5">
                                <p className="font-semibold capitalize text-black">Qty: 1</p>
                                <p className="font-semibold capitalize text-black">total price: $ 100</p>
                                <p className="font-semibold capitalize text-black">seller: Yudha</p>
                            </div>
                        </div>
                        <div className="card-body pr-8 pl-4">
                            <div className="">
                                <p className="pb-2 text-black font-bold capitalize">
                                    Payment: canceled
                                </p>
                                <p className="pb-2 text-black font-bold capitalize">
                                    Date: 24 Januari 2023
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default PurchaseHistory