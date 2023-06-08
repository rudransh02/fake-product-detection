import Button from "@mui/material/Button";
import Header from "../header/Header";

const Home = () => {
    return (
        <div>
                <Header />
            <div className="pageContainer">
                <div className="container">
                    <h1 className="heading">
                        Welcome to <span className="rsr">RSR</span> Company
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1px",
                        }}
                    >
                        <Button
                            variant="contained"
                            id="ownerbutton"
                            sx={{
                                backgroundColor: "#A91079",
                                color: "#FFFFFF",
                                padding: "8px 16px",
                                marginRight: "9px",
                                "&:hover": {
                                    backgroundColor: "#2E0249",
                                },
                            }}
                            href="/OwnerLogin"
                        >
                            Owner Login
                        </Button>
                        <Button
                            variant="contained"
                            id="distributorbutton"
                            sx={{
                                backgroundColor: "#A91079",
                                color: "#FFFFFF",
                                padding: "8px 16px",
                                marginLeft: "9px",
                                "&:hover": {
                                    backgroundColor: "#2E0249",
                                },
                            }}
                            href="/DistributorLogin"
                        >
                            Distributor Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
