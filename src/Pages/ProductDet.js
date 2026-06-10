import React, {useState} from 'react';
import Menu from "../Components/Menu";
import Slider from "react-slick";
import info from "../data/info.json";
import Bottom from "../Components/Bottom";
import {bag, bagPlus} from "../assets/store/actions/action";
import {useDispatch} from "react-redux";

function ProductDet(props) {


    const[pos1,setPos1] = useState(250);
    const[pos2,setPos2] = useState(450);
    const[pos3,setPos3] = useState(530);
    const[pos4,setPos4] = useState(610);
    const[click,setClick] = useState(false);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [value, setValue] = useState(1);
    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    let settings2= {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    }
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

    const openDiv1=()=>{

        setPos2(450);
        setPos3(530);
    }
    const openDiv2=()=>{

        setPos2(330);
        setPos3(530);


    }
    const openDiv3=()=>{

        setPos2(330);
        setPos3(410);
    }
    return (
        <div style={{ display: 'flex',flexDirection:"column",alignItems: 'center' }}>
            <Menu/>
            <div style={{width:"80%",
                         height:"1000px",

                         display:"flex",justifyContent:"center",
                         alignItems:'center',}}>

                <div className={"prodLeft"}>
                    <span style={{marginBottom:"50px"}}>Home / Dresses / Long Dress</span>
                    <Slider {...settings} style={{width:'100%',height:'700px'}}>
                        <div>
                            <div style={{width:'100%'
                                        ,height:'700px',
                                       background:`url(https://themewagon.github.io/karl/img/product-img/product-1.jpg)`,
                                        backgroundSize:"100% 100%"}}></div>
                        </div>
                        <div>
                            <div style={{width:'100%'
                                ,height:'700px'
                                ,background:`url(https://themewagon.github.io/karl/img/product-img/product-2.jpg)`,
                                backgroundSize:"100% 100%"}}></div>
                        </div>
                        <div>
                            <div style={{width:'100%'
                                ,height:'700px'
                                ,background:`url(https://themewagon.github.io/karl/img/product-img/product-3.jpg)`,
                                backgroundSize:"100% 100%"}}></div>
                        </div>
                        <div>
                            <div style={{width:'100%'
                                ,height:'700px',
                               backgroundSize:"cover"
                                ,background:`url(https://themewagon.github.io/karl/img/product-img/product-4.jpg)`,
                                }}></div>
                        </div>
                    </Slider>
                    <div style={{width:"100%",height:"120px"
                                ,display:"flex",justifyContent:"space-evenly",
                                alignItems:"center"}}>
                        <div style={{width:'23%'
                            ,height:'100px',
                             backgroundSize:"cover"
                            ,background:`url(https://themewagon.github.io/karl/img/product-img/product-1.jpg)`,
                        }}></div>
                        <div style={{width:'23%',
                             cursor:"pointer"
                            ,height:'100px',
                             backgroundSize:"cover"
                            ,background:`url(https://themewagon.github.io/karl/img/product-img/product-2.jpg)`,
                        }}></div>
                        <div style={{width:'23%'
                            ,height:'100px',
                            cursor:"pointer",
                            backgroundSize:"cover"
                            ,background:`url(https://themewagon.github.io/karl/img/product-img/product-3.jpg)`,
                        }}></div>
                        <div style={{width:'23%'
                            ,height:'100px',
                            cursor:"pointer",
                            backgroundSize:"100% 100%"
                            ,background:`url(https://themewagon.github.io/karl/img/product-img/product-4.jpg)`,
                        }}></div>
                    </div>
                </div>
                <div className={"prodRight"}>
                    <span style={{marginLeft:"20px",fontSize:"24px",
                                    marginBottom:"10px",marginTop:"20px"}}>
                        Long Yellow Dress
                    </span>
                    <span style={{marginLeft:"20px",fontSize:"20px",
                                fontWeight:"bold",marginBottom:"20px"}}>
                        $ 39.99
                    </span>
                    <span style={{marginLeft:"20px"}}>SIZE</span><br/>
                    <div style={{width:"50%",height:"35px",
                               marginLeft:"20px",
                                display:"flex",justifyContent:"space-evenly",cursor:'pointer'}}>
                        <div style={{width:'15%',height:"35px",border:"1px solid",
                                    display:"flex",justifyContent:"center",
                                    alignItems:"center"}}>32</div>
                        <div style={{width:'15%',height:"35px",border:"1px solid",
                            display:"flex",justifyContent:"center",
                            alignItems:"center"}}>34</div>
                        <div style={{width:'15%',height:"35px",border:"1px solid",
                            display:"flex",justifyContent:"center",
                            alignItems:"center"}}>36</div>
                        <div style={{width:'15%',height:"35px",border:"1px solid",
                            display:"flex",justifyContent:"center",
                            alignItems:"center"}}>38</div>
                        <div style={{width:'15%',height:"35px",border:"1px solid",
                            display:"flex",justifyContent:"center",
                            alignItems:"center"}}>40</div>
                        <div style={{width:'15%',height:"35px",border:"1px solid",
                            display:"flex",justifyContent:"center",
                            alignItems:"center"}}>42</div>
                    </div>
                    <div>
                        <button onClick={handlePlus} className={"plus3"}>+</button>
                        <input className={"input3"} type="number" value={value} onChange={handleChange}/>
                        <button onClick={handleMinus} className={"minus3"}>-</button>
                        <button onClick={()=>bagValue(0,"https://themewagon.github.io/karl/img/product-img/product-6.jpg")}  className="wind_but3">ADD TO CART</button>
                    </div>
                    <div onClick={openDiv1} style={{width:'100%',height:'200px',textAlign:"center",background:"white",
                        position:"absolute"
                        ,top:pos1+"px",
                        transition:"0.3s",
                    }}>
                        <div className={"details_div"}>
                            <span style={{marginLeft:"30px"}}>INFORMATION</span>
                        </div>
                        <span style={{fontSize:"15px",opacity:"0.8"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra<br/> tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum<br/> sodales arcu
                            id te mpus. Ut consectetur lacus.<br/>
                            Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres<br/><br/>
                            The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"
                        </span>
                    </div>
                    <div onClick={openDiv2} style={{width:'100%',height:'200px',textAlign:"center",background:"white",
                    position:"absolute",
                    top:pos2+"px",
                    transition:"0.3s",}}>
                        <div className={"details_div"}>
                            <span style={{marginLeft:"30px"}}>CART DETAILS</span>
                        </div>
                        <span style={{fontSize:"15px",opacity:"0.8"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra<br/> tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum<br/> sodales arcu
                            id te mpus. Ut consectetur lacus.<br/>
                            Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres<br/><br/>
                            The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"
                        </span>
                    </div>
                    <div onClick={openDiv3} style={{width:'100%',height:'200px',textAlign:"center",background:"white",
                        position:"absolute"
                        ,top:pos3+"px",
                        transition:"0.3s",

                    }}>
                        <div className={"details_div"}>
                            <span style={{marginLeft:"30px"}}>SHIPPING & RETURNS</span>
                        </div>
                        <span style={{fontSize:"15px",opacity:"0.8"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra<br/> tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum<br/> sodales arcu
                            id te mpus. Ut consectetur lacus.<br/>
                            Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres<br/><br/>
                            The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"
                        </span>
                    </div>
                    <div style={{width:"100%",height:"160px",background:"white",position:"absolute",
                    top:"610px"}}></div>
                </div>
            </div>
            <Slider style={{width:"80%",height:"700px"}} {...settings2}>
                {info.map((item) => (
                    <div>
                    <div key={item.id} className={"prod_box"}>
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
                        <span>Jeans midi cocktail dress</span>
                        <button onClick={()=>bagValue(item.id,item.img)} className={"part3_but"}>ADD TO CART</button>
                    </div>
                    </div>
                ))}
            </Slider>
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
                    {/* Actual popup */}
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
                            <button onClick={handlePlus} className={"plus"}>+</button>
                            <input className={"input1"} type="number" value={value} onChange={handleChange}/>
                            <button onClick={handleMinus} className={"minus"}>-</button>
                            <button onClick={()=>bagValue(item.id,item.img)} className="wind_but2">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            )) : null}
            <Bottom/>
        </div>
    );
}

export default ProductDet;