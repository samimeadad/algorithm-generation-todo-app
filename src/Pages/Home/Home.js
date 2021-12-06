
import { Container } from '@mui/material';
import React from 'react';
import DisplayNotes from './DisplayNotes';
import InputForm from './InputForm';

const Home = () => {
    return (
        <Container sx={ { my: 10 } }>
            <InputForm />
            <DisplayNotes />
        </Container>
    );
};

export default Home;