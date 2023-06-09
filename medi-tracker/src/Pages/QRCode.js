import { Button, Typography } from "@mui/material";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const QRCode = () => {
    const qr = localStorage.getItem('qr_code');
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');
    return (
        <div>
            <Header />
            <div className="pageContainer">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{ color: "white" }}>QR Code</h1>
                    <img
                        style={{ height: "320px", width: "310px" }}
                        src={qr}
                        alt="QR Code"
                    />
                    <Link to = "/OwnerLogin/">
                    <Button
                        sx={{
                            backgroundColor: "#A91079",
                            color: "#FFFFFF",
                            padding: "8px 11px",
                            marginTop: "20px",
                            "&:hover": {
                                backgroundColor: "#2E0249",
                            },
                        }}
                        id="viewrequestbutton"
                        variant="outlined"
                    >
                        Back to Owner Page
                    </Button>
                    </Link>
                    <Typography>
                        {value}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default QRCode;
