import { ImPriceTags } from "react-icons/im";
import React, { FC } from "react";

import Button from "./Button";
import { CustomInput } from "./CustomInput";

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
        <p className="flex justify-start text-black text-sm md:text-lg" onClick={onClickDetail}>
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
        <form onSubmit={onSubmit}>
          <div className="">
            <CustomInput
              label="Qty"
              type="number"
              parentSet="flex"
              labelSet="flex items-center text-black mr-5"
              inputSet="w-24 border-[#e5e5e5] text-black"
            />
            <p className="pb-24 text-black font-bold capitalize">
              total: $ {price}
            </p>
          </div>
          <Button
            label={label2}
            buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full"
            onClick={onclick2}
          />
        </form>
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
  onSubmit,
}) => {
  return (
    <div className="card card-side bg-white shadow-xl my-5">
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
              className="btn w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white mb-1"
            >
              Edit
            </label>
          </div>
        </div>
      </div>
      {/* modal edit product */}
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#E5E5E5]">
          <h3 className="font-bold text-lg">Update Product</h3>
          <div className="flex flex-row gap-20 pb-3">
            <p>Name</p>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs bg-white text-black"
            />
          </div>
          <div className="flex flex-row gap-20 pb-3">
            <p>Email</p>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs bg-white text-black"
            />
          </div>
          <div className="flex flex-row gap-16 pb-3">
            <p>Alamat</p>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs bg-white text-black"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <label
              htmlFor="edit-photo"
              style={{ cursor: "pointer" }}
              className={"p-2 bg-slate-300 mb-4 font-bold"}
            >
              Upload Image
            </label>
            <input type="file" accept="image/*" id="edit-photo" />
            <img src="" alt="" width={200} />
          </div>
          <div className="modal-action">
            <button className="btn bg-[#967E76] hover:bg-[#756152]">
              Update
            </button>
            <label
              htmlFor="edit-modal"
              className="btn bg-[#967E76] hover:bg-[#756152]"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};