import React from 'react';
import Slider from "react-slick"

function Slide(props) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "#ddd",
                    padding: "0px",
                    position:"absolute",
                    background:"none",
                    display:"flex",
                    flexDirection:"column",
                    width:"2%",
                    height:"700px",
                    top: "0",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            ><ul  style={{ margin: "0px", display:"flex",
                flexDirection:"column" }}> {dots} </ul>
            </div>
        ),
    }
    return (
        <div style={{width:"100%",height:"700px"}}>
            <Slider style={{width:"100%",height:"700px",position:"relative"}} {...settings}>
                <div>
                    <div className={"slide s1"}>
                    </div>
                </div>
                <div>
                    <div className={"slide s2"}>
                    </div>
                </div>
                <div>
                    <div className={"slide s3"}>
                    </div>
                </div>
            </Slider>

        </div>
    );
}

export default Slide;