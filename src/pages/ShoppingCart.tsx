import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { CustomInput } from "components/CustomInput";
import { CardCart } from "components/Card";
import Button from "components/Button";
import Layout from "components/Layout";
import { useNavigate } from "react-router-dom";

interface CartType {
  id: number;
  image: string;
  price: number;
  qty: number;
  title: string;
  total_price: number;
}

const ShoppingCart = () => {
  const [cart, setCart] = useState<CartType[]>([]);
  const [cookie, setCookie] = useCookies();
  const [totalQuantity, SetTotalQuantity] = useState<number>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  function fetchData() {
    axios
      .get("https://remotecareer.tech/carts", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        console.log(data);
        setCart(data);
        const totalQty = data.reduce((a: any, b: any) => {
          return a + b.qty;
        }, 0);
        const totalPrc = data.reduce((a: any, b: any) => {
          return a + b.total_price;
        }, 0);
        SetTotalQuantity(totalQty);
        setTotalPrice(totalPrc);
      })
      .catch((err) => {});
  }

  function handleChangeQty(
    e: React.ChangeEvent<HTMLInputElement>,
    data: CartType
  ) {
    const body = {
      qty: e.target.valueAsNumber,
      total_price: data.price * e.target.valueAsNumber,
    };
    axios
      .put(`https://remotecareer.tech/checkout/${data.id}`, body, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {})
      .catch((err) => {})
      .finally(() => fetchData());
  }

  function onDeleteCart(id: number) {
    axios
      .delete(`https://remotecareer.tech/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: "Are you sure want to delete this card?",

          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes",
          cancelButtonColor: "#d33",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {});
  }
  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full p-10 bg-[#E5E5E5] rounded-lg">
          <h1 className="font-bold text-2xl text-black pb-5">Shopping cart</h1>
          {cart.map((data) => {
            return (
              <CardCart
                key={data.id}
                title={data.title}
                image={data.image}
                price={data.price}
                label1="Remove"
                onclick1={() => console.log("remove")}
                inputform={
                  <>
                    <form>
                      <div className="">
                        <CustomInput
                          label="Qty"
                          type="number"
                          parentSet="flex"
                          labelSet="flex items-center text-black mr-5"
                          inputSet="w-24 border-[#e5e5e5] text-black"
                          defaultValue={data.qty}
                          // value={
                          //     if(e.target.value > "0"){

                          //     }
                          // }
                          onChange={(e) => {
                            if (e.target.value > "0") {
                              handleChangeQty(e, data);
                            }
                          }}
                        />
                        <p className="pb-24 text-black font-bold capitalize">
                          total: $ {data.total_price}
                        </p>
                      </div>
                    </form>
                    <Button
                      label="Remove"
                      buttonSet="w-48 mx-2 text-xs md:text-base normal-case bg-[#967E76]  hover:bg-[#756152] border-none text-white w-full"
                      onClick={() => onDeleteCart(data.id)}
                    />
                  </>
                }
              />
            );
          })}
          {cart.length !== 0 ? (
            <>
              <div className="flex justify-end w-full">
                <div className="bg-white w-1/3 h-full my-10 rounded-lg shadow-xl">
                  <div className="p-5">
                    <p className="text-black">
                      Total Quantity: {totalQuantity}
                    </p>
                    <p className="text-black">Shipping: FREE</p>
                    <p className="text-black font-bold">
                      Total Price: $ {totalPrice}
                    </p>
                  </div>
                  <div className="flex justify-end w-full">
                    <Button
                      label="Order"
                      buttonSet="w-1/4 m-5 bg-[#967E76] hover:bg-[#756152] text-white border-none"
                      onClick={() => navigate("/shipping")}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full justify-center items-center h-72">
                <p className="text-4xl font-semibold animate-pulse ">
                  Your cart is empty
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
