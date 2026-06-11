import React from 'react';
import Slider from "react-slick"
function Slide2(props) {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    return (
        <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <span className={"slider2_t1"} style={{marginTop:"30px",fontSize:"50px"}}>TESTIMONIALS</span>
            <Slider className={"slider2"} {...settings} style={{width:'80%',height:'400px'}} >
                <div>
                    <div className={"slider2_d1"} style={{width:"90%",height:"400px",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                        <span className={"slider2_t2"} style={{fontSize:"20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o
                            fficia deserunt mollit anim id est laborum.
                        </span>
                        <div style={{width:"250px",height:"100px",display:"flex",justifyContent:"space-evenly",alignItems:'center'}}>
                            <div className={"slider2_img"} style={{width:"70px",height:"70px",borderRadius:"50%",background:"url(https://themewagon.github.io/karl/img/bg-img/tes-1.jpg)",backgroundSize:"cover"}}></div>
                            <span className={"slider2_img_t"}>Dacota Williams<br/>Los angeles client</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider2_d1"} style={{width:"90%",height:"400px",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                        <span className={"slider2_t2"} style={{fontSize:"20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o
                            fficia deserunt mollit anim id est laborum.
                        </span>
                        <div style={{width:"250px",height:"100px",display:"flex",justifyContent:"space-evenly",alignItems:'center'}}>
                            <div className={"slider2_img"} style={{width:"70px",height:"70px",borderRadius:"50%",background:"url(https://themewagon.github.io/karl/img/bg-img/tes-1.jpg)",backgroundSize:"cover"}}></div>
                            <span className={"slider2_img_t"}>Dacota Williams<br/>Los angeles client</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"slider2_d1"} style={{width:"90%",height:"400px",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                        <span className={"slider2_t2"} style={{fontSize:"20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o
                            fficia deserunt mollit anim id est laborum.
                        </span>
                        <div style={{width:"250px",height:"100px",display:"flex",justifyContent:"space-evenly",alignItems:'center'}}>
                            <div className={"slider2_img"} style={{width:"70px",height:"70px",borderRadius:"50%",background:"url(https://themewagon.github.io/karl/img/bg-img/tes-1.jpg)",backgroundSize:"cover"}}></div>
                            <span className={"slider2_img_t"}>Dacota Williams<br/>Los angeles client</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Slide2;