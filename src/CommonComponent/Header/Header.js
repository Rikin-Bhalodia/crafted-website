import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/svg/logo.svg";
import SearchIcon from "/public/svg/search-icon.svg";
import CartIcon from "/public/svg/cart.svg";
import EmailIcon from "/public/svg/email.svg";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../../src/auth//AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  /* overflow-y: hidden; */
  align-items: center;

  .logo-container {
    height: 50px !important;
    width: 280px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 20px;
    padding-left: 3%;
  }
  .tabs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 70px;
    padding-right: 50px;
  }
  .tabs .option a {
    font-size: 20px;
    color: #393d46 !important;
  }
  .right-side-part {
    position: relative;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search {
    height: 34px;
    width: 250px;
    border: 2px solid #f6f7fb;
    padding-left: 20px;
    color: #9f9f9f;
    font-size: 15px;
  }
  .search-icon {
    background: #393d46;
    display: flex;
    height: 34px;
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
    height: 34px;
    border: none;
    color: #ffffff;
  }
  .right-area {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
  /*Desktop View*/

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 45px;
    height: 45px;
  }
  .nav-options {
    padding-left: 25px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    list-style-type: none;
  }
  .mobile-option {
    display: none;
  }
  .mobile-menu {
    display: none;
    visibility: hidden;
  }
  @media screen and (max-width: 1140px) {
    .logo {
      width: 45px;
      height: 45px;
    }
    .nav-options {
      display: flex;
      width: 100%;
      height: 350px;
      position: absolute;
      top: 48px;
      left: -100%;
      opacity: 0;
      transition: all 0.5s ease;
      flex-direction: column;
      list-style-type: none;
      grid-gap: 0px;
    }
    .nav-options.active {
      left: 0;
      height: 380px;
      background: #fff;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 9;
      align-content: center;
      padding-left: 0px;
      z-index: 999;
      .tabs {
        flex-direction: column;
        gap: 0;
      }
    }

    .menu-icon {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
    .option {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15px;
      padding: 30px 0px;
    }
    .sign-up {
      background: rgb(222, 9, 241);
      border-radius: 3px;
      color: white;
      padding: 20px 0px;
      width: 80%;
      align-self: center;
      border-radius: 3px;
    }
    .mobile-menu {
      display: block;
      visibility: visible;
    }
    .non {
      display: none;
    }
  }
  @media screen and (max-width: 1665px) {
    .tabs {
      gap: 50px;
    }
    .search {
      height: 34px;
      width: 150px;
    }
  }

  @media screen and (max-width: 1365px) {
    height: 75px;
    .tabs {
      gap: 30px;
    }
    .right-area {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .tabs .option a {
      font-size: 15px;
    }
    .logo-container {
      height: 50px !important;
      width: 280px !important;
      padding-right: 80px;
      padding-left: 3%;
    }
  }
  @media screen and (max-width: 712px) {
    justify-content: space-evenly;
    gap: 20px;
    .right-side-part {
      right: 0px;
    }
  }

  @media screen and (max-width: 552px) {
    .right-area {
      padding: 0px 0px 10px 0px;
    }

    .search {
      padding-left: 0px;
      width: 100px;
    }
    .tabs {
      font-size: 15px;
      align-items: center;
      padding: 0px 30px;
    }
  }

  @media screen and (max-width: 454px) {
    .logo-container {
      padding-right: 30px;
    }
  }
  @media screen and (max-width: 404px) {
    .logo-container {
      padding-right: 10px;
    }
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const router = useRouter();
  const { logout } = useAuth();
  const handlelogout = async (e) => {
    e.preventDefault();
    await logout();
    router.push("/login");
  };
  return (
    <HeaderWrapper>
      <div className="logo-container">
        <Link href="/">
          <Image
            src={Logo}
            alt="company-logo"
            className="logo"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <div className="tabs">
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/about">About Us</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="webapp">TCOMaC</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/think-social">Think Social</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href="/blog">Blog</Link>
          </li>
        </div>
        <li className="option mobile-option" onClick={closeMobileMenu}>
          <div className="icon">
            <Image src={CartIcon} alt="cart-icon" />
          </div>
          <div className="icon">
            <Image src={EmailIcon} alt="email-icon" />
          </div>
          <button className="login-button">Login</button>
        </li>
      </ul>

      <div className="right-side-part">
        <input placeholder="Search" className="search" />
        <div className="search-icon">
          <Image
            src={SearchIcon}
            alt="search-icon"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="icon non">
          <Link href="/cart">
            <Image
              src={CartIcon}
              alt="cart-icon"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="icon non">
          <Image
            src={EmailIcon}
            alt="email-icon"
            style={{ cursor: "pointer" }}
          />
        </div>
        <button
          className="login-button non"
          onClick={handlelogout}
          style={{ cursor: "pointer" }}
        >
          Logout
        </button>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <AiOutlineMenu className="menu-icon" />
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
