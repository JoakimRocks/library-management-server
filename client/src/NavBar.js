import React from "react";
import {Link} from "@reach/router";

function NavBar() {
    return (
    < div className = "lm-body" >
        <nav className = "lm-navtitle" >
            <span className = "lm-title">
                Library Management System 
                </span>
        </nav> 
        <nav className = "lm-button">
            <span>
                <Link to="/">Home</Link>
            </span>

        </nav>
        
        <nav className="lm-seeAll">
            <span>
                <Link to="/seeAll">See All</Link>
            </span>
        </nav>
    </div>
    );
}
export default NavBar;