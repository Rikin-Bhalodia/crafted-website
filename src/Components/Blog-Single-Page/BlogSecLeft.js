import React from 'react'
import styled from "styled-components";
import Image from "next/image";
import blog from "../../../public/svg/blog-img.svg";
import tagmark from "../../../public/svg/tag-mark.svg";
import messageicon from "../../../public/svg/message-icon.svg";
import { IoIosLink } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs';

const BlogSecLeftWrapper = styled.div`
${'' /* width:100%; */}
    .blog-img1 {
        width:100%;
        height:100%;
        object-fit: cover;
        background-size: cover;
        background-attachment: fixed;
        overflow:hidden;
        border-radius: 45px;
    }
    .blog-client-details {
        display:flex;
        gap:12px;
        div {
            padding-top:7px;
            font-size: 13px;
            line-height: 24px;
        }
    }
    .blog-heading-1 {
        h2 {
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            color: #191919;
        }
    }
    .tag-icons {
        display:flex;
        gap:50px;

        div {
            font-weight: 500;
            font-size: 13px;
            line-height: 24px;
            color: #A0998F;
        }
    }
    .blog-para {
        p {
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            color: #333333;
        }
    }
    .blog-link {
        width: 100%;
        height: 100%;
        background: #F7F0E7;
        border-radius: 20px;
        display:flex;
        align-items:center;
        gap:40px;
        padding:25px 40px;
        div {
            display:flex;
            flex-direction:column;
            gap:5px;
            align-items: flex-start;
        }
    }
    .blog-adv {
        border-left:3px solid #F79D1D;
        padding:10px 30px 30px 60px;
        margin-top:-15px;
        h5 {
            font-weight: 400;
            font-size: 24px;
            color: #B09268;
            margin-top:10px;    
            margin-bottom:20px;
        }
        div {
            display:flex;
            gap:30px;

            p{
                font-weight: 500;
                font-size: 13px;
                color: #6E6962;
            }
        }
    }
    .blog-sm-img {
        display:flex;
        gap:40px;

        div {
            width:50%;
            height:250px;
            left: 182.71px;
            top: 2265.62px;
            background: #CCCCCC;
            border-radius: 45px;
        }
    }
    .menu-social {
        display:flex;
        justify-content:space-between;

        .menu {
            display:flex;
            gap:10px;

            p {
                padding: 0px 20px 5px 0px;
                border-bottom:3px solid #F7F0E7;
                font-weight: 500;
                font-size: 13px;
                line-height: 24px;
                color: rgba(0, 0, 0, 0.8);
            }
        }

        .social {
            display:flex;
            gap:20px;
            padding-right:30px;

            .para-head {
                font-weight: 500;
                font-size: 13px;
                line-height: 24px;
                color: #A0998F;
            }
            p {
                
            }
        }
    }
    .next-prev-section {
        display:flex;
        justify-content:space-between;
        align-items:center;

        .prev-section {
            .prev-arrow{
                display:flex;
                align-items:center;
                p {
                    font-weight: 500;
                    font-size: 19px;
                    line-height: 28px;
                    text-transform: uppercase;
                    color: #B09268;
                    
                }
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

        .next-section {
            text-align:right;
            .next-arrow{
                display:flex;
                align-items:center;
                justify-content:flex-end;
                p {
                    font-weight: 500;
                    font-size: 19px;
                    line-height: 28px;
                    text-transform: uppercase;
                    color: #B09268;
                    
                }
            }
            .next-data {
                display:flex;
                align-items:center;
                gap:23px;
                .next-img{
                    width: 119.58px;
                    height: 84.83px;
                    background: #CCCCCC;
                    border-radius: 20px;
                }
                .next-head{
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
    }

    @media screen and (max-width:875px) {
        .menu-social {
           flex-direction:column;
           
        }
        .social {
            justify-content:flex-end;
        }
        .next-prev-section {
           flex-direction:column;

        }
    }

    @media screen and (max-width:835px) {
        .menu {
            flex-wrap:wrap;
        }
        .blog-heading-1 {
            h2 {
                font-size: 30px;

            }
        }
        .blog-para {
            p {
                font-size: 18px;
            }
        }
        .blog-adv {
            h5 {
                font-size: 20px;

            }
        }
        .blog-img1 {
            height:300px !important;
        }
    }
    @media screen and (max-width:565px) {
        .blog-sm-img {
            flex-direction:column;

            div {
                width:100%
            }
        }
    }
`;

