import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill, BsHammer } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import MyContext from "../../context/data/mycontext";

const NavbarPage = () => {
  const { mode, toggleMode } = useContext(MyContext);

  const [open, setOpen] = useState(false);

  // admin functionality
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  //log out function
  const logOut = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="bg-white sticky top-0 z-50">
      {/*Desktop version */}
      <header className="relative bg-white">
        <p
          className={`flex h-10 items-center justify-center  px-4 text-sm font-medium text-white ${
            mode === "dark"
              ? "bg-gray-700 text-white"
              : "bg-orange-400 text-white"
          } `}
        >
          Get free delivery on orders over 1000
        </p>

        <nav
          aria-label="top"
          className={`px-4 lg:px-8 shadow-xl ${
            mode === "dark" ? "bg-black text-white" : "bg-gray-100"
          }`}
        >
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className={`rounded-md p-2 bg-white  text-gray-400 lg:hidden ${
                  mode === "dark"
                    ? "bg-orange-300 text-white"
                    : "bg-white  text-gray-400"
                }`}
                onClick={() => setOpen(true)}
              >
                <IoMenu  />
              </button>

              {/*Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex">
                    <h1
                      className={`text-2xl font-bold px-2 py-1 rounded ${
                        mode === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Just
                      <span className="text-2xl font-bold px-2 py-1 rounded text-orange-400">
                        Aid
                      </span>
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className={`text-sm font-medium     ${
                      mode === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className={`text-sm font-medium     ${
                        mode === "dark" ? "text-white" : "text-gray-700"
                      }`}
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )}
                  {/*Admin sign in function */}

                  {user.user.email === "rawatrishi390@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className={`text-sm font-medium     ${
                        mode === "dark" ? "text-white" : "text-gray-700"
                      }`}
                    >
                      Admin
                    </Link>
                  ) : (
                    " "
                  )}

                  {/*Logout function  */}
                  {user ? (
                    <a
                      className={`text-sm font-medium   cursor-pinter  ${
                        mode === "dark" ? "text-white" : "text-gray-700"
                      }`}
                      onClick={logOut}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                {/*Profile */}

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className={`ml-3 block text-sm font-medium ${
                        mode === "dark" ? "text-white" : "text-gray-700"
                      }`}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-8">
                  <button onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun size={30} />
                    ) : (
                      <BsFillCloudSunFill size={30} />
                    )}
                  </button>
                </div>

                {/*Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className={`group -m-2 flex items-center p-2 ${
                      mode === "dark" ? "white" : ""
                    }`}
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-">
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>

                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flow-root">
                    {user.user.email === "rawatrishi390@gmail.com" ? (
                      <Link
                        to={"/dashboard"}
                        className={`text-md font-medium     ${
                          mode === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Admin
                      </Link>
                    ) : (
                      " "
                    )}
                  </div>

                  {user ? (
                    <div className="flow-root">
                      <a
                        className="-m-2 block p-2  font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                        onClick={logOut}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default NavbarPage;
