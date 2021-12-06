import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [ noteData, setNoteData ] = useState( {} );

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newNoteData = { ...noteData };
        setNoteData[ field ] = value;
        setNoteData( newNoteData );
        e.preventDefault();
    }

    const handleNoteFormSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container sx={ { my: 10 } }>
            <form onSubmit={ handleNoteFormSubmit }>
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="noteInput"
                    label="Please Enter Your Note"
                    name="note"
                    onBlur={ handleOnChange }
                    variant="standard"
                />
                <Button
                    sx={ { width: .25, m: 2, backgroundColor: "#3B4DA0" } }
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Save
                </Button>
            </form>
        </Container>
    );
};

export default Home;