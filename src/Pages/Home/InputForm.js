import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const InputForm = () => {
    const [ noteData, setNoteData ] = useState( '' );
    const [ success, setSuccess ] = useState( false );

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newNoteData = { ...noteData };
        newNoteData[ field ] = value;
        setNoteData( newNoteData );
        e.preventDefault();
    }

    const saveNoteToLocalStorage = () => {
        const notes = JSON.parse( localStorage.getItem( 'notes' ) ) || [];
        notes.push( noteData );
        localStorage.setItem( 'notes', JSON.stringify( notes ) );
        setSuccess( true );
    }

    const handleNoteFormSubmit = e => {
        if ( !noteData ) {
            setSuccess( false );
            e.preventDefault();
            return;
        }
        else {
            saveNoteToLocalStorage();
            setSuccess( true );
            window.location.reload();
        }
        e.preventDefault();
    }

    return (
        <Container sx={ { my: 10 } }>
            <form onSubmit={ handleNoteFormSubmit }>
                <TextField
                    sx={ { width: .75, mb: 4 } }
                    id="noteTitle"
                    label="Note Title"
                    name="noteTitle"
                    onBlur={ handleInputChange }
                    variant="standard"
                />
                <TextField
                    sx={ { width: .75 } }
                    id="noteData"
                    label="Please Enter Your Note"
                    name="noteData"
                    onBlur={ handleInputChange }
                    variant="standard"
                />
                { success ? <p>Note Saved!</p> : <p>Note data cannot be empty!</p> }
                <Button
                    sx={ { width: .25, m: 6, backgroundColor: "#3B4DA0" } }
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

export default InputForm;