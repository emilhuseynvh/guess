import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import PublicPage from "../layout/PublicPage";
import Collection from "../pages/Collection";
import Cart from "../pages/Cart";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../layout/Checkout";
import CheckoutPage from '../pages/CheckoutPage'

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route  path="/" element={<PublicPage />} >
                <Route index path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="collection/details" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route index path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route  path="/checkout" element={<Checkout />}>
                <Route index path="/checkout"  element={<CheckoutPage />} />
            </Route>
        </>
    )
)