import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowCnf, setShowCnf] = useState(false)
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (FormData.password !== FormData.cnfPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = { ...FormData };
    console.log("Printing Final account Data", accountData);
    navigate("/Dashboard");
  }

  

  return (
    <div>
      <div >
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex w-full justify-between gap-5">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>{" "}
            </p>
            <input
              type="text"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={FormData.firstName}
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>{" "}
            </p>
            <input
              type="text"
              required
              name="lastName"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={FormData.lastName}
            />
          </label>
        </div>

        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email<sup className="text-pink-200">*</sup>{" "}
          </p>
          <input
            type="email"
            required
            name="email"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
            onChange={changeHandler}
            placeholder="Enter Email"
            value={FormData.email}
          />
        </label>

        <div className="flex w-full justify-evenly gap-x-10">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>{" "}
            </p>
            <input
              type={ShowPassword ? "text" : "password"}
              required
              name="password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
              onChange={changeHandler}
              placeholder="Create Password"
              value={FormData.password}
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-[38px] cursor-pointer text-white"
            >
              {ShowPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"  /> : <AiOutlineEye fontSize={24} fill="#AFB2BF"  />}
            </span>
          </label>
          <label className="relative w-full gap-x-6">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>{" "}
            </p>
            <input
              type={ShowCnf ? "text" : "password"}
              required
              name="cnfPassword"
              onChange={changeHandler}
              placeholder="Confirm Password "
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-1 border-richblack-100"
              value={FormData.cnfPassword}
            />
            <span
              onClick={() => {
                setShowCnf((prev) => !prev);
              }}
              className="absolute right-3 top-[38px] cursor-pointer text-white"
            >
              {ShowCnf ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"  /> : <AiOutlineEye fontSize={24} fill="#AFB2BF"  />}
            </span>
          </label>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-black border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6 bg-yellow-300 cursor-pointer">Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
