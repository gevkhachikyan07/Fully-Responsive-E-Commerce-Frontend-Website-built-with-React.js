import React from 'react';
import Menu from "../Components/Menu";
import Bottom from "../Components/Bottom";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cartMinus, cartPlus, clear_cart, deleteFromBag} from "../assets/store/actions/action";

function Cart() {
    const dispatch = useDispatch();
    const bagData = useSelector(state => state.bagData);
    const handleMinus = (id) => {
        dispatch(cartMinus(id))
    }
    const handlePlus = (id) => {
        dispatch(cartPlus(id))
    }
    const clearCart=()=>{
        dispatch(clear_cart());
        localStorage.removeItem("bagData");
    }
    const del =(id)=>{
        dispatch(deleteFromBag(id))
    }
    return (
        <div>
            <Menu/>
            <div className={"cart_part1"}>
                <div  className={"cart_box"}>
                    <div className={"product_div"}>
                        <span style={{marginRight:"120px"}}>Product</span>
                        <div style={{width:'230px',height:'50px',
                                    display:"flex",justifyContent:"space-between",alignItems:"center",
                                    marginLeft:"200px",position:"relative"
                        }}>
                            <span style={{marginLeft:"-37px"}}>Price</span>
                            <span style={{position:'absolute',right:'76px'}}>Quantity</span>
                        </div>
                    </div>

                        {bagData.length !== 0 ?bagData.map((item) => (

                                    <div style={{width:"100%",height:"150px",
                                                display:"flex",alignItems:"center",
                                                justifyContent:"space-evenly"}} key={item.id}>
                                        <div style={{width:"150px",height:"140px",background:`url(${item.img})`,backgroundSize:"cover"}}></div>
                                            <span>Jeans midi cocktail dress</span>
                                            <span>$23.99</span>
                                        <div>
                                        <button onClick={()=>handleMinus(item.id)} className={"minus1"}>-</button>
                                            {item.num}
                                        <button onClick={()=>handlePlus(item.id)} className={"plus1"}>+</button>
                                        </div>
                                        <button style={{background:"none",border:"none",cursor:"pointer"}} onClick={()=>del(item.id)}>x</button>
                                    </div>

                        ))
                            :
                            <span style={{fontSize:"20px"}}>The Cart is Empty</span>
                        }
                </div>
            </div>
            <div className={"cart_part2"}>
                <div className={"cart_box2"}>
                    <div className={"cart_box2_part1"}>
                        <button className={"cart_box2_but1"}>
                            Continue Shopping
                        </button>
                        <button onClick={clearCart} className={"cart_box2_but2"}>
                            Clear Cart
                        </button>
                    </div>
                    <div className={"cart_box2_part2"}>
                        <div className={"cart_div"}>
                            <span style={{fontSize:"25px"}}>Cupon code</span>
                            <span style={{opacity:"0.7"}}>Enter your cupone code</span>
                            <div style={{marginTop:"50px"}}>
                                <input style={{height:"36px"}} type={"text"} placeholder={"#559ab12"}/>
                                <button style={{width:"100px",height:"41px",
                                color:"white",background:"#FD084D",border:"none"}}>
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className={"cart_div"}>
                            <span style={{fontSize:"25px"}}>Shipping Method</span>
                            <span style={{opacity:"0.7"}}>Select the one you want</span>

                                <label>
                                    <input type={"radio"} name={"p"} style={{width:"30px",marginTop:"30px",position:'relative'}} />
                                    Next day delivery
                                    <span style={{position:"relative",right:"-30px"}}>$4.99</span>
                                </label>
                            <label>
                                <input type={"radio"} name={"p"} style={{width:"30px",marginTop:"30px"}} />
                                Standard delivery
                                <span style={{position:"relative",right:"-30px"}}>$1.99</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"p"} style={{width:"30px",marginTop:"30px",position:'relative'}} />
                                Personal Pickup
                                <span style={{position:"relative",right:"-40px",}}>Free</span>
                            </label>
                        </div>
                        <div className={"cart_div"}>
                            <span style={{fontSize:"25px"}}>Cart total</span>
                            <span style={{opacity:"0.7"}}>Final info</span>
                            <div style={{width:"100%",height:"232px",background:"#F4F2F8",marginTop:"30px"}}>
                                <pre style={{fontSize:"20px"}}> Subtotal             $59.90</pre>
                                <pre style={{fontSize:"20px"}}> Shipping             Free</pre>
                                <pre style={{fontSize:"20px"}}> Total                $59.90</pre>
                                <Link to={"/checkout"}><button className={"checkout_but2"}>Proceed To Checkout</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Bottom/>
        </div>
    );
}

export default Cart;