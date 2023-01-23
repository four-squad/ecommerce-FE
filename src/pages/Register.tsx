import register from "assets/bg-register.jpg";

const Register = () => {
  return (
    <div className="flex w-full h-screen bg-white">
      <div
        className="w-full h-full bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${register})` }}
      >
        <div className="h-full flex justify-center items-center">
          <div className="w-1/2 h-3/4 flex justify-center bg-[#E5E5E5] rounded-2xl shadow-2xl">
            <form className="w-[90%] align-middle m-10 ">
              <h2 className="text-4xl text-black text-center font-bold">
                Register
              </h2>
              <div className="flex flex-col py-2">
                <div className="">
                  <label className="block text-black font-semibold text-md md:text-left mb-1 md:mb-0 pr-4">
                    Name
                  </label>
                </div>
                <div className="">
                  <input
                    className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14 "
                    id="inline-full-name"
                    type="text"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <div className="">
                  <label className="block text-black font-semibold text-md md:text-left mb-1 md:mb-0 pr-4">
                    Email
                  </label>
                </div>
                <div className="">
                  <input
                    className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                    id="inline-email"
                    type="email"
                    placeholder=" email"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <div className="">
                  <label className="block text-black font-semibold text-md md:text-left mb-1 md:mb-0 pr-4">
                    Alamat
                  </label>
                </div>
                <div className="">
                  <input
                    className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                    id="inline-full-username"
                    type="text"
                    placeholder="alamat"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <div className="">
                  <label className="block text-black font-semibold text-md md:text-left mb-1 md:mb-0 pr-4">
                    Password
                  </label>
                </div>
                <div className="">
                  <input
                    className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl  w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                    id="inline-password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex justify-center py-1 w-64 px-80">
                <button
                  className="shadow bg-[#0D99FF] hover:bg-[#0d86ff] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="flex justify-center w-64 px-80 pb-20">
                <p className="text-[#0D99FF] hover:text-[#0d86ff] font-semibold text-sm ">
                  Login
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
