import react, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from "axios";

import { CardDetail } from "components/Card";
import Layout from "components/Layout";

interface DetailType {
  title?: string
  image?: string
  price?: number
  description?: string
  seller?: string
}
const Detail = () => {
  const [detail, setDetail] = useState<DetailType[]>([])
  const [cookie, setCookies] = useCookies()
  const { id } = useParams()

  function fetchDetail() {
    axios.get(`https://remotecareer.tech/products/${id}`)
      .then((res) => {
        const { data } = res.data
        setDetail(data)
      })
      .catch((err) => {
      })
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full max-h-fit py-10 bg-[#E5E5E5] rounded-lg">
          <div className="px-10">
            {
              detail.map((data) => (
                <CardDetail
                  key={data.title}
                  label="add to cart"
                  image={data.image}
                  title={data.title}
                  desc={data.description}
                  price={data.price}
                  seller={data.seller}
                />
              )
              )
            }

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
