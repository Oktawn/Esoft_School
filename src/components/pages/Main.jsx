import React from "react";
import { Link } from "react-router-dom"

function Main() {
    return (
        <div>
            <h1>Main</h1>
            <hr />
            <p><Link to="/about">go to about</Link></p>
            <Link to="/404">empty page</Link>
        </div>
    );
}

export default Main;