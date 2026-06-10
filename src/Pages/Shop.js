import React, {useEffect, useState} from 'react';
import Menu from "../Components/Menu";
import {useDispatch} from "react-redux";
import info from "../data/info.json";
import {bag, bagPlus} from "../assets/store/actions/action";
import Bottom from "../Components/Bottom";
import Slaqner from "../styledComponents/Slaqner";
import PriceRange from "../styledComponents/PriceRange";

function Shop(props) {
    const [click, setClick] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const[pos1,setPos1] = useState(30);
    const[deg1,setDeg1] = useState(1);
    const[pos2,setPos2] = useState(-20);
    const [deg2,setDeg2] = useState(1);
    const[pos3,setPos3] = useState(-190);
    const[deg3,setDeg3] = useState(1);
    const[pos4,setPos4] = useState(-360);
    const[deg4,setDeg4] = useState(1);
    const [pos5,setPos5] = useState(-529);
    const [deg5,setDeg5] = useState(1);
    const [pos6,setPos6] = useState(-700);
    const [deg6,setDeg6] = useState(1);
    const [posWhite, setPosWhite] = useState(-860);

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
    const config = {
        1: {
            pos: [150, -20, -190, -359, -530],
            white: -690,
            active: 1
        },
        2: {
            pos: [-20, -80, -250, -419, -590],
            white: -750,
            active: 2
        },
        3: {
            pos: [-20, -190, -280, -449, -620],
            white: -780,
            active: 3
        },
        4: {
            pos: [-20, -190, -360, -449, -620],
            white: -780,
            active: 4
        },
        5: {
            pos: [-20, -190, -360, -529, -590],
            white: -750,
            active: 5
        },
        6: {
            pos: [-20, -190, -360, -529, -700],
            white: -760,
            active: 6
        }
    };

    const openDiv = (num) => {
        const data = config[num];

        setPos2(data.pos[0]);
        setPos3(data.pos[1]);
        setPos4(data.pos[2]);
        setPos5(data.pos[3]);
        setPos6(data.pos[4]);
        setPosWhite(data.white);

        setDeg1(1);
        setDeg2(1);
        setDeg3(1);
        setDeg4(1);
        setDeg5(1);
        setDeg6(1);

        switch (data.active) {
            case 1: setDeg1(0); break;
            case 2: setDeg2(0); break;
            case 3: setDeg3(0); break;
            case 4: setDeg4(0); break;
            case 5: setDeg5(0); break;
            case 6: setDeg6(0); break;
        }
    };
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Menu/>
            <div className={'shop'}>
                <div className={'shop_left'}>
                    <span style={{fontSize:'20px',marginLeft:'20px'}}>Categories</span>
                    <div onClick={()=>openDiv(1)} style={{width:'100%',height:'80px',background:"white",
                        position:"relative"
                        ,top:pos1+"px",
                        transition:"0.3s",
                        fontSize:'15px',
                        display:"flex",
                        flexDirection:"column",
                    }}>
                        <div className={"details_div"}
                                        style={{minHeight:'30px',border:'0',
                                        borderBottom:"1px solid grey",cursor:'pointer'}}>
                            <span style={{marginLeft:"30px",fontSize:'18px'}}>Woman Wear</span>
                            <svg style={{marginLeft:'80px',transition:'0.2s',opacity:deg1}}
                                 viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                                 className="chevron-down">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8
                                 0-45.3s-32.8-12.5-45.3
                                 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>

                        </div>
                        <span className={"cat_text"}>Midi Dresses</span>
                        <span className={"cat_text"}>Maxi Dresses</span>
                        <span className={"cat_text"}>Prom Dresses</span>
                        <span className={"cat_text"}>Little Black Dresses</span>
                        <span className={"cat_text"}>Mini Dresses</span>


                    </div>
                    <div onClick={()=>openDiv(2)} style={{width:'100%',height:'200px',background:"white",
                        position:"relative",
                        top:pos2+"px",
                        transition:"0.3s",
                        fontSize:'15px',
                        cursor:"pointer",
                        display:'flex',
                        flexDirection:"column",

                    }}>
                        <div className={"details_div"} style={{height:'30px',cursor:'pointer'}}>
                             <span style={{marginLeft:"30px",fontSize:'18px'}}>Man Wear</span>
                            <svg style={{marginLeft:'102px',transition:'0.2s',opacity:deg2}}
                                 viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                                 className="chevron-down">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8
                                 0-45.3s-32.8-12.5-45.3
                                 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                        <span className={"cat_text"}>Man Dresses</span>
                        <span className={"cat_text"}>Man Black Dresses</span>
                        <span className={"cat_text"}>Man Mini Dresses</span>

                    </div>
                    <div onClick={()=>openDiv(3)} style={{width:'100%',height:'200px',background:"white",
                        position:"relative"
                        ,top:pos3+"px",
                        transition:"0.3s",
                        fontSize:'15px',
                        cursor:"pointer",
                        display:'flex',
                        flexDirection:"column",

                    }}>
                        <div className={"details_div"} style={{height:'30px',cursor:'pointer'}}>
                            <span style={{marginLeft:"30px",fontSize:'18px'}}>Children</span>
                            <svg style={{marginLeft:'113px',transition:'0.2s',opacity:deg3}}
                                 viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                                 className="chevron-down">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8
                                 0-45.3s-32.8-12.5-45.3
                                 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                        <span className={"cat_text"}>Children Dresses</span>
                        <span className={"cat_text"}>Mini Dresses</span>
                    </div>
                    <div onClick={()=>openDiv(4)} style={{width:'100%',height:'200px',background:"white",
                        position:"relative"
                        ,top:pos4+"px",
                        transition:"0.3s",
                        fontSize:'15px',
                        cursor:"pointer",
                        display:'flex',
                        flexDirection:"column",

                    }}>
                        <div className={"details_div"} style={{height:'30px',cursor:'pointer'}}>
                            <span style={{marginLeft:"30px",fontSize:'18px'}}>Bags & Purses</span>
                            <svg style={{marginLeft:'70px',transition:'0.2s',opacity:deg4}}
                                 viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                                 className="chevron-down">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8
                                 0-45.3s-32.8-12.5-45.3
                                 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                        <span className={"cat_text"}>Bags</span>
                        <span className={"cat_text"}>Purses</span>
                    </div>
                    <div onClick={()=>openDiv(5)} style={{width:'100%',height:'200px',background:"white",
                        position:"relative"
                        ,top:pos5+"px",
                        transition:"0.3s",
                        fontSize:'15px',
                        cursor:"pointer",
                        display:'flex',
                        flexDirection:"column",

                    }}>
                        <div className={"details_div"} style={{height:'30px',cursor:'pointer'}}>
                            <span style={{marginLeft:"30px",fontSize:'18px'}}>Eyewear</span>
                            <svg style={{marginLeft:'113px',transition:'0.2s',opacity:deg5}}
                                 viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                                 className="chevron-down">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8
                                 0-45.3s-32.8-12.5-45.3
                                 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                        <span className={"cat_text"}>Eyewear Style 1</span>
                        <span className={"cat_text"}>Eyewear Style 2</span>
                        <span className={"cat_text"}>Eyewear Style 3</span>
                    </div>
                    <div onClick={()=>openDiv(6)} style={{width:'100%',height:'200px',background:"white",
                        position:"relative"
                        ,top:pos6+"px",
                        transition:"0.3s",
                        fontSize:'15px',
                        cursor:"pointer",
                        display:'flex',
                        flexDirection:"column",

                    }}>
                        <div className={"details_div"} style={{height:'30px',cursor:'pointer'}}>
                            <span style={{marginLeft:"30px",fontSize:'18px'}}>Footwear</span>
                            <svg style={{marginLeft:'108px',transition:'0.2s',opacity:deg6}}
                                 viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"
                                 className="chevron-down">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8
                                 0-45.3s-32.8-12.5-45.3
                                 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>
                        <span className={"cat_text"}>Footwear 1</span>
                        <span className={"cat_text"}>Footwear 2</span>
                        <span className={"cat_text"}>Footwear 3</span>
                    </div>
                    <div style={{width:"100%",height:"160px",background:"white",position:"relative", transition:"0.3s",
                        top:posWhite + 'px'}}></div>
                    <div className={"filterByPrice"}>
                        <PriceRange/>
                    </div>
                    <div className={"filterByColor"}>
                        <span >FILTER BY COLOR</span><br/>
                        <div className={"colorBoxes"}>
                            <div className={"colorBox"}>
                                <div style={{background:"#D7D7D7"}} className={"color"}></div>
                                <span>(6)</span>
                            </div>
                            <div className={"colorBox"}>
                                <div style={{background:"#FD4F4F"}} className={"color"}></div>
                                <span>(24)</span>
                            </div>
                            <div className={"colorBox"}>
                                <div style={{background:"#FCF29C"}} className={"color"}></div>
                                <span>(47)</span>
                            </div>
                            <div className={"colorBox"}>
                                <div style={{background:"#FCF29C"}} className={"color"}></div>
                                <span>(4)</span>
                            </div>
                            <div className={"colorBox"}>
                                <div style={{background:"#BC83B1"}} className={"color"}></div>
                                <span>(12)</span>
                            </div>
                            <div className={"colorBox"}>
                                <div style={{background:"#86C4CF"}} className={"color"}></div>
                                <span>(3)</span>
                            </div>

                        </div>
                    </div>
                    <div className={"filterBySize"}>
                        <span>FILTER BY SIZE</span><br/>
                        <div className={"filterBoxes"}>
                            <div className={"filterBox"}>XS</div>
                            <div className={"filterBox"}>S</div>
                            <div className={"filterBox"}>M</div>
                            <div className={"filterBox"}>L</div>
                            <div className={"filterBox"}>XL</div>
                            <div className={"filterBox"}>XXL</div>
                        </div>
                    </div>
                    <div className={"recomended"}>
                        <span style={{marginTop:'20px',marginBottom:'20px'}}>
                            RECOMENDED
                        </span>
                        <div className={'rec_box'}>
                            <div className={'rec_img'}
                                 style={{
                                     background:'url("https://themewagon.github.io/karl/img/product-img/product-10.jpg")',
                                     backgroundSize:'cover'}} >
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <span>Men’s T-shirt</span><br/>
                                <span style = {{opacity:'0.8'}}>$ 39.99</span>
                            </div>
                        </div>
                        <div className={'rec_box'}>
                            <div className={'rec_img'}
                                 style={{
                                     background:'url("https://themewagon.github.io/karl/img/product-img/product-11.jpg")',
                                     backgroundSize:'cover'}} >
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <span>Blue mini top</span><br/>
                                <span style = {{opacity:'0.8'}}>$ 19.99</span>
                            </div>
                        </div>
                        <div className={'rec_box'}>
                            <div className={'rec_img'}
                                 style={{
                                     background:'url("https://themewagon.github.io/karl/img/product-img/product-12.jpg")',
                                     backgroundSize:'cover'}} >
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <span>Women’s T-shirt</span><br/>
                                <span style = {{opacity:'0.8'}}>$ 39.99</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'shop_right'}>
                    {info.map((item) => (
                        <div key={item.id} className={"part3_box"}
                             style={{width:'29%',height:'450px'}}>
                            <div style={{overflow: "hidden"}}>
                                <div style={{background: `url(${item.img})`, backgroundSize: "cover",height:'350px'}}
                                     className={"part3_img"}>
                                    <div className={"box_bg"}>
                                        <div onClick={() => handleClick(item.id)}
                                             style={{width:'60px',height:'60px',position:'absolute',top:'150px'}}
                                             className={"box_circle"}>
                                            <span style={{fontSize: "25px"}}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <span className={"part3_price"} style={{fontSize:'20px'}}>39.90$</span>
                            <span className={"part3_text"} style={{fontSize:'17px',opacity:'0.99',marginTop:"5px"}}>Jeans midi cocktail dress</span>
                            <button onClick={()=>bagValue(item.id,item.img)} className={"part3_but"}>ADD TO CART</button>
                        </div>
                    ))}
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
                    <div style={{width:'200px',display:'flex',height:'60px',marginTop:"50px"}}>
                        <div className={'shop_page1'}>01</div>
                        <div className={'shop_page2'}>02</div>
                        <div className={'shop_page2'}>03</div>
                    </div>

                </div>
            </div>
            <Bottom/>
        </div>
    );
}

export default Shop;