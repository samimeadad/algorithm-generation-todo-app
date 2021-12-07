import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";

const UpdateNote = () => {
    const { noteId } = useParams();
    const [ noteData, setNoteData ] = useState( {} );
    const [ success, setSuccess ] = useState( false );

    const notesFromLocalStorage = JSON.parse( localStorage.getItem( 'notes' ) );
    const tagsFromLocalStorage = JSON.parse( localStorage.getItem( 'tags' ) );

    const notesToBeUpdated = notesFromLocalStorage.filter( note => parseInt( note.noteId ) === parseInt( noteId ) );

    const handleNoteInputChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newNoteData = { ...noteData };
        newNoteData[ field ] = value;
        setNoteData( newNoteData );
    }

    const handleNoteUpdateFormSubmit = e => {
        e.preventDefault();
        const newNotes = notesFromLocalStorage.map( note => {
            if ( note.noteId === noteId ) {
                note.noteTitle = noteData.noteTitle;
                note.noteData = noteData.noteData;
                note.noteTag = noteData.noteTag;
            }
            return note;
        } );
        localStorage.setItem( 'notes', JSON.stringify( newNotes ) );
        setSuccess( true );
    }

    return (
        <Container sx={ { my: 6 } }>
            <Typography variant="h4">Update Note: { notesToBeUpdated[ 0 ]?.noteTitle }</Typography>
            <form onSubmit={ handleNoteUpdateFormSubmit }>
                <TextField
                    sx={ { width: 1, mb: 4 } }
                    id="noteTitle"
                    label="Please modify the note title if you want to update"
                    name="noteTitle"
                    defaultValue={ notesToBeUpdated[ 0 ]?.noteTitle }
                    onBlur={ handleNoteInputChange }
                    variant="standard"
                />
                <TextField
                    sx={ { width: 1, mb: 4 } }
                    id="noteData"
                    label="Please modify the note data if you want to update"
                    name="noteData"
                    defaultValue={ notesToBeUpdated[ 0 ]?.noteData }
                    onBlur={ handleNoteInputChange }
                    variant="standard"
                />
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="noteTagLabel">Please change the tag if required</InputLabel>
                    <Select
                        labelId="noteTagLabel"
                        id="noteTagId"
                        name="noteTag"
                        value={ noteData.noteTag }
                        defaultValue={ notesToBeUpdated[ 0 ]?.noteTag }
                        onChange={ handleNoteInputChange }
                    >
                        {
                            tagsFromLocalStorage?.map( tag => <MenuItem key={ tag?.tagId } value={ tag?.tagName }>{ tag.tagName }</MenuItem> )
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