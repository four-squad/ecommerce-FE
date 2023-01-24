import { CardProfil } from "components/Card";
import Layout from "components/Layout";

const Profil = () => {
  return (
    <Layout>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full max-h-fit py-10 bg-[#E5E5E5] rounded-lg">
          <div className="grid grid-cols-2 ">
            <div className="pt-5">
              <span className="font-bold text-2xl px-20 ">Profile</span>
              <div className="flex flex-col px-20 pt-5">
                <div className="flex w-full ">
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-center w-[400px]">
                      <div className="w-full mx-auto rounded-2xl h-[500px] ">
                        <div className="w-[150px] h-[150px] mx-auto mt-3 rounded-full bg-white border-none">
                          <img
                            src={
                              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            }
                            className="rounded-full"
                          />
                        </div>

                        <div className="mx-auto my-5 flex justify-center">
                          <button
                            className="shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                            type="submit"
                          >
                            Update Profile
                          </button>
                        </div>
                        <div className="mx-auto my-5 flex justify-center">
                          <button
                            className="shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                            type="submit"
                          >
                            Delete Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="w-full mx-auto rounded-2xl">
                <div className="flex flex-col pt-20">
                  <label className="font-semibold text-black">Name</label>
                  <input
                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                    type="text"
                    placeholder="name"
                    disabled
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="font-semibold text-black">Email</label>
                  <input
                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                    type="email"
                    placeholder="email"
                    disabled
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="font-semibold text-black">Alamat</label>
                  <input
                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                    type="text"
                    placeholder="alamat"
                    disabled
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="font-semibold text-black">Password</label>
                  <input
                    className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                    type="password"
                    placeholder=""
                    disabled
                  />
                </div>
                <div className="flex justify-start pt-10">
                  <button
                    className="shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                    type="submit"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-20 ">
        <div className="box-border w-full max-h-fitpy-10 bg-[#E5E5E5] rounded-lg pt-10">
          <span className="pt-10 px-20 font-bold text-xl">Your Product</span>
          <div className="w-full px-20">
            <CardProfil label="Remove" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profil;
