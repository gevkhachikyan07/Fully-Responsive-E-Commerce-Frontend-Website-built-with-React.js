import React from 'react';

function Part2(props) {
    return (
        <div style={{marginTop:"30px",width:'100%',height:'600px',display:'flex'}}>
            <div style={{width:"50%",height:"600px",
                    background:"url(https://themewagon.github.io/karl/img/bg-img/bg-2.jpg)",
                    backgroundSize:"cover",display:"flex",flexDirection:"column",justifyContent:"center",position:'relative'}}>
                <span className={"part2_text1"}>On Accesories</span>
                <span className={"part2_text2"}>Sale<br/> 30%</span>
                <button className={"part2_but"}>SHOP NOW</button>
                <div className={"bg_pink"}>
                    <span className={"part2_text1"}>On Accesories</span>
                    <span className={"part2_text2"}>Sale<br/> 30%</span>
                    <button className={"part2_but"}>SHOP NOW</button>
                </div>
            </div>
            <div style={{width:"50%",height:"600px",
                background:"url(https://themewagon.github.io/karl/img/bg-img/bg-4.jpg)",
                backgroundSize:"100% 100%",display:"flex",flexDirection:"column",justifyContent:"center",position:'relative'}}>
                <span className={"part2_text1"}>In Bags excepting the new collection</span>
                <span className={"part2_text2"}>Designer<br/> bags</span>
                <button className={"part2_but"}>SHOP NOW</button>
                <div className={"bg_pink"}>
                    <span className={"part2_text1"}>In Bags excepting the new collection</span>
                    <span className={"part2_text2"}>Designer<br/> bags</span>
                    <button className={"part2_but"}>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Part2;