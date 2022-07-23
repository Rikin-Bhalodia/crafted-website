import React from "react";
import Image from "next/image";
import Logo from "/public/svg/logo.svg";
import SearchIcon from "/public/svg/search-icon.svg";
import CartIcon from "/public/svg/cart.svg";
import EmailIcon from "/public/svg/email.svg";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 111px;
  overflow-x: hidden;

  .logo {
    height: 110px !important;
    width: 240px !important;
    padding-left: 80px !important;
  }
  .tabs {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 18px;
  }
  .right-side-part {
    position: relative;
    right: 30px;
    display: flex;
    align-items: center;
  }
  .search {
    height: 48px;
    width: 250px;
    border: 2px solid #f6f7fb;
    padding-left: 20px;
    color: #9f9f9f;
    font-size: 18px;
  }
  .search-icon {
    background: #393d46;
    display: flex;
    height: 48px;
    width: 40px;
    justify-content: center;
    align-items: center;
  }
  .icon {
    padding-left: 30px;
  }
  .login-button {
    margin-left: 30px;
    background: #393d46;
    width: 68px;
    height: 48px;
    border: none;
    color: #ffffff;
  }
  .right-area {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }

  @media screen and (max-width: 1230px) {
    .tabs {
      gap: 30px;
    }
    .right-area {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  ${'' /* @media screen and (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    height: 150px;
    .tabs {
      gap: 10px;
    }
    .right-area {
      padding: 0px 70px;
      padding-bottom: 10px;
    }
    .search {
      width: 150px;
    }
    .tabs {
      padding: 0px 30px;
    }
    .right-side-part {
      right: 0;
    }
  }
  @media screen and (max-width: 552px) {
    height: 200px;

    .logo {
      padding-left: 10px !important;
    }
    .right-area {
      padding: 0px 0px 10px 0px;
    }

    .search {
      padding-left: 0px;
      width: 150px;
    }
    .tabs {
      font-size: 15px;
      align-items: center;
      padding: 0px 30px;
    }
  } */}
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Image src={Logo} alt="company-logo" className="logo" />
      <div className="right-area">
        <div className="tabs">
          <div>Home</div>
          <div>About Us</div>
          <div>TCOMaC</div>
          <div>Think Social</div>
          <div>Blog</div>
        {/* </div> */}
        {/* <div className="right-side-part"> */}
          <input placeholder="Search" className="search" />
          <div className="search-icon">
            <Image src={SearchIcon} alt="search-icon" />
          </div>
          <div className="icon">
            <Image src={CartIcon} alt="cart-icon" />
          </div>
          <div className="icon">
            <Image src={EmailIcon} alt="email-icon" />
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
