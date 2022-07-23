import React from 'react';
import styled from "styled-components";


const BlogSecRightWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:40px;
    .news-letter{
      width:100%;
      height:100%;
      background:#C4C4C4;
      border-radius: 45px;
      padding:10px 50px;
      h3 {
        font-weight: 700;
        font-size: 33px;
        line-height: 48px;
        text-transform: uppercase;
        color: #FFFFFF;
      }
      input {
        padding: 6px 16px;
        width: 100%;
        height: 40px;
        border:none;
        outline:none;
        background: #FFFFFF;
        box-shadow: 0px 8px 16px rgba(110, 105, 98, 0.1);
        border-radius: 45px;
        font-size: 20px;
      }
      button {
        padding: 8px 32px;
        width: 100%;
        height: 40px;
        border:none;
        outline:none;
        background: #979797;
        border-radius: 45px;
        margin:25px 0px 60px 0px;
        font-weight: 500;
        font-size: 13px;
      }
    }
    .latest-post {
      border: 2px solid #F0E2D0;
      border-radius: 45px;  
      padding:10px 50px 30px;
      h4 { 
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #191919;
      }
      .prev-data {
        display:flex;
        align-items:center;
        gap:23px;
        
        .prev-img{
          width: 119.58px;
          height: 84.83px;
          background: #CCCCCC;
          border-radius: 20px;
        }
        .prev-head{
          width: 180px;
          height:100%;
          display:flex;
          flex-direction:column;

          p{
              font-weight: 500;
              font-size: 13px;
              color: #A0998F;
          }
        }
      }
    }
    .categories {
      border: 2px solid #F0E2D0;
      border-radius: 45px;  
      padding:10px 50px 30px;

      h4 { 
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #191919;
      }
      p {
        font-weight: 400;
        font-size: 13px;
        line-height: 30px;
        color: #A0998F;
      }
    }

    .tags {
      border: 2px solid #F0E2D0;
      border-radius: 45px;  
      padding:10px 35px 30px;

      h4 { 
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #191919;
      }
      div {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;

        p {
          font-weight: 500;
          font-size: 13px;
          color: rgba(0, 0, 0, 0.8);
          height:30px;
          margin:5px;
          padding-right:30px;
          border-bottom:2px solid #F0E2D0;
        }
      } 
    }
    .about {
      border: 2px solid #F0E2D0;
      border-radius: 45px;  
      padding:10px 50px 30px;

      h4 { 
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #191919;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #333333;
      }
    }
    @media screen and (max-width:455px) {
      .news-letter {
        padding:10px 30px; 
      }
      .latest-post {
        padding:10px 30px 30px; 

      }
      .categories {}
      .tags {
        padding:10px 20px 30px; 

      }
      .about {
        padding:10px 20px 30px;
      }
    }
`;

function BlogSecRight() {
  return (
    <>
      <BlogSecRightWrapper>
        <div className='news-letter'>
          <h3>NEWSLETTER</h3>
          <input type="text" placeholder='E-mail'/><br />
          <button>Subscribe</button>
        </div>
        <div className='latest-post'>
          <h4>LATEST POSTS</h4>
        {[1, 2, 3, 4,].map((_) => {
          return (
            <div className='prev-data'>
                <div className='prev-img'></div>
                <div className='prev-head'>
                    <p style={{fontSize: '16px',color: '#191919'}}>8 Ways To Become A Travel Blogger</p>
                    <p>Sep 5, 2020</p>
                </div>
            </div>
            );
        })}
        </div>  
        <div className='categories'>
          <h4>CATEGORIES</h4>
            <p>Adventure (3)</p>
            <p>Business (3)</p>
            <p>Escapism (3)</p>
            <p>Lifestyle (5)</p>
            <p>Lifestyle (5)</p>
            <p>Wildlife (3)</p>
        </div>   
        <div className='tags'>
          <h4>TAGS</h4>
          <div>
            <p>Cruises</p>
            <p>Trendy</p>
            <p>Hotels</p>
            <p>Travel tips</p>
            <p>Airlines</p>
            <p>Exotic</p>
            <p>Festivals</p>
            <p>Gear</p>
            <p>Photography</p>
            <p>On the road</p>
          </div>
        </div>
        <div className='about'>
          <h4>ABOUT AUTHOR</h4>
          <p>Eget donec nunc feugiat aliquet odio dignissim volutpat. Lacus quam cursus sed nullam tristique in viverra id.</p>
        </div>
      </BlogSecRightWrapper>
    </>
  )
}

export default BlogSecRight;
