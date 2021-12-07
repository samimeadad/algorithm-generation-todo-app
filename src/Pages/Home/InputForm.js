import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const InputForm = () => {
    const [ noteData, setNoteData ] = useState( {} );
    const [ tagData, setTagData ] = useState( {} );
    const [ success, setSuccess ] = useState( false );

    const allTagsFromLocalStorage = JSON.parse( localStorage.getItem( 'tags' ) );

    const handleTagInputChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newTagData = { ...tagData };
        newTagData[ field ] = value;
        setTagData( newTagData );
    }

    const handleNoteInputChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newNoteData = { ...noteData };
        newNoteData[ field ] = value;
        setNoteData( newNoteData );
    }

    const saveTagToLocalStorage = () => {
        const tags = JSON.parse( localStorage.getItem( 'tags' ) ) || [];
        tags.push( tagData );
        localStorage.setItem( 'tags', JSON.stringify( tags ) );
        setSuccess( true );
    }

    const saveNoteToLocalStorage = () => {
        const notes = JSON.parse( localStorage.getItem( 'notes' ) ) || [];
        notes.push( noteData );
        localStorage.setItem( 'notes', JSON.stringify( notes ) );
        setSuccess( true );
    }

    const handleTagFormSubmit = e => {
        e.preventDefault();

        const tags = JSON.parse( localStorage.getItem( 'tags' ) );

        const duplicateTags = tags?.filter( tag => parseInt( tag.tagId ) === parseInt( tagData.tagId ) );

        if ( !tagData.tagId || !tagData.tagName ) {
            setSuccess( false );
            return;
        }

        else if ( duplicateTags?.length > 0 ) {
            alert( "Duplicate Tag ID! Please enter a unique Tag ID!" );
            setSuccess( false );
            return;
        }

        else {
            saveTagToLocalStorage();
            setSuccess( true );
            window.location.reload();
        }
    }

    const handleNoteFormSubmit = e => {
        e.preventDefault();

        const notes = JSON.parse( localStorage.getItem( 'notes' ) );

        const duplicateNote = notes?.filter( note => parseInt( note.noteId ) === parseInt( noteData.noteId ) );

        if ( !noteData.noteId || !noteData.noteTitle || !noteData.noteData ) {
            setSuccess( false );
            return;
        }

        else if ( duplicateNote?.length > 0 ) {
            alert( "Duplicate Note ID! Please enter a unique Note ID!" );
            setSuccess( false );
            return;
        }

        else {
            saveNoteToLocalStorage();
            setSuccess( true );
            window.location.reload();
        }
    }

    return (
        <Container sx={ { my: 10 } }>
            <Grid container spacing={ 4 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                    <form onSubmit={ handleTagFormSubmit }>
                        <TextField
                            sx={ { width: .75, mb: 4 } }
                            id="tagId"
                            label="Tag ID (Please enter a unique numeric value)"
                            name="tagId"
                            onBlur={ handleTagInputChange }
                            variant="standard"
                        />
                        <TextField
                            sx={ { width: .75, mb: 4 } }
                            id="tagName"
                            label="Tag Name"
                            name="tagName"
                            onBlur={ handleTagInputChange }
                            variant="standard"
                        />
                        { success ? <p>Tag Saved!</p> : <p>Tag data cannot be empty!</p> }
                        <Button
                            sx={ { width: .25, m: 6, backgroundColor: "#3B4DA0" } }
                            variant="contained"
                            type="submit"
                        >Save</Button>
                    </form>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                    <form onSubmit={ handleNoteFormSubmit }>
                        <TextField
                            sx={ { width: 1, mb: 4 } }
                            id="noteId"
                            label="Note ID (Please enter a unique numeric value)"
                            name="noteId"
                            onBlur={ handleNoteInputChange }
                            variant="standard"
                        />
                        <TextField
                            sx={ { width: 1, mb: 4 } }
                            id="noteTitle"
                            label="Note Title"
                            name="noteTitle"
                            onBlur={ handleNoteInputChange }
                            variant="standard"
                        />
                        <TextField
                            sx={ { width: 1, mb: 4 } }
                            id="noteData"
                            label="Please Enter Your Note"
                            name="noteData"
                            onBlur={ handleNoteInputChange }
                            variant="standard"
                        />
                        <FormControl variant="standard" fullWidth>
                            <InputLabel id="noteTagLabel">Please Select a Tag</InputLabel>
                            <Select
                                labelId="noteTagLabel"
                                id="noteTagId"
                                name="noteTag"
                                value={ noteData.noteTag }
                                label="Select a Tag"
                                onChange={ handleNoteInputChange }
                            >
                                {
                                    allTagsFromLocalStorage?.map( tag => <MenuItem value={ tag.tagName }>{ tag.tagName }</MenuItem> )
                                }
                            </Select>
                        </FormControl>
                        { success ? <p>Note Saved!</p> : <p>Note data cannot be empty!</p> }
                        <Button
                            sx={ { width: .25, m: 6, backgroundColor: "#3B4DA0" } }
                            variant="contained"
                            type="submit"
                        >Save</Button>
                    </form>
                </Grid>
            </Grid>

        </Container>
    );
};

export default InputForm;