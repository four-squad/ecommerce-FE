import { CardDetail } from "components/Card";
import Layout from "components/Layout";

const Detail = () => {
  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full max-h-fit py-10 bg-[#E5E5E5] rounded-lg">
          <div className="px-10">
            <CardDetail label="add to cart" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
