import image from "../images/image.jpg";
import { Button } from "@mui/material";
import Header from "../header/Header";

const QRCode = () => {
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
                        src={image}
                        alt="QR Code"
                    />
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
                        href="/OwnerLogin/"
                    >
                        Back to Owner Page
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QRCode;
