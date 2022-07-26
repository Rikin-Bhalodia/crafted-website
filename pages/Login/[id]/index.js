import React from "react";
import styled from "styled-components";

const LogInWrapper = styled.div`
    display : flex;
    width: 100%;
    height: 821px;

    .blank {
        width:40%;
        /* background: #EBEAEA; */
    }

    .login-area {
        width: 60%;
        height: 100%;
        display : flex;
        justify-content: center;
        align-items: center;
        background: #EBEAEA;

        .login-form {
            width: 550px;
            height: 580px;
            background: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(214, 214, 214, 0.5);
            border-radius: 8px;
            padding: 40px;

            p {
                font-weight: 500;
                font-size: 14px;
                letter-spacing: 0.583333px;
                text-transform: uppercase;
                color: #595959;
                margin-bottom: 5px;
            }

            h4 {
                font-weight: 700;
                font-size: 32px;
                letter-spacing: 1.33333px;
                color: #1A1A1A;
                margin: 0px 0px 30px 0px;
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
                margin-top: 18px;
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
                border-radius: 8px;

            }

            .link {
                border-top: 1px solid #EBEAEA;
                text-decoration: underline;
                color: #0764E3;
                display: flex;
                align-items: flex-end;
                height: 50px;
                margin-top: 30px;
            }
        }
    }

    @media screen and (max-width: 994px){
        flex-direction: column;
        .login-area { 
            width: 100%;
        }
    }
    @media screen and (max-width: 610px){
        .login-area { 
            padding: 0px 20px;
        }
    }
    @media screen and (max-width: 460px){
        .login-form {
            padding: 20px !important;

            h4 {
                font-size: 31px !important;
            }
        }
    }
`;

const LogIn = () => {
    return (
        <LogInWrapper>
            <div className="blank"></div>
            <div className="login-area">
                <div className="login-form">
                    <p>Hey, look who's here!</p>
                    <h4>Before the start</h4>
                    <p style={{fontWeight: '500',fontSize: '15px',letterSpacing: '0.3125px',lineHeight: '22px',paddingBottom:'18px'}}>Fill in the form below to get instant access to all major features.</p>
                    <label for="fname">Full Name</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>

                    <label for="address">Address</label><br/>
                    <input type="text" id="address" name="address"/><br/>
                    <a href="#" className="btn">LogIn</a><br />

                    <a href="#" className="link">Forgot your password?</a>
                </div>
            </div>
        </LogInWrapper>
    );
};

export default LogIn;