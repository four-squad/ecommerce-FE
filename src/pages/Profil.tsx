import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import { CardProfil } from "components/Card";
import Layout from "components/Layout";

import { ProductType } from "utils/type";

const Profil = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cookie, setCookie, removeCookie] = useCookies();
  const [myProduct, setMyProduct] = useState<ProductType[]>([]);
  const navigate = useNavigate();

  //edit profile
  const [editName, setEditName] = useState<string>("");
  const [editEmail, setEditEmail] = useState<string>("");
  const [editAddress, setEditAddress] = useState<string>("");
  const [editPassword, setEditPassword] = useState<string>("");
  const [editAvatar, setEditAvatar] = useState<any>();
  const [newPreviewImage, setNewPreviewImage] = useState<any>();

  //add product
  const [addTitle, setAddTitle] = useState<string>("");
  const [addPrice, setAddPrice] = useState<string>("");
  const [addDesc, setAddDesc] = useState<string>("");
  const [addImg, setAddImg] = useState<any>();
  const [previewAddImg, setPreviewAddImg] = useState<any>();

  const handleEditImage = (file: any) => {
    setEditAvatar(file);
    const reader = new FileReader();
    reader.onload = () => {
      setNewPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddImage = (file: any) => {
    setAddImg(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewAddImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function getProfil() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`https://remotecareer.tech/users`, config)
      .then((ress) => {
        const { email, address, name, avatar, products } = ress.data.data;
        setEmail(email);
        setName(name);
        setAddress(address);
        setAvatar(avatar);
        setMyProduct(products);
        console.log("data product", products);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getProfil();
  }, []);

  //update profil
  function editProfil(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", editName);
    formData.append("address", editAddress);
    formData.append("email", editEmail);
    formData.append("password", editPassword);
    formData.append("avatar", editAvatar);

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .put(`https://remotecareer.tech/users`, formData, config)
      .then((ress) => {
        Swal.fire({
          title: "Success",
          text: "Berhasil mengubah akun",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  //hapus akun
  function hapusAkun() {
    axios
      .delete(`https://remotecareer.tech/users`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })

      .then((ress) => {
        removeCookie("token");
        removeCookie("name");
        removeCookie("avatar");
        Swal.fire({
          title: "Are you sure want to delete account?",

          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes",
          cancelButtonColor: "#d33",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              position: "center",
              icon: "success",
              text: "Delete successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            removeCookie("token");
            navigate("/");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Delete account failed",
        });
      });
  }

  function addPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", addTitle);
    formData.append("price", addPrice);
    formData.append("description", addDesc);
    formData.append("image", addImg);

    axios
      .post(`https://remotecareer.tech/products`, formData, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        console.log("file terupload: ", res);
        Swal.fire({
          title: "Success",
          text: "Berhasil mengupload product",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        console.log("gagal: ", err);
      });
  }

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
                              className="rounded-full w-[150px] h-[150px]"
                            />
                          </div>

                          <div className="mx-auto my-5 flex justify-center">
                            <form onSubmit={editProfil}>
                              <label
                                htmlFor="my-modal-6"
                                className="btn shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                              >
                                Update Profile
                              </label>

                              {/* modal edit profil */}

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
                                      value={editName}
                                      onChange={(e) =>
                                        setEditName(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="flex flex-row gap-20 pb-3">
                                    <p>Email</p>
                                    <input
                                      type="text"
                                      placeholder="Type here"
                                      className="input w-full max-w-xs bg-white text-black"
                                      value={editEmail}
                                      onChange={(e) =>
                                        setEditEmail(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="flex flex-row gap-16 pb-3">
                                    <p>Alamat</p>
                                    <input
                                      type="text"
                                      placeholder="Type here"
                                      className="input w-full max-w-xs bg-white text-black"
                                      value={editAddress}
                                      onChange={(e) =>
                                        setEditAddress(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="flex flex-row gap-12 pb-3">
                                    <p>Password</p>
                                    <input
                                      type="text"
                                      placeholder="Type here"
                                      className="input w-full max-w-xs bg-white text-black"
                                      value={editPassword}
                                      onChange={(e) =>
                                        setEditPassword(e.target.value)
                                      }
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
                                      onChange={(e) => {
                                        if (!e.target.files) return;
                                        handleEditImage(e.target.files[0]);
                                      }}
                                    />
                                    <img
                                      src={newPreviewImage}
                                      alt=""
                                      width={200}
                                      height={100}
                                    />
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
                          </div>
                          {/* akhir modal edit profil */}
                          <div className="mx-auto my-5 flex justify-center">
                            <button
                              className="btn shadow bg-[#967E76]  hover:bg-[#756152] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded-full "
                              onClick={() => hapusAkun()}
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
                <form onSubmit={addPost}>
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
                          value={addTitle}
                          onChange={(e) => setAddTitle(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-row gap-28 pb-3">
                        <p>Price</p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input w-full max-w-xs bg-white text-black"
                          value={addPrice}
                          onChange={(e) => setAddPrice(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-row gap-16 pb-3">
                        <p>Description</p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input w-full max-w-xs bg-white text-black"
                          value={addDesc}
                          onChange={(e) => setAddDesc(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col justify-center items-center mt-10">
                        <label
                          htmlFor="editPhoto"
                          style={{ cursor: "pointer" }}
                          className={"p-2 bg-slate-300 mb-4 font-bold"}
                        >
                          Upload Product Image
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          id="editPhoto"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (!e.target.files) return;
                            handleAddImage(e.target.files[0]);
                          }}
                        />
                        <img
                          src={previewAddImg}
                          alt=""
                          width={200}
                          height={100}
                        />
                      </div>
                      <div className="modal-action">
                        <button
                          type="submit"
                          className="btn bg-[#967E76] hover:bg-[#756152]"
                        >
                          Upload
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
              <div className="">
                {myProduct.map((data) => {
                  return (
                    <CardProfil
                      key={data.id}
                      label="Remove"
                      title={data.title}
                      price={data.price}
                      image={data.image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profil;
