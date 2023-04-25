import Button from '@mui/material/Button';

const OwnerLogin = () =>
{
    return (
        <div className="OwnerLogin">
            <h1>Owner Login Page</h1>
            <Button id = "addgenesisbutton" variant = "outlined" href = "/OwnerLogin/AddGenesisBlock">Add New Genesis Block</Button>
            <Button id = "viewrequestbutton" variant = "outlined" href="/OwnerLogin/ViewPendingRequests">View Pending Requests</Button>
        </div>
    );
}
 
export default OwnerLogin;