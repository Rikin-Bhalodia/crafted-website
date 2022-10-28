import React, { useRef } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { ToastContainer, toast } from "react-toastify";
import { Breadcrumb } from "antd";
import emailjs from "@emailjs/browser";
import Contact from "/public/png/Contact Us.png";

const ContactPageWrapper = styled.div`
  padding: 50px 130px;
  .contact-page-heading {
    padding: 0px 0px 40px;
    h3 {
      font-weight: 700;
      font-size: 46px;
      line-height: 54px;
      color: #000000;
      text-align: center;
    }
  }
  .contact-area {
    display: flex;
    gap: 130px;
    .contact-img {
      width: 100%;
      border-radius: 45px;
      object-fit: cover;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .contact-form {
      width: 100%;
      .urgent-connect{
        margin-top:20px
      }
      .details{
        font-size:18px
      }
      h4 {
        font-weight: 500;
        font-size: 33px;
        line-height: 48px;
        text-transform: uppercase;
        color: #191919;
        margin: 20px 0px 0px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #333333;
        margin: 25px 0px;
      }
      h5 {
        font-weight: 500;
        font-size: 23px;
        line-height: 32px;
        color: #191919;
        margin: 0px 0px 15px;
      }
      input,
      textarea {
        background: #ffffff;
        border: 1px solid #f0e2d0;
        color: #a0998f;
        width: 80%;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid #cdcfd1;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #9f9f9f;
        padding-left: 20px;
      }
      textarea {
        width: 100%;
        height: 100px;
      }
      button {
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        color: #191919;
        background: #f79d1d;
        border-radius: 3px;
        border: none;
        padding: 10px 50px;
        cursor: pointer;
      }
    }
  }

 
  @media screen and (max-width: 1676px) {
    padding: 50px 100px;
    .contact-area {
      gap: 80px;
      .contact-form {
        width: 80%;
      }
    }
  }
  @media screen and (max-width: 1336px) {
    .contact-area {
      .contact-form {
        width: 60%;
        textarea,
        input {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 1158px) {
    padding: 50px 150px;
    .contact-area {
      flex-direction: column;
      .contact-img {
        height: 600px;
      }
      .contact-form {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 908px) {
    padding: 50px 100px;
    .contact-area {
      gap: 30px;
      .contact-img {
        height: 500px;
      }
    }
  }
  @media screen and (max-width: 778px) {
    padding: 10px 30px 50px;
    .contact-page-heading {
      padding: 0px 0px 10px;
      h3 {
        font-size: 36px;
      }
    }
    .contact-area {
      .contact-img {
        height: 450px;
      }
      .contact-form {
        h4 {
          font-size: 26px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 538px) {
    .contact-area {
      .contact-img {
        height: 400px;
      }
    }
  }
  @media screen and (max-width: 438px) {
    .contact-area {
      .contact-img {
        height: 300px;
      }
    }
  }
`;

const ContactPage = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m0vqwp5",
        "template_tzutlla",
        form.current,
        "_Byn7_FXweaYyAMpl"
      )
      .then(
        (result) => {
          toast(
            "your message we received from we will contact you in short time wait for that Thank you!!"
          );
        },
        (error) => {
          toast("opps something went wrong please retry after some time");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Breadcrumb separator=">" style={{ marginLeft: "120px" }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Contact us</Breadcrumb.Item>
      </Breadcrumb>
      <ContactPageWrapper>
        <div className="contact-page-heading">
          <h3>Contact Us</h3>
        </div>
        <div className="contact-area">
          <div className="contact-img">
            <img src={Contact?.src} alt="" />
          </div>
          <div className="contact-form">
            <h4>We are here for you</h4>
            <p>
              You have any query? Kindly fill out the form below and mention
              your query in the comment section and our team member will connect
              with you shortly within next 24 hours.
            </p>
            <h5>Write us a message:</h5>
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
              <br />
              <input type="text" id="name" name="name" placeholder="Name*" />
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone*"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
              <br />
              <textarea
                type="text"
                id="comment"
                name="comment"
                placeholder="Comment*"
              ></textarea>
              <br />
              <button type="submit">Send message</button>
            </form>
          <h5 className="urgent-connect">For urgent issue Contact us directly at:-</h5>
          <div className="details"><b>Phone No.</b> +91-7317029723</div>
          <div  className="details"><b>Email ID:</b> TheCraftedYou@gmail.com</div>
          <div className="details"><b>Operational Address:</b> Crafted Neem Tree Pvt. Ltd., 386 Sheikhwara, Unnao - 209801</div>

          </div>

        </div>
      </ContactPageWrapper>
      <ToastContainer />
    </>
  );
};

export default ContactPage;
