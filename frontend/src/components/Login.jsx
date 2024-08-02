import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
        

          {/* email */}
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-3 py-1 w-80 rounded-md border outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">*This field is required</span>}
          </div>

          {/* passoword */}
          <div className="mt-4">
            <span>Passowrd</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="px-3 py-1 w-80 rounded-md border outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">*This field is required</span>}
          </div>

          {/* button */}
          <div className="flex justify-around mt-4">
            <button type="submit" className="bg-pink-500 text-white hover:bg-pink-800 duration-200 rounded-md px-3 py-1">
              Login
            </button>
            <p>
              Not registered ?{" "}
              <Link
                to={"/signup"}
                className="text-blue-400 underline cursor-pointer hover:text-blue-800"
              >
                Signup
              </Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
