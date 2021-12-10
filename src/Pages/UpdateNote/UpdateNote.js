import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import useNotes from '../../Hooks/useNotes';
import useTags from '../../Hooks/useTags';

const UpdateNote = () => {
    const { noteId } = useParams();
    console.log( noteId );

    const [ notes ] = useNotes();
    const [ tags ] = useTags();

    const [ noteData, setNoteData ] = useState( {} );
    const [ success, setSuccess ] = useState( false );

    const notesToBeUpdated = notes?.find( note => note?._id === noteId );

    console.log( notesToBeUpdated );

    const handleNoteInputChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newNoteData = { ...noteData };
        newNoteData[ field ] = value;
        setNoteData( newNoteData );
    }

    console.log( noteData );

    const handleNoteUpdateFormSubmit = e => {
        e.preventDefault();
        const url = `http://localhost:5001/notes/${ noteId }`;
        fetch( url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( noteData )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.modifiedCount > 0 ) {
                    alert( 'Note Update Successful' );
                    setSuccess( true );
                    window.location.reload();
                }
            } )
    }

    return (
        <Container sx={ { my: 6 } }>
            <Typography variant="h4" sx={ { mb: 8 } }>Update Note: { notesToBeUpdated?.noteTitle }</Typography>
            <form onSubmit={ handleNoteUpdateFormSubmit }>
                <TextField
                    sx={ { width: 1, mb: 4 } }
                    id="noteTitle"
                    name="noteTitle"
                    label={ notesToBeUpdated?.noteTitle }
                    defaultValue={ notesToBeUpdated?.noteTitle }
                    onBlur={ handleNoteInputChange }
                    variant="standard"
                />
                <TextField
                    sx={ { width: 1, mb: 4 } }
                    id="noteData"
                    name="noteData"
                    label={ notesToBeUpdated?.noteData }
                    defaultValue={ notesToBeUpdated?.noteData }
                    onBlur={ handleNoteInputChange }
                    variant="standard"
                />
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="noteTagLabel">Please change the tag if required</InputLabel>
                    <Select
                        labelId="noteTagLabel"
                        id="noteTagId"
                        name="noteTag"
                        value={ notesToBeUpdated?.noteTag }
                        onChange={ handleNoteInputChange }
                    >
                        {
                            tags?.map( tag => <MenuItem key={ tag?._id } defaultValue={ tag?.tagName } value={ tag?.tagName }>{ tag?.tagName }</MenuItem> )
                        }
                    </Select>
                </FormControl>
                { success ? <p>Note Updated!</p> : <p>Note data cannot be empty!</p> }
                <Button
                    sx={ { width: .25, m: 6, backgroundColor: "#3B4DA0" } }
                    variant="contained"
                    type="submit"
                >Update</Button>
            </form>
        </Container>
    );
};

export default UpdateNote;