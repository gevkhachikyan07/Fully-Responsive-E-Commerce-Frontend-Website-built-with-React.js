import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDet from "./Pages/ProductDet";
import Shop from "./Pages/Shop";

function App(props) {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false

        });
        AOS.refreshHard();
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/checkout"} element={<Checkout/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/product"} element={<ProductDet/>}/>
                <Route path={"/shop"} element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;