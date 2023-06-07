import Button from "@mui/material/Button";

const Home = () => {
    return (
        <div className="pageContainer">
            <div className="container">
                <h1 className="heading">
                    Welcome to <span className="rsr">RSR</span> Company
                </h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "16px",
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
        /* <div className="content">
                <button className="button">Button 1</button>
                <button className="button">Button 2</button>
            </div> */
        // <div className="Home">
        //     <h1>Home Select Login</h1>
        //     <Button id = "ownerbutton" variant = "outlined" href = "/OwnerLogin">Owner Login</Button>
        //     <Button id = "distributorbutton" variant = "outlined" href="/DistributorLogin">Distributor Login</Button>
        // </div>
    );
};

export default Home;
