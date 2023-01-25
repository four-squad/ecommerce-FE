import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import { CardProfil } from "components/Card";
import Layout from "components/Layout";

const Profil = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cookie, setCookie] = useCookies();

  function getProfil() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`https://remotecareer.tech/users`, config)
      .then((ress) => {
        const { email, address, name, avatar } = ress.data.data;
        setEmail(email);
        setName(name);
        setAddress(address);
        setAvatar(avatar);
        console.log("data profil", ress);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getProfil();
  }, []);

  return (
    <>
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
                                avatar
                                  ? avatar
                                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              }
                              className="rounded-full"
                            />
                          </div>

                          <div className="mx-auto my-5 flex justify-center">
                            <label
                              htmlFor="my-modal-6"
                              className="btn shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                            >
                              Update Profile
                            </label>
                          </div>
                          {/* modal edit profil */}
                          <form>
                            <input
                              type="checkbox"
                              id="my-modal-6"
                              className="modal-toggle "
                            />
                            <div className="modal modal-bottom sm:modal-middle ">
                              <div className="modal-box bg-[#E5E5E5]">
                                <h3 className="font-bold text-lg">
                                  Edit Account
                                </h3>
                                <div className="flex flex-row gap-20 pb-3">
                                  <p>Name</p>
                                  <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full max-w-xs bg-white text-black"
                                  />
                                </div>
                                <div className="flex flex-row gap-20 pb-3">
                                  <p>Email</p>
                                  <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full max-w-xs bg-white text-black"
                                  />
                                </div>
                                <div className="flex flex-row gap-16 pb-3">
                                  <p>Alamat</p>
                                  <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full max-w-xs bg-white text-black"
                                  />
                                </div>
                                <div className="flex flex-row gap-12 pb-3">
                                  <p>Password</p>
                                  <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full max-w-xs bg-white text-black"
                                  />
                                </div>
                                <div className="flex flex-col justify-center items-center mt-10">
                                  <label
                                    htmlFor="edit-photo"
                                    style={{ cursor: "pointer" }}
                                    className={
                                      "p-2 bg-slate-300 mb-4 font-bold"
                                    }
                                  >
                                    Upload Photo
                                  </label>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    id="edit-photo"
                                    style={{ display: "none" }}
                                  />
                                  <img src="" alt="" width={200} />
                                </div>
                                <div className="modal-action">
                                  <button
                                    type="submit"
                                    className="btn bg-[#967E76] hover:bg-[#756152]"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          {/* akhir modal edit profil */}
                          <div className="mx-auto my-5 flex justify-center">
                            <label
                              htmlFor="modal-delete"
                              className="btn shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                            >
                              Delete Profile
                            </label>
                          </div>
                          {/* modal delete */}
                          <input
                            type="checkbox"
                            id="modal-delete"
                            className="modal-toggle"
                          />
                          <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                              <h3 className="font-bold text-lg">
                                Apakah anda yakin untuk menghapus akun anda?
                              </h3>
                              <div className="modal-action">
                                <button className="btn bg-[#967E76] hover:bg-[#756152]">
                                  Hapus
                                </button>
                                <label
                                  htmlFor="modal-delete"
                                  className="btn bg-[#967E76] hover:bg-[#756152]"
                                >
                                  Cancel
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* akhir modal delete */}
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
                    <div className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4 h-10">
                      {name}
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="font-semibold text-black">Email</label>
                    <div className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4 h-10">
                      {email}
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="font-semibold text-black">Address</label>
                    <div className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4 h-10">
                      {address}
                    </div>
                  </div>
                </form>

                <div className="flex justify-start pt-10">
                  <label
                    htmlFor="my-modal-product"
                    className="btn shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                  >
                    Add Product
                  </label>
                </div>
                {/* modal add product */}
                <form>
                  <input
                    type="checkbox"
                    id="my-modal-product"
                    className="modal-toggle "
                  />
                  <div className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box bg-[#E5E5E5]">
                      <h3 className="font-bold text-lg">Add Product</h3>
                      <div className="flex flex-row gap-28 pb-3">
                        <p>Title</p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input w-full max-w-xs bg-white text-black"
                        />
                      </div>
                      <div className="flex flex-row gap-28 pb-3">
                        <p>Price</p>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input w-full max-w-xs bg-white text-black"
                        />
                      </div>
                      <div className="flex flex-row gap-16 pb-3">
                        <p>Description</p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input w-full max-w-xs bg-white text-black"
                        />
                      </div>

                      <div className="flex flex-col justify-center items-center mt-10">
                        <label
                          htmlFor="edit-photo"
                          style={{ cursor: "pointer" }}
                          className={"p-2 bg-slate-300 mb-4 font-bold"}
                        >
                          Upload Product Image
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          id="edit-photo"
                          style={{ display: "none" }}
                        />
                        <img src="" alt="" width={200} />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="btn bg-[#967E76] hover:bg-[#756152]"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* akhir modal add product */}
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
    </>
  );
};

export default Profil;
