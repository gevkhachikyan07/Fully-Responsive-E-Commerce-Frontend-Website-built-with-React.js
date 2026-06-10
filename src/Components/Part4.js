import React from 'react';

function Part4(props) {
    return (
        <div style={{width:"100%",height:"600px",position:"relative",background:"url(https://themewagon.github.io/karl/img/bg-img/bg-5.jpg)",backgroundSize:"100% 100%"}}>
                <div style={{width:"550px",height:"350px",position:"absolute",background:"black",opacity:"0.7",
                    right:"120px",top:"100px",display:"flex",flexDirection:"column",justifyContent:"center",color:"white"}}>
                    <span style={{fontSize:"55px",marginLeft:"30px",marginBottom:"10px"}}>WHITE-T-SHIRT</span>
                    <span style={{marginLeft:"30px",marginBottom:"20px"}}>* Free shipping until 25 Dec 2017</span>
                    <span style={{color:"#CB063E",fontSize:"25px",marginLeft:"30px",marginBottom:"40px"}}><del style={{color:"white"}}>$25.90</del>  $15.90  </span>
                    <button className={"part2_but"}>SHOP NOW</button>
                </div>
        </div>
    );
}

export default Part4;