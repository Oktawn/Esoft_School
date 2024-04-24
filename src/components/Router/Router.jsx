import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} path="/" />
                <Route element={<About />} path="/about" />
                <Route element={<PageNotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;