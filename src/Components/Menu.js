import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteFromBag} from "../assets/store/actions/action";
import Share from "../styledComponents/Share";

function Menu() {


    const[click,setClick] = useState(false);
    const [click2,setClick2] = useState(false);
    const [click3,setClick3] = useState(false);
    const bagData = useSelector(state => state.bagData);
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
    const dispatch = useDispatch();
    const menuPanel =()=>{
        setClick(!click)
    }
    const openPages=()=>{
        setClick3(!click3)
    }
    const bagGoods =()=> {
        setClick2(!click2)
    }
    const del =(id)=>{
            dispatch(deleteFromBag(id));
    }

    const config = {
        1: {
            pos: [150, -20, -190, -360, -530],
            white: -690,
            active: 1
        },
        2: {
            pos: [-20, -80, -250, -420, -590],
            white: -750,
            active: 2
        },
        3: {
            pos: [-20, -190, -280, -450, -620],
            white: -780,
            active: 3
        },
        4: {
            pos: [-20, -190, -360, -450, -620],
            white: -780,
            active: 4
        },
        5: {
            pos: [-20, -190, -360, -530, -590],
            white: -750,
            active: 5
        },
        6: {
            pos: [-20, -190, -360, -530, -700],
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
        <div className={"menu"} style={{width:'100%',height:'410px',display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className={"menu_part1"}>
                <div className={'menu_logo'}>
                    <img className={"logo_img"} src={"https://themewagon.github.io/karl/img/core-img/logo.png"} width="140px" height="50px" />
                </div>
                <div className={'menu_right'}>
                    <div onClick={bagGoods} className={"bag_img"}></div>
                    <div className={"bag_circle"}>{bagData.length}</div>
                    <div onClick={menuPanel} className={'menu_circle'}>
                        <div className={'menu_gicBox'}>
                            <div className={'menu_gic'}></div>
                            <div className={'menu_gic'}></div>
                            <div className={'menu_gic'}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"menu_part2"}>
                <div className={'menu_share'}>
                    <Share/>
                </div>
                <div className={'menu_links'}>
                    <Link className={"menu_link"} to="/">Home</Link>
                    <div className={"divPage"} style={{fontSize:"20px",cursor:"pointer"}} onClick={openPages}>Pages</div>
                    {click3 ?
                        <div className={"windPage"} style={{
                                width:"140px",height:"145px",
                                position:"absolute",
                                top:"170px",
                                left:"440px",
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                                background:"white",
                        }}>
                           <Link className={"menu_link"} to={"/"}>
                               <div className={"pages_1"}>HOME</div>
                           </Link>
                            <Link className={"menu_link"} to={"/shop"}>
                                <div className={"pages_1"}>SHOP</div>
                            </Link>
                            <Link className={"menu_link"} to={"/product"}>
                                <div className={"pages_1"}>PRODUCT DETAILS</div>
                            </Link>
                            <Link className={"menu_link"} to={"/cart"}>
                                <div className={"pages_1"}>CART</div>
                            </Link>
                            <Link className={"menu_link"} to={"/checkout"}>
                                <div className={"pages_1"}>CHECKOUT</div>
                            </Link>

                        </div>
                        :null }
                    <Link className={"menu_link"} to="/shop">Shop</Link>
                    <Link className={"menu_link"} to="/cart">Cart</Link>
                    <Link className={"menu_link"} to="/product">Product Details</Link>
                </div>
                <div className={'menu_phone'}>
                    <div className={'phone_div'}>
                        +34 44 124 716
                    </div>
                </div>
            </div>
            <div className={"menu_bottom"}>
                <div style={{background:"#B8B8B8"}} className={'menu_bottom_div'}>
                    <span className={'menu_bot_text1'}>Free Shipping & Returns</span>
                    <span className={'menu_bot_text2'}>BUY NOW</span>
                </div>
                <div style={{background:"#F6084B"}} className={'menu_bottom_div'}>
                    <span className={'menu_bot_text1'}>20% Discount for all dresses</span>
                    <span className={'menu_bot_text2'}>USE CODE: Colorlib</span>

                </div>
                <div style={{background:"#3A3A3A"}} className={'menu_bottom_div'}>
                    <span className={'menu_bot_text1'}>
                        20% Discount for students
                    </span>
                    <span className={'menu_bot_text2'}>USE CODE: Colorlib</span>

                </div>
            </div>

                <div  className={'menu_panel'} style={click ?{transform: 'translateX(0%)',transition:"0.5s"}:{transform: 'translateX(-350px)',transition:"0.5s"}} >
                    <div onClick={menuPanel} className={'menu_panel_close'}>x</div>
                    <div className={"shop_left"} style={{width:'100%'}}>
                    <span className={"menu_panel_text"} style={{fontSize:"20px",marginTop:"70px",marginLeft:"10px"}}>Categories</span>
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
                            <span className={"details_div_t1"} style={{marginLeft:"30px",fontSize:'18px'}}>Woman Wear</span>
                            <svg style={{position:'absolute',right:'10px',transition:'0.2s',opacity:deg1}}
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
                            <span className={"details_div_t1"}  style={{marginLeft:"30px",fontSize:'18px'}}>Man Wear</span>
                            <svg style={{position:'absolute',right:'10px',transition:'0.2s',opacity:deg2}}
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
                            <span className={"details_div_t1"}  style={{marginLeft:"30px",fontSize:'18px'}}>Children</span>
                            <svg style={{position:'absolute',right:'10px',transition:'0.2s',opacity:deg3}}
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
                            <span className={"details_div_t1"}  style={{marginLeft:"30px",fontSize:'18px'}}>Bags & Purses</span>
                            <svg style={{position:'absolute',right:'10px',transition:'0.2s',opacity:deg4}}
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
                            <span className={"details_div_t1"}  style={{marginLeft:"30px",fontSize:'18px'}}>Eyewear</span>
                            <svg style={{position:'absolute',right:'10px',transition:'0.2s',opacity:deg5}}
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
                            <span className={"details_div_t1"}  style={{marginLeft:"30px",fontSize:'18px'}}>Footwear</span>
                            <svg style={{position:'absolute',right:'10px',transition:'0.2s',opacity:deg6}}
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

                    </div>
                </div>
            {click2 ?
                <div className={"bagDiv"}>
                    {bagData.length === 0 ?
                        <span style={{opacity:'0.8',marginLeft:'45px'}}>
                            The cart is empty
                        </span>
                        : null}
                    {bagData.map((item,index)=>(
                            index < 3 ?
                                <div key={item.id} className={"bagProd"}>
                                    <div className={"bagProdImg"} style={{background:`url(${item.img})`,backgroundSize:"cover"}} >
                                    </div>
                                    <button style={{position:"absolute",right:"0"
                                        ,top:"0",background:"none",border:"none",cursor:"pointer"}} onClick={()=>del(item.id)}>x</button>
                                    <span className={"bagDivt1"} style={{fontSize:"13px"}}>Jeans midi cocktail dress</span>
                                    <span className={"bagDivt2"} style={{position:"absolute",top:"40px",left:"65px",fontSize:"13px"}}>$23.99</span>
                                    <span className={"bagDivt3"} style={{fontSize:'13px',position:'absolute',top:'8px',left:'65px'}}>({item.num})</span>
                                </div>:null
                    ))}
                    {bagData.length >= 4 ?
                        <span style={{marginTop:"2px",opacity:"0.9",fontSize:"15px",marginLeft:"10px"}}>more (+ {bagData.length - 3}) </span>
                        :null}
                    <div className={"bagProdBut"}>
                        <Link to={"/cart"}><button className={"cart_but"}>Cart</button></Link>
                        <Link to={"/checkout"}> <button className={"checkout_but"}>Checkout</button></Link>
                    </div>

                </div>
                :null}

        </div>
    );
}

export default Menu;