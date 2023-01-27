import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import { CardDetail } from "components/Card";
import Layout from "components/Layout";

interface DetailType {
  title?: string;
  image?: string;
  price?: number;
  description?: string;
  seller?: string;
}
const Detail = () => {
  const [detail, setDetail] = useState<DetailType[]>([]);
  const [cookie, setCookies] = useCookies();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  function fetchDetail() {
    axios
      .get(`https://remotecareer.tech/products/${id}`)
      .then((res) => {
        const { data } = res.data;
        setDetail(data);
      })
      .catch((err) => {});
  }

  function addToCart(id: any) {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .post(`https://remotecareer.tech/carts/${id}`, {}, config)
      .then((res) => {
        const { message } = res.data;
        Swal.fire({
          position: "center",
          icon: "success",
          text: message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {});
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full max-h-fit py-10 bg-[#E5E5E5] rounded-lg">
          <div className="px-10">
            {detail.map((data) => (
              <CardDetail
                key={data.title}
                label="add to cart"
                image={data.image}
                title={data.title}
                desc={data.description}
                price={data.price}
                seller={data.seller}
                onclick={() => addToCart(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
