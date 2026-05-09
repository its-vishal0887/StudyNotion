import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [ShowPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/Dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full ">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={FormData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
        />
      </label>

      <div>

      </div>

      <label className="relative w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={ShowPassword ? "text" : "password"}
          value={FormData.password}
          onChange={changeHandler}
          name="password"
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
        />

        <span
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
          className="absolute right-3 top-[38px] cursor-pointer text-white"
        >
          {ShowPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF"  />}
        </span>

        <Link to="#">
          <p className="text-xs text-blue-100 mt-1 max-w-max ml-auto ">Forgot Password</p>
        </Link>
      </label>

      <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-black border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6 bg-yellow-300 cursor-pointer">Sign in</button>
    </form>
  );
};

export default LoginForm;
