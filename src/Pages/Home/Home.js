
import { Container, Grid } from '@mui/material';
import React from 'react';
import DisplayNotes from './DisplayNotes';
import DisplayTags from './DisplayTags';
import InputForm from './InputForm';

//component for Home page
const Home = () => {
    return (
        <Container sx={ { my: 10 } }>
            <InputForm />
            <Grid container spacing={ 4 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <DisplayTags />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                    <DisplayNotes />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;