import React from 'react';
import styled from "styled-components";
import BlogSecLeft from '../../src/Components/Blog-Single-Page/BlogSecLeft';
import BlogSecRight from '../../src/Components/Blog-Single-Page/BlogSecRight';
import FollowUs from '../../src/Components/HomePage/FollowUs/FollowusInsta';

const ThinkSocialWrapper = styled.div`
    height:100%;
    width:100%;
    top:-200px;
    h2 {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #000000;
        margin-bottom: 50px;
    }

    .blog-section {
        padding:0px 180px;
        display:flex;
        gap:80px;
        height:100%;
        width:100%;
       

        .blog-sec-left {
            width:65%;
            height:100%;
        }

        .blog-sec-right {
            width:35%;
            height:100%
        }
    }

    @media screen and (max-width:1415px) {
        .blog-section {
            flex-direction:column;
        }

        .blog-sec-left {
            width:100% !important;
        }

        .blog-sec-right {
            width:100% !important;
        }
    }

    @media screen and (max-width:1015px) {
        .blog-section {
            padding:0px 100px;
        }
    }

    @media screen and (max-width:815px) {
        .blog-section {
            padding:0px 50px;
        }
    }

    @media screen and (max-width:615px) {
        .blog-section {
            padding:0px 30px;
        }
    }

`;

const ThinkSocial = () => {

    return (
        <>
            <ThinkSocialWrapper>
                <h2>Think Social</h2>
                <section className="blog-section">
                <div className="blog-sec-left">
                    <BlogSecLeft/>
                </div>
                <div className="blog-sec-right">
                    <BlogSecRight/>
                </div>
                </section>
                <FollowUs/>
            </ThinkSocialWrapper>
        </>
    );
};

export default ThinkSocial;



