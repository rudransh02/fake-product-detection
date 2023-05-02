import Button from '@mui/material/Button';


const Home = () =>
{
    return (
        <div className="Home">
            <h1>Home Select Login</h1>
            <Button id = "ownerbutton" variant = "outlined" href = "/OwnerLogin">Owner Login</Button>
            <Button id = "distributorbutton" variant = "outlined" href="/DistributorLogin">Distributor Login</Button>
        </div>
    );
}
 
export default Home;