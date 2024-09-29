import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/MainPage/Home";
import PublicPage from "../layout/PublicPage";
import Collection from "../pages/MainPage/Collection";
import Cart from "../pages/MainPage/Cart";
import Details from "../pages/MainPage/Details";
import Login from "../pages/MainPage/Login";
import Register from "../pages/MainPage/Register";
import Checkout from "../layout/Checkout";
import CheckoutPage from '../pages/MainPage/CheckoutPage'
import DashboardLogin from "../pages/Dashboard/DashboardLogin";
import Auth from "./Auth";
import AdminLayout from "../layout/AdminLayout";
import DashboardProduct from "../pages/Dashboard/DashboardProduct";
import DashboardCategory from "../pages/Dashboard/DashboardCategory";
import DashboardBrand from "../pages/Dashboard/DashboardBrand";
import Account from "../pages/MainPage/Account";
import Order from "../Components/MainPage/Account/Order";
import Wishlist from "../pages/MainPage/Wishlist";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import StoreLocator from "../pages/MainPage/StoreLocator";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicPage />} >
                <Route index path="/" element={<Home />} />
                <Route path="/products/all" element={<Collection />} />
                <Route path="/products/all/details/:id" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route index path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/store-locator" element={<StoreLocator />} />
            </Route>
            <Route path="/checkout" element={<Checkout />}>
                <Route index path="/checkout" element={<CheckoutPage />} />
            </Route>
            <Route path="dashboard" element={<Auth><AdminLayout /></Auth>}>
                <Route index element={<DashboardProduct />} />
                <Route path="category" element={<DashboardCategory />} />
                <Route path="brand" element={<DashboardBrand />} />
            </Route>
        </>
    )
)