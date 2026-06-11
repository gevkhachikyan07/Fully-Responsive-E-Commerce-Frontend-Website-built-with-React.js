import React from 'react';

function Bottom(props) {
    return (
        <div className={"bottom"} style={{
            width: "100%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
            borderTop: "1px solid grey",
        }}>
            <div className={"bottom_box"}>
                <div className={'menu_logo'}>
                    <img className={"menu_img_logo"} src={"https://themewagon.github.io/karl/img/core-img/logo.png"} width="140px" height="50px" />
                </div>
                <span style={{marginLeft:"17px"}}>Copyright ©2026 All rights reserved |<br/> Made with  by Colorlib & distributed by ThemeWagon</span>
            </div>
            <div className={"bottom_box2"}>
                <dl>
                    <dt>About</dt>
                    <dt>Blog</dt>
                    <dt>Faq</dt>
                    <dt>Returns</dt>
                    <dt>Contact</dt>
                </dl>
            </div>
            <div className={"bottom_box2"}>
                <dl>
                    <dt>My Account</dt>
                    <dt>Shipping</dt>
                    <dt>Our Policies</dt>
                    <dt>Afiliates</dt>
                </dl>
            </div>
            <div className={"bottom_box3"}>
                <span className={"btm_box3_t1"} style={{position:"absolute",top:"30px",left:"20px",fontSize:"20px"}}>Subscribe to our newsletter</span>
                <input className={"bottom_inp"} type={"email"} placeholder={"Your Email Here"}/>
                <button className={"bottom_but"} style={{width:"100px",height:"46px",background:"#3A3A3A",color:"white",border:"none",fontSize:"18px",cursor:"pointer"}}>Subscribe</button>
            </div>
        </div>
    );
}

export default Bottom;