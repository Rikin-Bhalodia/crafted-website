import React from "react";
import styled from "styled-components";
import { BsCreditCard2Back } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { TbBrandPaypal } from "react-icons/tb";

const CheckOutWrapper = styled.div`
padding: 40px 0px;
width: 100%;
  form {
    width: 100%;
    display: flex;
    gap:100px;
    /* justify-content: space-between; */

    div {
      width: 50%;
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #393D46;
        padding-bottom: 20px;
        border-bottom: 1px solid #CDCFD1;
      }
      label {
        font-weight: 400;
        font-size: 18px;
        line-height: 47px;
        text-align: center;
        color: #9F9F9F;
      }
      input {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid #CDCFD1;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #9F9F9F;
        padding-left: 20px;
      }

      select {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid #CDCFD1;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #9F9F9F;
        padding-left: 20px;
      }

      .choose-btn {
        width: 100%;
        display : flex;
        flex-direction: row;
        a {
          width:100%;
          height: 100px;
          border: 1px solid #CDCFD1;
          font-weight: 400;
          font-size: 22px;
          line-height: 27px;
          color: #393D46;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        width: 100%;


        .label {
          display : flex;
          flex-direction: row;
          justify-content: flex-start;
          width: 100%;


          label {
            width: 50%;
            display : flex;
            justify-content: flex-start;
          }
        }

        .field {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 32;
        }
      }
    }
  }
  @media screen and (max-width:1077px){
    form {
      flex-direction: column;
      justify-content: center;
      div {
        width: 100%;
      }
    }
  }

  @media screen and (max-width:467px){
    .choose-btn {
      a {
        font-size: 18px !important;
        height: 70px !important;
      }
    }
  }

 
`;

const CheckOut = () => {
    return (
      <CheckOutWrapper>
        <form action="post">
            <div className="form1">
            <p>Buyer Info</p>
            <label for="fname">Full Name</label><br/>
            <input type="text" id="fname" name="fname"/><br/>

            <label for="address">Address</label><br/>
            <input type="text" id="address" name="address"/><br/>

            <label for="contact">Contact</label><br/>
            <input type="text" id="contact" name="contact"/><br/>

            <label for="city">City</label><br/>
            <input type="text" id="city" name="city"/><br/>

            <div>
            <div className="label">
              <label for="state" style={{marginRight:'32px', width:'60%'}}>State</label>

              <label for="z-code" style={{width:'40%'}}>Zip Code</label>
            </div>
            <div className="field">
              <select name="state" id="state" style={{marginRight:'32px', width:'60%'}}>
                <option value=''>Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select> 

              <input type="text" id="z-code" name="z-code" style={{width:'40%'}}/><br/>
            </div>
            </div>
          </div>
          <div className="form2">
            <p>Payment Method</p>
            <div className="choose-btn" style={{paddingTop:'15px'}}>
              <a href="/" style={{marginRight:'32px'}}><BsCreditCard2Back size={30}/> &nbsp;&nbsp; Card</a>
              <a href="/" style={{marginRight:'32px'}}><BiTransfer size={30}/>  &nbsp;&nbsp; UPI</a>
              <a href="/"><TbBrandPaypal size={30}/>  &nbsp;&nbsp; COD</a><br />   
            </div>

            <label for="name-on-card">Name on Card</label><br/>
            <input type="text" id="name-card" name="name-card"/><br/>

            <div>
              <div className="label" >
                <label for="card-number" style={{marginRight:'32px', width:'60%'}}>Card Number</label><br/>
                <label for="cvv" style={{width:'40%'}}>CVV</label>
              </div>

              <div className="field">
                <input type="text" id="card-number" name="card-number" style={{marginRight:'32px', width:'60%'}}/>
                <input type="text" id="cvv" name="cvv" style={{width:'40%'}}/><br/>
              </div>
            </div>



            <div>
              <div className="label">
                <label for="month" style={{marginRight:'32px', width:'50%'}}>Month</label><br/>
                <label for="year" style={{width:'50%'}}>Year</label>
              </div>
              <div className="field">
                <select id='Month' style={{marginRight:'32px', width:'50%'}}>
                  <option value=''>Select Month</option>
                  <option value='Janaury'>Janaury</option>
                  <option value='February'>February</option>
                  <option value='March'>March</option>
                  <option value='April'>April</option>
                  <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
                </select> 
                <input type="number" min="1900" max="2099" style={{width:'50%'}}/>
              </div>
            </div>

          </div>
        </form>  
      </CheckOutWrapper>
    );
};

export default CheckOut;