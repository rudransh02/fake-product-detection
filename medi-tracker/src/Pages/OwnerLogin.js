import Button from "@mui/material/Button";
import Header from "../header/Header";

const OwnerLogin = () => {
    return (
        <div>
            <Header />
            <div className="pageContainer">
                <div className="container">
                    <h1 className="heading">Owner Login</h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "16px",
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "#A91079",
                                color: "#FFFFFF",
                                padding: "8px 16px",
                                marginRight: "9px",
                                "&:hover": {
                                    backgroundColor: "#2E0249",
                                },
                            }}
                            id="addgenesisbutton"
                            variant="outlined"
                            href="/OwnerLogin/AddGenesisBlock"
                        >
                            Add New Genesis Block{" "}
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: "#A91079",
                                color: "#FFFFFF",
                                padding: "8px 16px",
                                marginLeft: "9px",
                                "&:hover": {
                                    backgroundColor: "#2E0249",
                                },
                            }}
                            id="viewrequestbutton"
                            variant="outlined"
                            href="/OwnerLogin/ViewPendingRequests"
                        >
                            View Pending Requests
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerLogin;
