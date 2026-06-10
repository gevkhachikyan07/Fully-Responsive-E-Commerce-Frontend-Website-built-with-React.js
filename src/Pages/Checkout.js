import React, {useState} from 'react';
import Menu from "../Components/Menu";
import Bottom from "../Components/Bottom";

function Checkout(props) {
    const[fName,setFname] = useState("");
    const[lName,setLName] = useState("");
    const[cName, setCName] = useState("");
    const[country, setCountry] = useState("");
    const[addr, setAddr] = useState("");
    const[addr2, setAddr2] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[postcode, setPostcode] = useState("");
    const[province, setProvince] = useState("");
    const[city, setCity] = useState("");
    const[clickFName,setClickFName ] = useState(false);
    const[clickLName,setClickLName] = useState(false);
    const[clickCity,setClickCity] = useState(false);
    const[clickAddr,setClickAddr] = useState(false);
    const[clickEmail,setClickEmail] = useState(false);
    const[clickPhone,setClickPhone] = useState(false);
    const[clickPostcode,setClickPostcode] = useState(false);
    const[clickProvince,setClickProvince] = useState(false);
    const [clickCountry,setClickCountry] = useState(false);

    const[checkData, setCheckData] = useState(JSON.parse(localStorage.getItem("checkData"))||[]);


    const onSubmit=(e)=>{
        e.preventDefault();
        const newData = {
            fname: fName,
            lName: lName,
            country: country,
            addr: addr,
            addr2: addr2,
            email: email,
            phone: phone,
            postcode: postcode,
            province: province,
            city: city,
        }
        if (fName !== "" && lName !== "" && country !== ""
            && addr !== "" && email !== "" && phone !== ""
            && postcode !== "" && province !== "" && city !== "") {
                checkData.push(newData);
                localStorage.setItem("checkData", JSON.stringify(checkData));
                alert(`We sent you a message to your number (${phone})`);
        }
        if(fName === ""){
            setClickFName(true)
        }else{
            setClickFName(false)
        }
        if(lName === ""){
            setClickLName(true)
        }else{
            setClickLName(false)
        }
        if(country === ""){
            setClickCountry(true)
        }else{
            setClickCountry(false)
        }
        if(addr === ""){
            setClickAddr(true)
        }else{
            setClickAddr(false)
        }
        if(email === ""){
            setClickEmail(true)
        }else{
            setClickEmail(false)
        }
        if(phone === ""){
            setClickPhone(true)
        }else{
            setClickPhone(false)
        }
        if(postcode === ""){
            setClickPostcode(true)
        }else{
            setClickPostcode(false)
        }
        if(province === ""){
            setClickProvince(true)
        }else{
            setClickProvince(false)
        }
        if(city === ""){
            setClickCity(true)
        }else{
            setClickCity(false)
        }


    }
    return (
        <div>
            <Menu/><br/><br/><br/>
            <span style={{marginLeft:"150px",fontSize:"20px"}}>Billing Address</span><br/>
            <span style={{marginLeft:"150px",opacity:"0.8"}}>Enter your cupone code</span>

            <div style={{width:"100%",height:"900px",
                display:"flex",justifyContent:"center",marginTop:"20px"}}>
                <div className={"checkout"}>
                    <form className={"checkout_left"}>
                        <label>
                           First Name * <br/>
                            <input type={"text"} value={fName} className={"checkInputName"}
                                   onChange={(e) => setFname(e.target.value)}
                                    style = {clickFName ? {border:'1px solid red'} :
                                        {border:'1px solid'}}/>
                        </label>
                        <label>
                           Last Name * <br/>
                            <input type={"text"} value={lName} className={"checkInputName"}
                                   onChange={(e) => setLName(e.target.value)}
                                   style = {clickLName ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <label>
                           Company Name <br/>
                            <input type={"text"} value={cName} className={"checkInputCompany"}
                                   onChange={(e) => setCName(e.target.value)}
                            />
                        </label>
                        <label>
                            Country * <br/>
                            <input type={"text"} value={country} className={"checkInputCompany"}
                                   onChange={(e) => setCountry(e.target.value)}
                                   style = {clickCountry ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <label>
                            Address *<br/>
                            <input type={"text"} value={addr} className={"checkInputCompany"}
                                   onChange={(e) => setAddr(e.target.value)}
                                   style = {clickAddr ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                            <input type={"text"} value={addr2} className={"checkInputCompany"}
                                   onChange={(e) => setAddr2(e.target.value)} />
                        <label>
                            Postcode * <br/>
                            <input type={"text"} value={postcode} className={"checkInputCompany"}
                                   onChange={e => setPostcode(e.target.value)}
                                   style = {clickPostcode ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <label>
                            Town/City *<br/>
                            <input type={"text"} value={city} className={"checkInputCompany"}
                                   onChange={event => setCity(event.target.value)}
                                   style = {clickCity ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <label>
                            Province * <br/>
                            <input type={"text"} value={province} className={"checkInputCompany"}
                                   onChange={event => setProvince(event.target.value)}
                                   style = {clickProvince ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <label>
                            Phone No * <br/>
                            <input type={"number"} value={phone} className={"checkInputCompany"}
                                   onChange={event => setPhone(event.target.value)}
                                   style = {clickPhone ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <label>
                            Email Address * <br/>
                            <input type={"email"} value={email} className={"checkInputCompany"}
                                   onChange={event => setEmail(event.target.value)}
                                   style = {clickEmail ? {border:'1px solid red'} :
                                       {border:'1px solid'}}/>
                        </label>
                        <div style={{width:"95%"}}>
                            <label style={{display:"flex",alignItems:"center"}}>
                                <input type={"checkbox"} style={{width:"20px",height:"20px"}} /> Terms And Conditions
                            </label><br/>
                            <label style={{display:"flex",alignItems:"center"}}>
                                <input type={"checkbox"} style={{width:"20px",height:"20px"}} /> Create an account
                            </label><br/>
                            <label style={{display:"flex",alignItems:"center"}}>
                                <input type={"checkbox"} style={{width:"20px",height:"20px"}} /> Subscribe to our newsletter
                            </label><br/>
                        </div>

                    </form>
                    <div className={"checkout_right"}>
                        <span style={{marginLeft:"40px",marginTop:"30px",fontSize:"20px"}}>Your Order</span>
                        <span style={{marginLeft:"40px",opacity:"0.7"}}>Details</span>
                        <div className={"check"}>
                            <div className={"check_box"}>
                                <span>PRODUCT</span>
                                <span>TOTAL</span>
                            </div>
                            <div className={"check_box"}>
                                <span>COCKTAIL YELLOW DRESS</span>
                                <span>$59.90</span>
                            </div>
                            <div className={"check_box"}>
                                <span>SUBTOTAL</span>
                                <span>$59.90</span>
                            </div>
                            <div className={"check_box"}>
                                <span>SHIPPING</span>
                                <span>FREE</span>
                            </div>
                            <div className={"check_box"}>
                                <span>TOTAL</span>
                                <span>$59.90</span>
                            </div>
                            <div className={"pay_method"}>
                                <label style={{fontSize:"13px",display:"flex",alignItems:"center",marginTop:"20px"}}>
                                    <input type={"radio"} name={"p"} style={{width:"30px"}} />
                                    PAYPAL
                                </label>
                                <label style={{fontSize:"13px",display:"flex",alignItems:"center",marginTop:"20px"}}>
                                    <input type={"radio"} name={"p"} style={{width:"30px"}} />
                                    APPLE PAY
                                </label>
                                <label style={{fontSize:"13px",display:"flex",alignItems:"center",marginTop:"20px"}}>
                                    <input type={"radio"} name={"p"} style={{width:"30px"}} />
                                    CASH
                                </label><br/>
                                <button onClick={onSubmit} className={"order_but"}>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom/>
        </div>
    );
}

export default Checkout;