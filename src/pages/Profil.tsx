import Layout from "components/Layout";

const Profil = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex pt-10 px-10 pb-10 py-10 ">
          <div className="flex flex-col w-2/5 bg-[#E5E5E5]">
            <div className="flex justify-center py-20 px-10 ">
              <div className="flex flex-col justify-center w-[400px]">
                <span className="font-bold text-2xl ">Profile</span>
                <div className="w-full mx-auto rounded-2xl h-[500px] ">
                  <div className="flex h-1/2">
                    <div className="w-[150px] h-[150px] mx-auto mt-16 rounded-full bg-white border-none">
                      <img
                        src={
                          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="h-1/2">
                    <div className="mx-auto my-5 flex justify-center">
                      <button
                        className="shadow bg-[#0D99FF] hover:bg-[#0d86ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                        type="submit"
                      >
                        Update Profile
                      </button>
                    </div>
                    <div className="mx-auto my-5 flex justify-center">
                      <button
                        className="shadow bg-[#0D99FF] hover:bg-[#0d86ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
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
          <div className="flex flex-col w-3/5 bg-[#E5E5E5]">
            <div className="flex pt-20 pb-4 px-10 justify-center items-center">
              <form className="w-full mx-auto rounded-2xl">
                <div className="flex flex-col py-2">
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
                    className="shadow bg-[#0D99FF] hover:bg-[#0d86ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
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
    </Layout>
  );
};

export default Profil;
