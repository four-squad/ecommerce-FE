import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { CardHome } from "components/Card";
import Layout from "components/Layout";

import { ProductType } from "utils/type";

const index = () => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  function fetchData() {
    axios
      .get("https://remotecareer.tech/products")
      .then((res) => {
        const { data } = res.data;
        setProduct(data);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    fetchData();
  }, []);

  function addToCart(id: number) {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .post(`https://remotecareer.tech/carts/${id}`, config)
      .then((res) => {
        console.log("add to cart", res);
        const { data } = res.data;
        setProduct(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function onClickDetail(id: number) {
    navigate(`/detail/${id}`);
  }
  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full p-10 bg-[#E5E5E5] rounded-lg">
          <h1 className="font-bold text-2xl text-black pb-5">New Product!</h1>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3 m-3">
            {product.map((data) => {
              return (
                <CardHome
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  image={data.image}
                  label={"add to cart"}
                  onClickDetail={() => onClickDetail(data.id)}
                  onclick={() => addToCart(data.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
