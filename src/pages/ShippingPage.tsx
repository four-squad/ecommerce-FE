import { ImPriceTags } from "react-icons/im";

import { TextArea } from "components/CustomInput";
import Button from "components/Button";
import Layout from "components/Layout";

const ShippingPage = () => {
  return (
    <Layout>
      <>
        <div className="px-20 text-2xl font-bold pt-10 text-black my-5">
          {" "}
          Shipping Address
        </div>
        <div className="px-20 ">
          <div className="box-border w-full max-h-fit py-10 bg-[#E5E5E5] rounded-lg px-10">
            <p className="text-black mb-3">Address</p>
            <TextArea
              className="w-full overflow-y-auto h-36 bg-white text-black"
              style={{ resize: "none" }}
            />
          </div>
        </div>
        <div className="px-20 text-2xl font-bold py-5 text-black">
          Review Order
        </div>
        <div className="mx-20 py-5 border-2 border-black rounded-lg flex justify-center">
          <div className="card card-side w-3/4 bg-white shadow-xl my-5 px-5">
            <figure className="w-1/3 h-64 m-5 rounded-md ">
              <img src="https://placeimg.com/200/280/arch" />
            </figure>
            <div className="card-body w-2/3 pr-0 ">
              <h2 className="card-title text-black ">judul</h2>
              <div className="my-5">
                <p className="flex justify-start text-black text-sm md:text-lg">
                  <span className="flex justify-start px-2 py-1">
                    <ImPriceTags color="black" />
                  </span>
                  $ 50
                </p>
                <p className="text-black px-2 text-sm md:text-lg my-2">
                  Qty: 2
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-20 my-5 py-5 border-2 border-black rounded-lg flex justify-end ">
          <div className="mx-5 md:mx-36">
            <p className="text-black my-3">Total Quantity: {"totalQuantity"}</p>
            <p className="text-black my-3">Shipping: FREE</p>
            <p className="text-black my-3 font-bold">Total Price: $ {"totalPrice"}</p>
          </div>
        </div>
        <div className="flex justify-end items-end py-10 px-20">
          <Button
            label="PURCHASE"
            buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full mb-1"
            // onClick={}
          />
        </div>
      </>
    </Layout>
  );
};

export default ShippingPage;
