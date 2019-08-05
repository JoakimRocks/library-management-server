import React from "react";
import {Link} from "@reach/router";

function NavBar() {
    return (
    < div className = "lm-container" >
        <nav className = "lm-button">
            <span>
                <Link to="/">Home</Link>
            </span>
        </nav>
        
        <nav className="lm-nav">
                <Link to="/">See All</Link>
            <span style={{marginLeft:250}}>
                <Link to="/Admin">Admin</Link>
            </span>
        </nav>
    </div>
    );
}
export default NavBar;