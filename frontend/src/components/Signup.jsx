import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"


const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <div className="flex h-screen items-center justify-center">
     
      <div className="w-[600px]" >
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

          {/* username */}
          <h3 className="font-bold text-lg">Sign Up</h3>
          <div className="mt-4">
            <span>Name</span>
            <br />
            <input
              type="name"
              placeholder="Enter your Fuul Name"
              className="px-3 py-1 w-80 rounded-md border outline-none"
              {...register("name", { required: true })} 
            />
            <br />
             {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* email */}
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
             {errors.email && <span className="text-sm text-red-500">This field is required</span>}

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
             {errors.password && <span className="text-sm text-red-500">This field is required</span>}

          </div>

          {/* button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white hover:bg-pink-800 duration-200 rounded-md px-3 py-1">
              SignUp
            </button>
            <p>
              Already Account ?{" "}
              <button type="submit"  className="text-blue-400 underline cursor-pointer hover:text-blue-800"
              onClick={()=> document.getElementById("my_modal_3").showModal()}>
                Login
              </button>{" "}
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
