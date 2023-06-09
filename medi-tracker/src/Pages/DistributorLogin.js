import { useState, useEffect } from "react";
import { db } from "./firebase_config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Button, Card, TextField, Typography } from "@mui/material";
import Header from "../header/Header";

function DistributorLogin() {
    const [newDistributorId, setDistributorId] = useState("");
    const [newDistributorRegion, setDistributorRegion] = useState(0);
    const [newEmail, setEmail] = useState(0);
    const [newReciveDate, setReciveDate] = useState(0);
    const [newShipmentBlock, setShipmentBlock] = useState(0);
    const [newDocID, setDocID] = useState(0);

    const [users, setusers] = useState([]);

    const usersCollectionref = collection(db, "Blockchain");
    const createUser = async () => {
        // const docRef = await addDoc(usersCollectionref, {
        //     DistributorId: newDistributorId,
        //     DistributorRegion: newDistributorRegion,
        //     Email: newEmail,
        //     ReciveDate: newReciveDate,
        //     ShipmentBlock: newShipmentBlock,
        // });
        return newDocID;
    };



    async function apiCallFunction(docID, prevHash) {
        const base = "http://127.0.0.1:5002/generate_qr_dist"
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "DistributorId": `${newDistributorId}`,
                "DistributorRegion": `${newDistributorRegion}`,
                "Email": `${newEmail}`,
                "ReciveDate": `${newReciveDate}`,
                "ShipmentBlock": `${newShipmentBlock}`,
                "docID": `${docID}`,
                "prev_hash": `${prevHash}`
            })
        };
        await fetch(base, requestOptions)
            .then((response) => response.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const dataUrl = reader.result;
                    localStorage.removeItem('qr_code');
                    localStorage.setItem('qr_code', dataUrl);
                    window.location.href = '/OwnerLogin/AddGenesisBlock/QRCode';
                };
                reader.readAsDataURL(blob);
            });
    };
    async function api() {
        await createUser().then((docID) => {
            apiCallFunction(docID, "jkjkjkj");
        }).catch((error) => {
            console.log(error);
        });
    };



    useEffect(() => {
        const getusers = async () => {
            const data = await getDocs(usersCollectionref);
            // console.log(data);
            setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getusers();
    }, []);

    return (
        <div>
            <Header />
            <div
                style={{
                    display: "flex",
                    backgroundColor: "#2E0249",
                    height: "91.5vh",
                    width: "207.5vh",
                    // transform:
                    //     "scale(0.8)" /* Adjust the scaling factor as needed */,
                    // // transformOrigin:
                    //     "top-left" /* Set the origin point for the scaling */,
                    // width: "125%",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "90px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ color: "#FFFFFF", fontWeight: "bold" }}
                    >
                        <span className="rsr">Distributor</span> Login Page
                    </Typography>
                </div>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: "90px",
                    }}
                >
                    <Card
                        sx={{
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "5px",
                            textAlign: "center",
                            padding: "20px",
                            width: "90vh",
                        }}
                        variant="outlined"
                    >
                        {/* Distributor Login form */}

                        <TextField
                            required
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                                marginTop: "10px",
                                marginBottom: "40px",
                                marginLeft: "30px",
                                marginRight: "30px",
                                display: "grid",
                            }}
                            label="Distributor ID"
                            onChange={(event) => {
                                setDistributorId(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "40px",
                                marginLeft: "30px",
                                backgroundColor: "white",
                                borderRadius: "5px",
                                marginRight: "30px",
                                marginBottom: "40px",
                                display: "grid",
                            }}
                            label="Email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "40px",
                                marginLeft: "30px",
                                marginRight: "30px",
                                marginBottom: "40px",
                                backgroundColor: "white",
                                borderRadius: "5px",
                                display: "grid",
                            }}
                            label="Shipment Block ID"
                            onChange={(event) => {
                                setShipmentBlock(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "40px",
                                marginLeft: "30px",
                                marginRight: "30px",
                                marginBottom: "40px",
                                backgroundColor: "white",
                                borderRadius: "5px",
                                display: "grid",
                            }}
                            label="Region Of Distribution"
                            onChange={(event) => {
                                setDistributorRegion(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                position: "relative",
                                marginLeft: "30px",
                                marginRight: "30px",
                                marginTop: "40px",
                                backgroundColor: "white",
                                borderRadius: "5px",
                                marginBottom: "40px",
                                display: "grid",
                            }}
                            label="Date Of Shipment Received"
                            onChange={(event) => {
                                setReciveDate(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            sx={{
                                position: "relative",
                                marginLeft: "30px",
                                marginRight: "30px",
                                marginTop: "40px",
                                backgroundColor: "white",
                                borderRadius: "5px",
                                marginBottom: "40px",
                                display: "grid",
                            }}
                            label="Document ID"
                            onChange={(event) => {
                                setDocID(event.target.value);
                            }}
                        />

                        <Button
                            variant="contained"
                            id="ownerbutton"
                            sx={{
                                backgroundColor: "#A91079",
                                color: "#FFFFFF",
                                padding: "8px 16px",
                                marginRight: "9px",
                                paddingRight: "50px",
                                paddingLeft: "50px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                "&:hover": {
                                    backgroundColor: "#2E0249",
                                },
                            }}
                            onClick={api}
                        >
                            SUMBIT
                        </Button>
                        {users.map((user) => {
                            return (
                                <div>
                                    {/* {" "}
                        <h2>Name: {user.Name}</h2>
                        <h2>Age: {user.Age}</h2> */}
                                </div>
                            );
                        })}
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default DistributorLogin;
