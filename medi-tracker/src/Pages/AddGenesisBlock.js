import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const AddGenesisBlock = () =>
{
    return (
        <div className="AddGenesisBlock">

            <h1>Add New Genesis Block Page</h1>

            <Card sx={{
                border: 'none',
                textAlign: 'center',
                marginLeft: '350px',
                marginRight: '350px'
            }} variant='outlined'>

                <TextField required sx={{
                    position: 'relative',
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid'
            }} label="Full Name"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid'
            }} label="Email"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid'
            }} label="Cloth Category"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid'
            }} label="Cloth Material"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid'
            }} label="Cloth Color"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid'
            }} label="Cloth Size"/>

                <TextField required sx={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    display: 'grid',
                }} label="Cloth Cost"/>

                <Button sx={{
                     "&:hover": {
                        border: "2px solid",
                        backgroundColor: '#D3DEFF'
                    },
                    paddingRight: '50px',
                    paddingLeft: '50px',
                    border: 'solid 2px',
            }} size='large' variant='outlined'>SUMBIT</Button>

            </Card>

        </div>
    );
}
 
export default AddGenesisBlock;