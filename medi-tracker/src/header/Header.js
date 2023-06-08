import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div
            style={{
                backgroundColor: "#2e0249",
                border: "1px solid #12011c",
                height: "65px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "50px",
            }}
        >
            <Link to="/">
                <img
                    style={{
                        height: "15vh",
                        width: "25vh",
                        paddingLeft: "80px",
                        paddingTop: "10px",
                    }}
                    src={logo}
                    alt="Company Logo"
                />
            </Link>
            <ul className="navbar-links">
                <a href="/">Home</a>
                
                <a href="/OwnerLogin/AddGenesisBlock">Add Genesis Block</a>

                <a href="/DistributorLogin">Distributor Login</a>
            </ul>
        </div>
    );
};

export default Header;
