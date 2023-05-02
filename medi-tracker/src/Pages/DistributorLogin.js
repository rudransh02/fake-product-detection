import Card from '@mui/material/Card';
import { TextField } from '@mui/material';

import Button from '@mui/material/Button';

const DistributorLogin = () =>
{
    return (
        <div className="DistributorLogin">
            <h1>Distributor Login Page</h1>

            <Card sx={{
                // backgroundColor: 'rgb(199, 199, 199)',
                marginTop: '20px',
                borderRadius: '5px',
                border: 'none',
                textAlign: 'center',
                marginLeft: '350px',
                marginRight: '350px'
            }} variant='outlined'>

                <TextField required sx={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    marginTop: '40px',
                    marginBottom: '40px',
                    marginLeft: '30px',
                    marginRight: '30px',
                    display: 'grid',
                }} label="Distributor ID"/>
                
                <TextField required sx={{
                    marginTop: '40px',
                    marginLeft: '30px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    marginRight: '30px',
                    marginBottom: '40px',
                    display: 'grid'
                }} label="Email"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginLeft: '30px',
                    marginRight: '30px',
                    marginBottom: '40px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    display: 'grid',
                }} label="Shipment Block ID"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginLeft: '30px',
                    marginRight: '30px',
                    marginBottom: '40px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    display: 'grid',
                }} label="Region Of Distribution"/>

                <TextField required sx={{
                    position: 'relative',
                    marginLeft: '30px',
                    marginRight: '30px',
                    marginTop: '40px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    marginBottom: '40px',
                    display: 'grid'
                }} label="Date Of Shipment Received"/>

                <Button sx={{
                    "&:hover": {
                        border: "2px solid",
                        backgroundColor: '#D3DEFF'
                    },
                    paddingRight: '50px',
                    paddingLeft: '50px',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: 'solid 2px',
                    marginBottom: '20px'
            }} size='large' variant='outlined'>SUMBIT</Button>

            </Card>

        </div>
    );
}
 
export default DistributorLogin;