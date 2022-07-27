import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo2 from "/public/svg/login-logo.svg";


const SignUpWrapper = styled.div`
    display : flex;
    width: 100%;
    height: 821px;

    .blank {
        width:40%;
        /* background: #EBEAEA; */
    }

    .signup-area {
        width: 60%;
        height: 100%;
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #EBEAEA;
        text-align: center;


        .signup-form {
            width: 550px;
            height: 500px;
            background: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(214, 214, 214, 0.5);
            border-radius: 40px;
            padding: 10px 40px;

            p {
                font-weight: 600;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: 0.3125px;
                color: #595959;
                margin-bottom: 5px;
            }

            h4 {
                font-weight: 700;
                font-size: 32px;
                /* line-height: 48px; */
                letter-spacing: 1.33333px;
                color: #1A1A1A;
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
                border: 1px solid #CDCFD1;
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;
                color: #9F9F9F;
                padding-left: 20px;
                border-radius: 8px;
            }

            .btn {
                margin-top: 10px;
                width:100%;
                height: 40px;
                border: 1px solid #CDCFD1;
                font-weight: 600;
                font-size: 16px;
                color: #FFFFFF;
                background: #0764E3;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px

            }
        }

        .or {
            p{
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
                /* margin-top: 10px; */
                width:400px;
                height: 50px;
                border: 1px solid #CDCFD1;
                font-weight: 600;
                font-size: 26px;
                color: #FFFFFF;
                background: #0764E3;
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
                letter-spacing: .33333px;
                color: #2C3333;

                span {
                    color: #000000;
                    font-weight: 500;
                    cursor: pointer;
                }
            }

            .link {
                border-top: 1px solid #EBEAEA;
                text-decoration: underline;
            }

            .link2 {
                border-top: 1px solid #EBEAEA;
                text-decoration: underline;
                color: #0764E3;
            }
        }
    }   
    
    @media screen and (max-width: 1094px){
        flex-direction: column;
        .signup-area { 
            width: 100%;
        }
    }

    @media screen and (max-width: 700px){
      .terms {
        width: 100% !important;
      }  
    }

    @media screen and (max-width: 650px){
        .signup-area { 
            padding: 0px 20px;

            .signup-form {
                width: 100%;

                h4 {
                    font-size: 28px;
                }

                p {
                    font-size: 18px;
                }
            }
        }
    }

    @media screen and (max-width: 470px){
        height: 900px !important;

        .signup-form {
            height: 600px !important;
        }
        .btn2 {
            width: 100% !important;
            font-weight: 500 !important;
            font-size: 20px !important;
            padding: 0px 30px;
        }
    }

`;

const SignUp = () => {
    return (
        <SignUpWrapper>
            <div className="blank"></div>
            <div className="signup-area">
                <div className="signup-form">
                    <Image
                        src={logo2}
                        alt="main-slider-icon"
                        className="Crafted-logo"
                        layout="fixed"
                        width={100}
                        height={100}
                    />
                    <h4>Welcome to The Crafted</h4>
                    <p>Unlimited free access to the world’s first Online Matching Centre</p>
                    <input type="text" id="name" name="name" placeholder='Name'/><br/>
                    <input type="email" id="email" name="email" placeholder='Email'/><br/>
                    <input type="password" name="password" placeholder='Create your password'/><br/>
                    <a href="#" className="btn">Sign Up</a>
                </div>
                <div className="or">
                    <p>OR</p>
                </div>
                <div className="signup-btn">
                    <a href="#" className="btn2" style={{background:"#FFFFFF",color:'#595959'}}><FcGoogle size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</a><br/>
                    <a href="#" className="btn2"><FaFacebook size={30}/>&nbsp;&nbsp;&nbsp;Continue with Facebook</a>
                </div>
                <div className="terms">
                    <p>By continuing, you agree to The Crafted’s <span>
                    Terms of Service</span> and acknowledge you’ve
                    read our <span> Privacy Policy</span></p>
                    <a href="#" className="link">Already have account?</a>&nbsp;&nbsp;&nbsp;<a href="#" className="link2">Login here</a>
                </div>
            </div>
        </SignUpWrapper>
    );
};

export default SignUp;