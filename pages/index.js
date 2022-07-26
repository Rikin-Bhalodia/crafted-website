import Followus from "../src/Components/HomePage/FollowUs/FollowusInsta";
import CommonCard from "../src/Components/HomePage/CommonCard/index";
import DiffCard from "../src/Components/HomePage/CommonCard/diffrentCard";
import styled from "styled-components";
import CustomerReview from "/public/svg/customer.svg";
import CustomerReview1 from "/public/svg/customer2.svg";
import CustomerReview2 from "/public/svg/customer3.svg";
import MainSlider from "../src/CommonComponent/Swiper/MainSlider";
import Image from "next/image";
import MatchComponent from "../src/Components/HomePage/StepComponent";
import HomeBlogSlider from "../src/CommonComponent/Swiper/HomeBlogSlider";


const MainAppWrapper = styled.div`
  position: relative;

  .main-container {
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 600px;
    bottom: 150px;
  }
  .box-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .main-heading {
  }
  .small-box {
    width: 80px;
    height: 80px;
    background: #cdcfd1;
    margin-right: 25px;
  }
  .card-details {
    display: flex;
    height: 150px;
    width: 250px;
    align-items: center;
  }
  .woman-empowers {
    margin-top: 100px;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f7fb;
    margin-bottom: 60px;
  }
  .woman-empowers-title {
    font-weight: 600;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.8);
    padding-right: 40px;
  }
  .woman-empowers-btn {
    display: flex;
    width: 300px;
  }
  .signup-button {
    background: #959ead;
    border-radius: 6px;
    width: 200px;
    height: 50px;
    border: none;
    color: #ffffff;
    margin-right: 30px;
  }
  .know-how-btn {
    width: 200px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #18a0fb;
    border-radius: 6px;
  }
  .customer-section {
    position: relative;
  }
  .customer {
    bottom: 0px;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 0px 50px;
    margin-bottom: 200px;
    position: relative;
  }
  .title-cus {
    margin: 200px 0px 50px 100px;
    font-weight: 700;
    font-size: 30px;
    color: #183b56;
  }
  svg {
    position: relative;
    top: 10px;
  }
  @media screen and (max-width: 1277px) {
    .main {
      flex-direction: column;
    }
    .main-container {
      width: 100vw;
      justify-content: center;
      padding: 60px;
    }
    .main2 {
      margin-top: 80px !important;
    }
    .woman-empowers {
      padding: 0px 50px;
    }
  }
  @media screen and (max-width: 1007px) {
    .woman-empowers {
      flex-direction: column;
      text-align: center;
      height: 100%;
      padding: 30px 50px;
    }
    .woman-empowers-btn {
      margin-top: 30px;
    }
    .customer {
      flex-wrap: wrap;
      gap: 30px;
      padding: 0px 30px;
    }
    .title-cus {
      text-align: center;
      margin: 100px 0px 50px;
    }
  }
  @media screen and (max-width: 627px) {
    .main-container {
      padding: 5px;
      height: 100%;
      width: 100%;
    }
    .card-details {
      width: 200px;
    }
    .main-heading {
      text-align: center;
    }
    .woman-empowers-title {
      font-size: 18px;
    }
  }
`;

const dummyData = [
  {
    name: "Checkered Jacket",
    price: "$299",
  },
  {
    name: " Blue Woman Denim",
    price: "$299",
  },
  {
    name: "Orange Jeans",
    price: "$299",
  },
  {
    name: "Classic Watch",
    price: "$299",
  },
];

