import React, {useEffect, useState} from 'react';
import info from "../data/info.json"
import {useDispatch} from "react-redux";
import {bag, bagPlus} from "../assets/store/actions/action";

function Part3() {
    const [click, setClick] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.overflow = click ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        }
    }, [click]);


    const handleClick = (id) => {
        setClick(true);
        setValue(1)
        setData(info.filter(item => item.id === id));
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleClose = () => {
        setClick(false);
    }
    const handleMinus = () => {
        setValue(value - 1);
        if (value === 0) {
            setValue(1);
        }
    }
    const handlePlus = () => {
        if (value === 10) {
            setValue(9);
        }else {
            setValue(value + 1)
        }
    }
    const bagValue = (id,img) => {

        setClick(false);
        dispatch(bag(id,img));
        dispatch(bagPlus(id,value));
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative"
        }}>

            <span className={"part3_text1"}>New Arrivals</span>
            <div className={"part3_boxes"}>
                {info.map((item,index) => (
                    index < 6
                        ?

                        <div key={item.id} className={"part3_box"} data-aos="flip-right" data-aos-duration="600">
                            <div style={{overflow: "hidden"}}>
                                <div style={{background: `url(${item.img})`, backgroundSize: "cover"}}
                                     className={"part3_img"}>
                                    <div className={"box_bg"}>
                                        <div onClick={() => handleClick(item.id)} className={"box_circle"}><span
                                            style={{fontSize: "35px"}}>+</span></div>
                                    </div>
                                </div>
                            </div>

                            <span className={"part3_price"}>39.90$</span>
                            <span className={"part3_text"}>Jeans midi cocktail dress</span>
                            <button onClick={()=>bagValue(item.id,item.img)} className={"part3_but"}>ADD TO CART</button>
                        </div>

                        : null
                ))}
            </div>

            {click ? data.map((item) => (
                <div
                    key={item.id}
                    style={{
                        position: "fixed",
                        inset: 0,            // full page
                        zIndex: 1000,
                    }}
                    onClick={handleClose}   // click outside closes popup
                >

                    <div
                        className="part3_wind"
                        data-aos="zoom-out"
                        onClick={e => e.stopPropagation()}  // stop clicks inside popup
                    >
                        <button onClick={handleClose} className="wind_but">×</button>
                        <div className="wind_left"
                             style={{background: `url(${item.img})`, backgroundSize: "cover"}}></div>
                        <div className="wind_right">
                            <span className="wind_text1">Boutique Silk Dress</span>
                            <span className="wind_price">$120.99 <del style={{opacity: "0.8"}}>$130</del></span>
                            <span className="wind_text2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              </span>
                            <button onClick={()=>handlePlus()} className={"plus"}>+</button>
                            <input className={"input1"} type="number" value={value} onChange={handleChange}/>
                            <button onClick={()=>handleMinus()} className={"minus"}>-</button>
                            <button onClick={()=>bagValue(item.id,item.img)} className="wind_but2">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    );
}

export default Part3;