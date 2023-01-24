import Button from 'components/Button'
import { CardCart } from 'components/Card'
import Layout from 'components/Layout'
import React from 'react'

const ShoppingCart = () => {
    return (
        <Layout>
            <div className="px-20 pt-20 ">
                <div className="box-border w-full p-10 bg-[#E5E5E5] rounded-lg">
                    <h1 className="font-bold text-2xl text-black pb-5">Shopping cart</h1>
                    <CardCart
                        title='Jual Celana Panjang'
                        price={50}
                        label1="Remove"
                        label2='Checkout'
                        onclick1={() => console.log("remove")}
                        onclick2={() => console.log("checkout")}
                    />

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