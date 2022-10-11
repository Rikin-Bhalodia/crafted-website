import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const FollowUsWraapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  .follow {
    font-weight: 700;
    font-size: 26px;
  }
  .slug {
    font-weight: 400;
    font-size: 16px;
  }
  .box {
    margin-top: 15px;
    background: #c4c4c4;
    border-radius: 25px;
    height: 180px;
    width: 240px;
    object-fit: cover;
    cursor: pointer;
  }
  .button {
    background: #e07171;
    border-radius: 45px;
    width: 160px;
    height: 40px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    margin-top: 30px;
  }

  @media screen and (max-width: 1550px) {
    .box {
      width: 200px;
      height: 150px;
    }
  }
  @media screen and (max-width: 1350px) {
    .box {
      width: 150px;
    }
    .follow {
      text-align: center;
      font-size: 20px;
    }
    .slug {
      font-size: 15px;
    }
    .button {
      font-size: 12px;
      width: 120px;
      height: 35px;
    }
  }
`;

const FollowUs = () => {
  const [instaFeed, setInstaFeed] = useState([]);
  const router = useRouter();
  const fields = "id,media_url,permalink,children{media_url}";
  const access_token =
    "IGQVJXYktwNkE3RjdPb28zejVzQmtwcEdGa0ZASTEVYcUI3ZA1dQWUQ1emVkcDhYcnJyaGpGSndPbnhxbW8wRk01VVZAwQU5PNUNaNFlWOU9vYTMtZAFE5ZAXk0RHVqWll6VVA3SDVnWWlYOTJrckdvN2JEVgZDZD";
  useEffect(() => {
    const fetchInstaFeed = async () => {
      const { data } = await axios.get(
        `https://graph.instagram.com/me/media?fields=${fields}&access_token=${access_token}`
      );
      setInstaFeed(data.data);
    };
    fetchInstaFeed();
  }, []);

  const handleClick = (link) => {
    router.push(link);
  };
  return (
    <FollowUsWraapper>
      <div className="follow">FOLLOW US ON INSTAGRAM</div>
      <div className="slug">@iTheCrafted</div>
      <div
        style={{
          display: "flex",
          columnGap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {(instaFeed || []).slice(0, 6).map(({ media_url, permalink }) => {
          return (
            <img
              className="box"
              src={media_url}
              alt="media url"
              onClick={() => handleClick(permalink)}
            />
          );
        })}
      </div>
      <Link href="https://www.instagram.com/ithecrafted/" target="_blank">
        <button className="button" style={{ cursor: "pointer" }}>
          FOLLOW NOW
        </button>
      </Link>
    </FollowUsWraapper>
  );
};

export default FollowUs;
