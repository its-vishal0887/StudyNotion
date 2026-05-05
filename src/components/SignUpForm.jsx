import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [ShowPassword, setShowPassword] = useState(false);
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
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>{" "}
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name : "
              value={FormData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>{" "}
            </p>
            <input
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name : "
              value={FormData.lastName}
            />
          </label>
        </div>

        <label>
          <p>
            Email<sup>*</sup>{" "}
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email : "
            value={FormData.email}
          />
        </label>

        <div>
          <label>
            <p>
              Create Password<sup>*</sup>{" "}
            </p>
            <input
              type={ShowPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Create Password "
              value={FormData.password}
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {ShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>{" "}
            </p>
            <input
              type={ShowPassword ? "text" : "password"}
              required
              name="cnfPassword"
              onChange={changeHandler}
              placeholder="Confirm Password "
              value={FormData.cnfPassword}
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {ShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
