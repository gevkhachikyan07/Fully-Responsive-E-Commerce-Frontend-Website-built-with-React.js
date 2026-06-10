import React from 'react';
import Menu from "../Components/Menu";
import Slide from "../Components/Slide";
import Part2 from "../Components/Part2";
import Part3 from "../Components/Part3";
import Part4 from "../Components/Part4";
import Slide2 from "../Components/Slide2";
import Bottom from "../Components/Bottom";
function Home() {
        return (
        <div>
            <Menu/>
            <Slide/>
            <Part2/>
            <Part3/>
            <Part4/>
            <Slide2/>
            <Bottom/>
        </div>
    );
}

export default Home;