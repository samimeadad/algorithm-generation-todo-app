
import { Container, Grid } from '@mui/material';
import React from 'react';
import DisplayNotes from './DisplayNotes';
import DisplayTags from './DisplayTags';
import InputForm from './InputForm';

const Home = () => {
    return (
        <Container sx={ { my: 10 } }>
            <InputForm />
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <DisplayTags />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                    <DisplayNotes />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;