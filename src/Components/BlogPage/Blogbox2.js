import React from "react";
import styled from "styled-components";

const BlogBox2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .blog-box2 {
    width: 470px;
    height: 450px;
    background: linear-gradient(
      180deg,
      rgba(24, 59, 86, 0.0001) -10%,
      rgba(22, 49, 70, 0.453847) 45.38%,
      #152532 100%
    );
    border-radius: 16px;
    position: relative;
    .blog-bottom2 {
      position: absolute;
      bottom: 30px;
      padding: 0px 30px;

      .blog-head2 {
        h3 {
          font-weight: 700;
          font-size: 28px;
          line-height: 36px;
          letter-spacing: 0.2px;
          color: #ffffff;
        }
        p {
          font-weight: 400;
          font-size: 20px;
          line-height: 36px;
          color: #ffffff;
        }
      }
      .blog-footer2 {
        display: flex;
        justify-content: space-between;
        .f11 {
          display: flex;
          gap: 14px;

          .writer-des2 {
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
        .f12 {
          position: absolute;
          right: 40px;

          p {
            font-weight: 600;
            font-size: 16px;
            line-height: 38px;
            color: #959ead;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    margin: 20px 10px 0 10px;
    .blog-box2 {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    .blog-box2 {
      width: 350px;
      height: 400px;
    }
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
const Blogbox2 = () => {
  return (
    <BlogBox2Wrapper>
      {[1, 2, 3].map((_) => {
        return (
          <>
            <div className="blog-box2">
              <div className="blog-bottom2">
                <div className="blog-head2">
                  <h3>Future of Work</h3>
                  <p>
                    Majority of peole will work in jobs that dont exist today.
                  </p>
                </div>
                <div className="blog-footer2">
                  <div className="f11">
                    <div className="blog-bio-pic2">
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
                    <div className="writer-des2">
                      <h5>Lina Hicks</h5>
                      <p>Verified writer</p>
                    </div>
                  </div>
                  <div className="f12">
                    <p>02 May</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </BlogBox2Wrapper>
  );
};

export default Blogbox2;
