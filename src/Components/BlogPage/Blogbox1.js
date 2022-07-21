import React from "react";
import styled from "styled-components";

const BlogBox1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-bottom: 30px;
  width: 100%;
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
      }
    }
    .blog-bottom1 {
      position: absolute;
      bottom: 30px;

      .blog-head1 {
        padding-bottom: 20px;
        h3 {
          font-weight: 700;
          font-size: 36px;
          line-height: 48px;
          letter-spacing: 0.2px;
          color: #ffffff;
          width: 80%;
        }
      }

      .blog-footer1 {
        display: flex;
        justify-content: space-between;
        .f1 {
          display: flex;
          gap: 14px;

          .writer-des {
            h5 {
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              color: #ffffff;
            }
            p {
              font-style: italic;
              font-weight: 400;
              font-size: 14px;
              line-height: 10px;
              color: #5a7184;
            }
          }
        }
        .f2 {
          position: absolute;
          right: 40px;
          bottom: 20px;
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
    padding: 0 20px 0 20px;
    .blog-box1 {
      width: 500px;
      height: 470px;
    }
  }
  @media screen and (max-width: 1000px) {
    .blog-box1 {
      width: 450px;
      height: 450px;
    }
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  /* @media screen and (max-width: 400px) {
    .blog-box1 {
      width: 370px;
      height: 400px;
    }
  } */
`;
const Blogbox1 = () => {
  return (
    <BlogBox1Wrapper>
      {[1, 2].map((_) => {
        return (
          <>
            <div className="blog-box1">
              <div className="blog-box1-btn">
                <button>FEATURED</button>
              </div>
              <div className="blog-bottom1">
                <div className="blog-head1">
                  <h3>Motherhood is the hardest and the best job ever</h3>
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