export default function Home() {
  return (
    <MainAppWrapper>
      <MainSlider />
      <MatchComponent />
      <CommonCard />
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="main"
      >
        <div className="main-container">
          <div
            style={{ fontSize: "30px", fontWeight: "700" }}
            className="main-heading"
          >
            New Arrival
          </div>
          <div className="box-container">
            {dummyData.map((data) => {
              return (
                <div className="card-details" style={{}}>
                  <div className="small-box"></div>
                  <div className="card-data">
                    <div>{data.name}</div>
                    <div>{data.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center" }}>
            View More
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00001 15C7.00001 14.7348 7.10537 14.4804 7.29291 14.2929C7.48044 14.1054 7.7348 14 8.00001 14L21.59 14L20.29 12.71C20.1017 12.5217 19.9959 12.2663 19.9959 12C19.9959 11.7337 20.1017 11.4783 20.29 11.29C20.4783 11.1017 20.7337 10.9959 21 10.9959C21.2663 10.9959 21.5217 11.1017 21.71 11.29L24.71 14.29C24.8488 14.4306 24.9428 14.6092 24.9801 14.8032C25.0175 14.9972 24.9966 15.1979 24.92 15.38C24.845 15.5626 24.7176 15.7189 24.5539 15.8293C24.3902 15.9396 24.1974 15.999 24 16L8.00001 16C7.7348 16 7.48044 15.8946 7.29291 15.7071C7.10537 15.5196 7.00001 15.2652 7.00001 15Z"
                fill="#393D46"
              />
              <path
                d="M20 18C19.9992 17.8684 20.0245 17.7379 20.0742 17.6161C20.124 17.4943 20.1973 17.3834 20.29 17.29L23.29 14.29C23.4783 14.1017 23.7337 13.9959 24 13.9959C24.1319 13.9959 24.2624 14.0219 24.3842 14.0723C24.5061 14.1228 24.6168 14.1968 24.71 14.29C24.8032 14.3832 24.8772 14.4939 24.9277 14.6158C24.9781 14.7376 25.0041 14.8681 25.0041 15C25.0041 15.2663 24.8983 15.5217 24.71 15.71L21.71 18.71C21.617 18.8037 21.5064 18.8781 21.3846 18.9289C21.2627 18.9797 21.132 19.0058 21 19.0058C20.868 19.0058 20.7373 18.9797 20.6154 18.9289C20.4936 18.8781 20.383 18.8037 20.29 18.71C20.1973 18.6166 20.124 18.5057 20.0742 18.3839C20.0245 18.2621 19.9992 18.1316 20 18Z"
                fill="#393D46"
              />
            </svg>
          </div>
        </div>
        <div className="main-container main2">
          <div
            style={{ fontSize: "30px", fontWeight: "700" }}
            className="main-heading"
          >
            Popular This Week
          </div>
          <div className="box-container">
            {dummyData.map((data) => {
              return (
                <div className="card-details" style={{}}>
                  <div className="small-box"></div>
                  <div className="card-data">
                    <div>{data.name}</div>
                    <div>{data.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center" }}>
            View More
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00001 15C7.00001 14.7348 7.10537 14.4804 7.29291 14.2929C7.48044 14.1054 7.7348 14 8.00001 14L21.59 14L20.29 12.71C20.1017 12.5217 19.9959 12.2663 19.9959 12C19.9959 11.7337 20.1017 11.4783 20.29 11.29C20.4783 11.1017 20.7337 10.9959 21 10.9959C21.2663 10.9959 21.5217 11.1017 21.71 11.29L24.71 14.29C24.8488 14.4306 24.9428 14.6092 24.9801 14.8032C25.0175 14.9972 24.9966 15.1979 24.92 15.38C24.845 15.5626 24.7176 15.7189 24.5539 15.8293C24.3902 15.9396 24.1974 15.999 24 16L8.00001 16C7.7348 16 7.48044 15.8946 7.29291 15.7071C7.10537 15.5196 7.00001 15.2652 7.00001 15Z"
                fill="#393D46"
              />
              <path
                d="M20 18C19.9992 17.8684 20.0245 17.7379 20.0742 17.6161C20.124 17.4943 20.1973 17.3834 20.29 17.29L23.29 14.29C23.4783 14.1017 23.7337 13.9959 24 13.9959C24.1319 13.9959 24.2624 14.0219 24.3842 14.0723C24.5061 14.1228 24.6168 14.1968 24.71 14.29C24.8032 14.3832 24.8772 14.4939 24.9277 14.6158C24.9781 14.7376 25.0041 14.8681 25.0041 15C25.0041 15.2663 24.8983 15.5217 24.71 15.71L21.71 18.71C21.617 18.8037 21.5064 18.8781 21.3846 18.9289C21.2627 18.9797 21.132 19.0058 21 19.0058C20.868 19.0058 20.7373 18.9797 20.6154 18.9289C20.4936 18.8781 20.383 18.8037 20.29 18.71C20.1973 18.6166 20.124 18.5057 20.0742 18.3839C20.0245 18.2621 19.9992 18.1316 20 18Z"
                fill="#393D46"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="woman-empowers">
        <div className="woman-empowers-title">
          The Crafted empowers women and help them grow.
        </div>
        <div className="woman-empowers-btn">
          <button className="signup-button">Sign Up Today</button>
          <button className="know-how-btn">Know how?</button>
        </div>
      </div>
      <DiffCard />
      <div className="customer-section">
        <div className="title-cus">What our customers say</div>
        <div className="customer">
          <Image src={CustomerReview} alt="customer-review" height={500} />
          <Image src={CustomerReview1} alt="customer-review" height={500} />
          <Image src={CustomerReview2} alt="customer-review" height={500} />
        </div>
      </div>
      <HomeBlogSlider />
      <Followus />
    </MainAppWrapper>
  );
}
