import { ImPriceTags } from 'react-icons/im'
import React, { FC } from 'react'

import Button from './Button'
import { CustomInput } from './CustomInput'

interface CardProps {
    title?: string
    price?: number
    label?: string
    onclick?: () => void
    onSubmit?: any
    desc?: string
    seller?: string
}

export const CardHome: FC<CardProps> = ({ title, price, label, onclick }) => {
    return (
        <div className="card bg-white shadow-xl rounded-md ">
            <figure className="m-2 md:m-4 h-32 md:h-56 rounded-md">
                <img src="https://placeimg.com/400/225/arch" className="w-full h-full" />
            </figure>
            <div className="card-body p-2">
                <h2 className="card-title text-sm md:text-xl font-semibold text-black px-1 md:px-2">{title}</h2>
                <p className='flex justify-start text-black text-sm md:text-lg'>
                    <span className='flex justify-start items-center px-2'>
                        <ImPriceTags color='black' />
                    </span>
                    $ {price}
                </p>
                <div className="card-actions w-full">
                    <Button label={label} buttonSet='text-xs md:text-base normal-case bg-[#0D99FF] hover:bg-[#0d86ff] border-none text-white '
                        onClick={onclick} />
                </div>
            </div>
        </div>
    )
}

export const CardDetail: FC<CardProps> = ({ title, price, label, desc, seller, onclick }) => {
    return (
        <div className="card lg:card-side bg-white shadow-xl">
            <figure className='p-8'>
                <img src="https://placeimg.com/400/400/arch" className='rounded-md' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black font-bold capitalize">title{title}</h2>
                <p className='text-black'>desc{desc}</p>
                <div className='my-5'>
                    <p className='font-bold capitalize text-black'>price: $ {price}</p>
                    <p className='font-bold capitalize text-black'>seller: {seller}</p>
                </div>

                <div className="card-actions justify-end">
                    <Button label={label} buttonSet='w-48 mx-2 text-xs md:text-base normal-case bg-[#0D99FF] hover:bg-[#0d86ff] border-none text-white w-full'
                        onClick={onclick} />
                </div>
            </div>
        </div>
    )
}

export const CardCart: FC<CardProps> = ({ title, price, label, onclick, onSubmit }) => {
    return (
        <div className="card card-side bg-white shadow-xl">
            <figure className='w-1/3 h-64 m-5 rounded-md '>
                <img src="https://placeimg.com/200/280/arch" />
            </figure>
            <div className="card-body w-2/3 pr-0">
                <h2 className="card-title text-black ">{title}</h2>
                <p className='flex justify-start text-black text-sm md:text-lg'>
                    <span className='flex justify-start px-2 py-1'>
                        <ImPriceTags color='black' />
                    </span>
                    $ {price}
                </p>
                <div className='flex justify-end items-end'>
                    <Button label={label} buttonSet='w-48 mx-2 text-xs md:text-base normal-case bg-[#0D99FF] hover:bg-[#0d86ff] border-none text-white w-full mb-1'
                        onClick={onclick} />
                </div>

            </div>
            <div className="card-body pr-8">
                <form onSubmit={onSubmit} >
                    <div className=''>
                        <CustomInput label='Qty'
                            type='number'
                            parentSet='flex'
                            labelSet='flex items-center text-black mr-5'
                            inputSet='w-24 border-[#e5e5e5] text-black'
                        />
                        <p className='pb-24 text-black font-bold capitalize'>total: $ {price}</p>
                    </div>
                    <Button label={label} buttonSet='w-48 mx-2 text-xs md:text-base normal-case bg-[#0D99FF] hover:bg-[#0d86ff] border-none text-white w-full'
                        onClick={onclick} />
                </form>
            </div>
        </div>
    )
}
