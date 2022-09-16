import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const BlogBox1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 0px 150px 30px;
  .blog-box1 {
    width: 725px;
    height: 550px;
    padding: 30px;
    background: linear-gradient(
      180deg,
      rgba(24, 59, 86, 0.0001) -10%,
      rgba(22, 49, 70, 0.453847) 45.38%,
      #152532 100%
    );
    border-radius: 16px;
    position: relative;
    .blog-box1-btn {
      button {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #36b37e;
        padding: 7px 22px;
        background: #ffffff;
        border: none;
        border-radius: 2000px;
        cursor: pointer;
      }
    }
    .blog-bottom1 {
      position: absolute;
      bottom: 30px;

      .blog-head1 {
        padding-bottom: 20px;
        h3 {
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
          letter-spacing: 0.2px;
          color: #ffffff;
          width: 90%;
          margin-bottom: 10px;
        }
      }

      .blog-footer1 {
        display: flex;
        justify-content: space-between;
        .f1 {
          display: flex;
          gap: 20px;
          align-items: center;
          .blog-bio-pic {
            cursor: pointer;
            margin-top: 10px;
          }

          .writer-des {
            h5 {
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              color: #ffffff;
              margin: 0 0 10px;
            }
            p {
              font-style: italic;
              font-weight: 400;
              font-size: 14px;
              line-height: 10px;
              color: #5a7184;
              margin: 0;
            }
          }
        }
        .f2 {
          position: absolute;
          right: 40px;
          bottom: 0px;
          p {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #959ead;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    padding: 0 100px 30px;
    .blog-box1 {
      width: 100%;
      height: 470px;
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 0 50px 20px;
    .blog-box1 {
      width: 100%;
      height: 450px;
    }
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px;
    .blog-box1 {
      .blog-bottom1 {
        .blog-head1 {
          h3 {
            font-size: 25px;
            line-height: 38px;
          }
        }
      }
    }
  }
`;
const Blogbox1 = ({ blogs }) => {
  const router = useRouter();

  const handleRoute = (id) => {
    router.push(`/blog/${id}`);
  };
  return (
    <BlogBox1Wrapper>
      {blogs.slice(0, 2).map((data) => {
        return (
          <>
            <div
              className="blog-box1"
              onClick={() => handleRoute(data.id)}
              style={{ cursor: "pointer" }}
              key={data.id}
            >
              <div className="blog-box1-btn">
                <button>FEATURED</button>
              </div>
              <div className="blog-bottom1">
                <div className="blog-head1">
                  <h3>{data.title.substr(0, 50)}...</h3>
                </div>
                <div className="blog-footer1">
                  <div className="f1">
                    <div className="blog-bio-pic">
                      <svg
                        width="54"
                        height="42"
                        viewBox="0 0 54 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="26.6667"
                          cy="20.9068"
                          rx="26.6667"
                          ry="20.3364"
                          fill="#CCCCCC"
                        />
                      </svg>
                    </div>
                    <div className="writer-des">
                      <h5>Joshua William</h5>
                      <p>Verified writer</p>
                    </div>
                  </div>
                  <div className="f2">
                    <p>02 May</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </BlogBox1Wrapper>
  );
};

export default Blogbox1;
