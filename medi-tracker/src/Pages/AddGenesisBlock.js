import { useState, useEffect } from "react";
import { db } from "./firebase_config";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Button, Card, TextField, Typography } from "@mui/material";
import Header from "../header/Header";

function AddGenesisBlock() {
    const navigate = useNavigate();
    const [newFullName, setFullName] = useState("");
    const [newEmail, setEmail] = useState(0);
    const [newClothSize, setClothSize] = useState(0);
    const [newClothMaterial, setClothMaterial] = useState(0);
    const [newClothCost, setClothCost] = useState(0);
    const [newClothColor, setClothColor] = useState(0);
    const [newClothCategory, setClothCategory] = useState(0);
    const [newDistAppendAllowed, setDistAppendAllowed] = useState(0);
    const [newDocId, setNewDocId] = useState("");
    const [users, setusers] = useState([]);

    const usersCollectionref = collection(db, "Blockchain");
    const createUser = async () => {
        const docRef = await addDoc(usersCollectionref, {
            Name: newFullName,
            Email: newEmail,
            ClothSize: newClothSize,
            ClothMaterial: newClothMaterial,
            ClothCost: newClothCost,
            ClothColor: newClothColor,
            ClothCategory: newClothCategory,
            // DistAppendAllowed: newDistAppendAllowed,
        });
        setNewDocId(docRef.id);
        return docRef.id;
    };
    useEffect(() => {
        const getusers = async () => {
            const data = await getDocs(usersCollectionref);
            setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getusers();
    }, []);



    async function apiCallFunction(docID) {
        const base = "http://127.0.0.1:5002/generate_qr_genesis"
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": `${newFullName}`,
                "email": `${newEmail}`,
                "cloth_category": `${newClothCategory}`,
                "cloth_material": `${newClothMaterial}`,
                "colth_color": `${newClothColor}`,
                "colth_size": `${newClothSize}`,
                "colth_price": `${newClothCost}`,
                "docID": `${docID}`
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
                    // const valueToPass = 'example value'; // Replace 'example value' with the value you want to pass
                    const url = new URL('/OwnerLogin/AddGenesisBlock/QRCode', window.location.href);
                    url.searchParams.set('value', docID);
                    window.location.href = url.href;
                };
                reader.readAsDataURL(blob);
            });
    };
    async function api() {
        await createUser().then((docID) => {
            apiCallFunction(docID)
                .then(() => {
                    navigate("/OwnerLogin/AddGenesisBlock/QRCode");
                });
        }).catch((error) => {
            console.log(error);
        });
    };


    return (
        <div>
            <Header />

            <div
                style={{
                    display: "flex",
                    backgroundColor: "#2E0249",
                    height: "91.5vh",
                    width: "207.5vh",
                    overflow: "hidden",
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
                        Add <span className="rsr">Genesis</span> Block
                    </Typography>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: "70px",
                    }}
                >
                    <Card
                        sx={{
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "5px",
                            textAlign: "center",
                            padding: "5px",
                            width: "90vh",
                            // marginTop:"-100px"
                        }}
                    >
                        {/* Owner Login form */}

                        <TextField
                            required
                            sx={{
                                marginRight: "30px",
                                marginLeft: "30px",
                                marginTop: "40px",
                                marginBottom: "10px",
                                display: "grid",
                            }}
                            label="Full Name"
                            onChange={(event) => {
                                setFullName(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "15px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                marginBottom: "10px",
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
                                marginTop: "12px",
                                marginBottom: "10px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                display: "grid",
                            }}
                            label="Cloth Category"
                            onChange={(event) => {
                                setClothCategory(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "12px",
                                marginBottom: "10px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                display: "grid",
                            }}
                            label="Cloth Material"
                            onChange={(event) => {
                                setClothMaterial(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "12px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                marginBottom: "10px",
                                display: "grid",
                            }}
                            label="Cloth Color"
                            onChange={(event) => {
                                setClothColor(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "12px",
                                marginBottom: "10px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                display: "grid",
                            }}
                            label="Cloth Size"
                            onChange={(event) => {
                                setClothSize(event.target.value);
                            }}
                        />

                        <TextField
                            required
                            sx={{
                                marginTop: "12px",
                                marginBottom: "10px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                display: "grid",
                                color: "white",
                            }}
                            label="Cloth Cost"
                            onChange={(event) => {
                                setClothCost(event.target.value);
                            }}
                        />
                        {/* <TextField
                            required
                            sx={{
                                marginTop: "12px",
                                marginBottom: "10px",
                                marginRight: "30px",
                                marginLeft: "30px",
                                display: "grid",
                                color: "white",
                            }}
                            label="Distributor Append Allowed"
                            onChange={(event) => {
                                setDistAppendAllowed(event.target.value);
                            }}
                        /> */}

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
                            // onClick={createUser}
                            onClick={api}
                        >
                            SUMBIT
                        </Button>
                        {users.map((user) => (
                            <div key={user}></div>
                        ))}

                        {newDocId && (
                            <Typography variant="body1">
                                Document ID: {newDocId}
                            </Typography>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default AddGenesisBlock;