function BlogSecLeft() {
  return (
    <>
      <BlogSecLeftWrapper>
            <div className="blog-img1">
                <Image
                    src={blog}
                    alt="blog-image"
                    // className="banner-img1"
                    layout="fixed"
                />
            </div>
            <div className='blog-client-details'>
                <div style={{color:"#F79D1D",fontWeight: '500' ,borderBottom:'3px solid #F7F0E7',width:'88px',height:'30px'}}>Solo travel</div>
                <div style={{color:"#A0998F",fontWeight: '400'}}>by</div>
                <div style={{color:"#6E6962",fontWeight: '500'}}>Ed M. Appleton</div>
            </div>
            <div className='blog-heading-1'>
                <h2>The Golden Sands Of Florida And California</h2>
            </div>
            <div className='tag-icons'>
                <div>August 4, 2020</div>
                <div><Image src={messageicon}/>&nbsp;&nbsp; 17</div>
                <div><Image src={tagmark}/>&nbsp;&nbsp;Photography</div>
            </div>
            <div className='blog-para'>
                <p>Dui tincidunt nibh pharetra, quis orci in at nec. Egestas ut elementum hac venenatis, venenatis. 
                Pellentesque euismod sed elit nulla mi, tellus nec cursus. Tellus consectetur ornare ornare in neque, 
                proin massa at odio. Odio pellentesque feugiat quisque a, malesuada ipsum, dictumst. At tellus elementum,
                sagittis dignissim mattis nunc. Malesuada auctor pellentesque enim in volutpat vel sodales nulla eget. </p>
            </div>
            <div className='blog-link'>
                <div className='link-icon' style={{color:'#F79D1D'}}>
                    <IoIosLink size={70}/>
                </div>
                <div>
                    <div style={{fontWeight: '400',fontSize: '19px',color: '#191919'}}>Pellentesque gravida neque quis in eget morbi nunc.</div>
                    <div style={{fontWeight: '500',fontSize: '13px',color: '#F79D1D', background: 'rgba(255, 255, 255, 0.01)',
                    boxShadow: 'inset 0px -2px 0px #F0E2D0',borderRadius: '20px',padding:'8px'}}>https://link.com/</div>
                </div>
            </div>   
            <div className='blog-para'>
                <p>Amet rhoncus orci tellus consequat tortor ut amet varius amet. Pellentesque sed orci quis amet. Malesuada 
                urna vitae tempus pellentesque tempus auctor. Adipiscing tincidunt convallis nibh vel gravida orci, ipsum ipsum 
                ut. Felis quisque ultricies bibendum vestibulum.  </p>
            </div>
            <div className='blog-adv'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.”</h5>
                <div>
                    <p style={{color:"#A0998F"}}>by</p>
                    <p>Ed M. Appleton</p>
                </div>
            </div>
            <div className='blog-para'>
                <p>Sed dolor phasellus purus adipiscing phasellus mi. Urna urna pellentesque quisque ut. Morbi donec nisl, 
                at sit porttitor mi. Tortor donec eget mi eu mattis nulla magna fringilla vulputate. Massa eu diam a non 
                tempus donec. Nisi adipiscing non euismod fermentum. Elit est, adipiscing erat semper morbi dignissim ullamcorper. 
                In feugiat viverra netus ipsum. </p>
            </div>
            <div className='blog-sm-img'>
                <div></div>
                <div></div>
            </div>
            <div className='blog-para'>
                <p>Risus facilisis mollis varius elementum sed scelerisque tortor. Amet, egestas velit tincidunt porttitor justo. 
                Nisi vulputate interdum vel suspendisse. Cursus sed id augue in faucibus. Ante ante in purus amet posuere. 
                Posuere eu amet, turpis in. </p>
            </div>
            <div className="blog-img1">
                <Image
                    src={blog}
                    alt="blog-image"
                    // className="banner-img1"
                    layout="fixed"
                />
            </div>
            <div className='blog-para'>
                <p>Pulvinar et velit tempor, ut. Quis maecenas metus, sit nisl sit. Amet metus, euismod varius in egestas. 
                Lectus diam vitae lectus sed sagittis tellus, feugiat urna. Nam mauris, dictum a urna commodo. In massa 
                maecenas molestie semper egestas commodo, turpis mattis lorem. Imperdiet ut aenean arcu, augue. Id porttitor 
                elit nunc sit fermentum eu morbi laoreet. Eu cum diam augue dui. A cras vulputate tempor suscipit sem. Ornare 
                commodo metus sit sit maecenas varius ipsum amet.  </p>
            </div> 
            <div className='menu-social'>
                <div className='menu'>
                    <p>Cruises</p>
                    <p>Trendy</p>
                    <p>Hotels</p>
                    <p>Travel tips</p>
                    <p>Photography</p>
                    <p>Airlines</p>
                </div>
                <div className='social'>
                    <p className='para-head'>Share:</p>
                    <p><FaFacebookSquare/></p>
                    <p><BsInstagram/></p>
                    <p><AiOutlineTwitter/></p>
                </div>
            </div><br /><br />
            <div style={{borderBottom:"2px solid #F0E2D0"}}></div>
            <div className='next-prev-section'>
                <div className='prev-section'>
                    <div className='prev-arrow'>
                        <span style={{color: '#B09268'}}><BsArrowLeft size={40}/></span>&nbsp;&nbsp;&nbsp;&nbsp;<p>Prev post</p>
                    </div>
                    <div className='prev-data'>
                        <div className='prev-img'></div>
                        <div className='prev-head'>
                            <p style={{fontSize: '16px',color: '#191919'}}>8 Ways To Become A Travel Blogger</p>
                            <p>Sep 5, 2020</p>
                        </div>
                    </div>
                </div>
                <div className='next-section'>
                    <div className='next-arrow'>
                        <p>Next post</p> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#B09268'}}><BsArrowRight size={40}/></span>
                    </div>
                    <div className='next-data'>
                        <div className='next-head'>
                            <p style={{fontSize: '16px',color: '#191919'}}>Learners On The Road</p>
                            <p>Sep 2, 2020</p>
                        </div>
                        <div className='next-img'></div>   
                    </div>
                </div>
            </div>
        </BlogSecLeftWrapper>
    </>
  );
}

export default BlogSecLeft;

