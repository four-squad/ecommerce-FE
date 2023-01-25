import { ImPriceTags } from "react-icons/im";

import { TextArea } from "components/CustomInput";
import Button from "components/Button";
import Layout from "components/Layout";

const ShippingPage = () => {
  return (
    <Layout>
      <>
        <div className="px-20 text-2xl font-bold pt-10"> Shipping Address</div>
        <div className="px-20 ">
          <div className="box-border w-full max-h-fit py-10 bg-[#E5E5E5] rounded-lg px-10">
            <p>Address</p>
            <TextArea
              className="w-full overflow-y-auto h-36"
              style={{ resize: "none" }}
            />
          </div>
        </div>
        <div className="px-20 text-2xl font-bold pt-10">Review Order</div>
        <div className="px-20 pt-10">
          <div className="card card-side bg-white shadow-xl">
            <figure className="w-1/3 h-64 m-5 rounded-md ">
              <img src="https://placeimg.com/200/280/arch" />
            </figure>
            <div className="card-body w-2/3 pr-0 px-60">
              <h2 className="card-title text-black ">judul</h2>
              <p className="flex justify-start text-black text-sm md:text-lg">
                <span className="flex justify-start px-2 py-1">
                  <ImPriceTags color="black" />
                </span>
                $ 50.000
              </p>
              <p className="text-black">Total Quantity: 2</p>
              <p className="text-black">Shipping: FREE</p>
              <p className="text-black font-bold">Total Price: $ 100</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end pt-20 px-20">
          <Button
            label="PURCHASE"
            buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full mb-1"
          />
        </div>
      </>
    </Layout>
  );
};

export default ShippingPage;
