import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo2 from "/public/svg/login-logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useAuth } from "../../auth/AuthContext";

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;

  .signup-area {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ebeaea;
    text-align: center;

    .signup-form {
      width: 550px;
      height: 500px;
      background: #ffffff;
      box-shadow: 0px 0px 20px rgba(214, 214, 214, 0.5);
      border-radius: 40px;
      padding: 10px 40px;

      .Crafted-logo {
        width: 100px;
        height: 100px;
      }
      p {
        font-weight: 600;
        font-size: 24px;
        color: #595959;
        margin-bottom: 5px;
      }

      h4 {
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 1.33333px;
        color: #1a1a1a;
        margin: 0px 0px 10px 0px;
      }

      label {
        font-weight: 500;
        font-size: 14px;
        line-height: 26px;
        letter-spacing: 0.583333px;
        color: #595959;
      }
      input {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid #cdcfd1;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #9f9f9f;
        padding-left: 20px;
        border-radius: 8px;
      }

      .btn {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        border: 1px solid #cdcfd1;
        font-weight: 600;
        font-size: 16px;
        color: #ffffff;
        background: #0764e3;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        cursor: pointer;
      }
    }

    .or {
      p {
        font-weight: 700;
        font-size: 24px;
        line-height: 48px;
        letter-spacing: 1.33333px;
        color: #000000;
        margin: 10px 0px;
      }
    }
    .signup-btn {
      .btn2 {
        width: 400px;
        height: 50px;
        border: 1px solid #cdcfd1;
        font-weight: 600;
        font-size: 26px;
        color: #ffffff;
        background: #0764e3;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        border-radius: 45px;
      }
    }

    .terms {
      width: 40%;

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.33333px;
        color: #2c3333;

        span {
          color: #000000;
          font-weight: 500;
          cursor: pointer;
        }
      }

      .link {
        border-top: 1px solid #ebeaea;
        text-decoration: underline;
      }

      .link2 {
        border-top: 1px solid #ebeaea;
        text-decoration: underline;
        color: #0764e3;
      }
    }
  }

  @media screen and (max-width: 1094px) {
    flex-direction: column;
    .signup-area {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    .terms {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 650px) {
    .signup-area {
      padding: 0px 20px;

      .signup-form {
        width: 100%;

        h4 {
          font-size: 23px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 510px) {
    .signup-area .signup-form {
      height: 400px;
      .Crafted-logo {
        width: 70px;
        height: 70px;
      }
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
      input {
        height: 30px;
      }
      .btn {
        height: 30px;
      }
    }
    .signup-btn .btn2 {
      width: 100% !important;
      font-size: 18px !important;
      padding: 0px 30px;
    }
  }
`;

const SignUp = ({ setToggle }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const { signup, signInWithGoogle } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupData.name && signupData?.email && signupData.password) {
      await signup(signupData.email, signupData.password);
      router.push("/login");
    } else {
      toast("please fill the data ");
    }
  };
  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };

  return (
    <SignUpWrapper>
      <div className="signup-area">
        <div className="signup-form">
          <img
            src={logo2.src}
            alt="main-slider-icon"
            className="Crafted-logo"
          />
          <h4>Welcome to The Crafted</h4>
          <p>
            Unlimited free access to the world’s first Online Matching Centre
          </p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={signupData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create your password"
            value={signupData.password}
            onChange={handleChange}
          />
          <br />
          <a className="btn" onClick={handleSubmit}>
            Sign Up
          </a>
        </div>
        <div className="or">
          <p>OR</p>
        </div>
        <div className="signup-btn">
          <a
            href="#"
            className="btn2"
            style={{ background: "#FFFFFF", color: "#595959" }}
            onClick={handleLoginWithGoogle}
          >
            <FcGoogle size={30} />
            &nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google
          </a>
          <br />
        </div>
        <div className="terms">
          <p>
            By continuing, you agree to The Crafted’s{" "}
            <span>Terms of Service</span> and acknowledge you’ve read our{" "}
            <span> Privacy Policy</span>
          </p>
          <a href="#" className="link">
            Already have account?
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#" className="link2" onClick={() => setToggle(false)}>
            Login here
          </a>
        </div>
      </div>
      <ToastContainer />
    </SignUpWrapper>
  );
};

export default SignUp;
