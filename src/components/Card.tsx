import { ImPriceTags } from "react-icons/im";
import React, { FC } from "react";

import { CustomInput } from "./CustomInput";
import Button from "./Button";

interface CardProps {
  title?: string;
  price?: number;
  label?: string;
  label1?: string;
  label2?: string;
  image?: string;
  onclick?: () => void;
  onclick1?: () => void;
  onclick2?: () => void;
  onClickDetail?: () => void;
  onSubmit?: any;
  desc?: string;
  seller?: string;
  inputform?: any
}

export const CardHome: FC<CardProps> = ({ title, price, label, image, onClickDetail, onclick }) => {
  return (
    <div className="card bg-white shadow-xl rounded-md ">
      <figure className="m-2 md:m-4 h-32 md:h-56 rounded-md" onClick={onClickDetail}>
        <img
          src={image}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-sm md:text-xl font-semibold text-black px-1 md:px-2" onClick={onClickDetail}>
          {title}
        </h2>
        <p className="flex justify-start text-black text-sm md:text-lg items-center" onClick={onClickDetail}>
          <span className="flex justify-start items-center px-2">
            <ImPriceTags color="black" />
          </span>
          $ {price}
        </p>
        <div className="card-actions w-full">
          <Button
            label={label}
            buttonSet="text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white "
            onClick={onclick}
          />
        </div>
      </div>
    </div>
  );
};

export const CardDetail: FC<CardProps> = ({
  title,
  price,
  label,
  image,
  desc,
  seller,
  onclick,
}) => {
  return (
    <div className="card lg:card-side bg-white shadow-xl">
      <figure className="p-8 w-1/4">
        <img src={image} className="rounded-md" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black font-bold capitalize">
          {title}
        </h2>
        <p className="text-black">{desc}</p>
        <div className="my-5">
          <p className="font-bold capitalize text-black">price: $ {price}</p>
          <p className="font-bold capitalize text-black">seller: {seller}</p>
        </div>

        <div className="card-actions justify-end">
          <Button
            label={label}
            buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full"
            onClick={onclick}
          />
        </div>
      </div>
    </div>
  );
};

export const CardCart: FC<CardProps> = ({
  title,
  price,
  label1,
  label2,
  image,
  onclick1,
  onclick2,
  onSubmit,
  inputform,
}) => {
  return (
    <div className="card card-side bg-white shadow-xl">
      <figure className="w-1/3 h-64 m-5 rounded-md ">
        <img src={image} />
      </figure>
      <div className="card-body w-2/3 pr-0">
        <h2 className="card-title text-black ">{title}</h2>
        <p className="flex justify-start text-black text-sm md:text-lg">
          <span className="flex justify-start px-2 py-1">
            <ImPriceTags color="black" />
          </span>
          $ {price}
        </p>
        <div className="flex justify-end items-end">
          <Button
            label={label1}
            buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full mb-1"
            onClick={onclick1}
          />
        </div>
      </div>
      <div className="card-body pr-8">
        {inputform}
        
      </div>
    </div>
  );
};

export const CardProfil: FC<CardProps> = ({
  title,
  price,
  label,
  image,
  onclick,
  onclick1,
  onclick2,
}) => {
  return (
    <div className="card card-side bg-white shadow-xl my-5">
      <figure className="w-1/3 h-64 m-5 rounded-md " onClick={onclick2}>
        <img src={image} />
      </figure>
      <div className="card-body w-2/3 pr-0">
        <h2 className="card-title text-black " onClick={onclick2}>{title}</h2>
        <p className="flex justify-start text-black text-sm md:text-lg" onClick={onclick2}>
          <span className="flex justify-start px-2 py-1" >
            <ImPriceTags color="black" />
          </span>
          $ {price}
        </p>
        <div className="flex flex-row px-40">
          <div className="flex justify-end items-end">
            <Button
              label={label}
              buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full mb-1"
              onClick={onclick}
            />
          </div>
          <div className="flex justify-end items-end">
            <label
              htmlFor="edit-modal"
              onClick={onclick1}
              className="btn w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white mb-1"
            >
              Edit
            </label>
          </div>
        </div>
      </div>      
    </div>
  );
};