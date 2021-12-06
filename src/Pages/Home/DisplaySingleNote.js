import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const DisplaySingleNote = ( { note } ) => {
    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            <Card sx={ { minWidth: 275 } }>
                <CardContent>
                    <Typography variant='h6' sx={ { color: '#3B4DA0', fontWeight: 'bold' } } gutterBottom>
                        { note?.noteTitle }
                    </Typography>
                    <Typography variant="body">
                        { note?.noteData }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Delete Note</Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default DisplaySingleNote;