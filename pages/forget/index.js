import React from "react";
import styled from "styled-components";
import Link from "next/link";


const ForgotWrapper = styled.div`
    padding: 50px 200px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .forgot-heading {
        width: 100vw;
        text-align: center;
        margin-right: 110px;
        h3 {
            width: 100%;
            font-weight: 700;
            font-size: 36px;
            line-height: 54px;
            color: #393D46;
        }
    }
    .forgot-area {
        width: 550px;
        height: 100%;
        padding: 70px;
        box-shadow: 0px 0px 20px rgba(214, 214, 214, 0.5);
        border-radius: 45px;
        h4 {
            font-weight: 700;
            font-size: 30px;
            letter-spacing: .5px;
            color: #1A1A1A;
            margin: 0px 0px 30px;
        }
        label {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: #626262;
        }
        input {
            margin-top: 10px;
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
        p {
            font-weight: 400;
            font-size: 14px;
            /* line-height: 26px; */
            letter-spacing: 0.25px;
            color: #595959;
            margin-top: 0px;
            margin-bottom: 40px;

        }
        a {
            font-weight: 600;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            color: #FFFFFF;
            background: #333333;
            border-radius: 8px;
            border: none;
            padding: 10px 50px;
        }
    }    
    @media screen and (max-width:800px){
        padding: 50px 50px;
        
    }
    @media screen and (max-width:600px){
        padding: 20px 30px;
        width: 100%;
        .forgot-heading {
            width: 100%;
            margin-right: 0px;

        }
        .forgot-area{
            width: 100%;
            padding: 40px;

        }
    }
`;


const Forgot = () => {
    return (
        <ForgotWrapper>
            <div className="forgot-heading">
                <h3>Forget Password?</h3>
            </div>
            <div className="forgot-area">
                <h4>We are here to get you back.</h4>
                <label for="email">Email:</label><br/>
                <input type="email" id="email" name="email"/><br/>

                <p>Check you Email inbox to forgot Password</p>
                <Link href='#' className="btn">Forget Password</Link>
            </div>
        </ForgotWrapper>
    );
};

export default Forgot;