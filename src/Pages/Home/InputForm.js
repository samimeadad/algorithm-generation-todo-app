import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useTags from '../../Hooks/useTags';

const InputForm = () => {
    const [ noteData, setNoteData ] = useState( {} );
    const [ tagData, setTagData ] = useState( {} );
    const [ success, setSuccess ] = useState( false );

    const [ tags ] = useTags();

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

    const saveTagToMongoDb = () => {
        fetch( 'https://enigmatic-coast-44636.herokuapp.com/tags', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( tagData )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( 'New tag is added successfully. Thank you.' );
                }
            } )
    }

    const saveNoteToMongoDb = () => {
        fetch( 'https://enigmatic-coast-44636.herokuapp.com/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( noteData )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( 'New note is added successfully. Thank you.' );
                }
            } )
    }

    const handleTagFormSubmit = e => {
        e.preventDefault();

        if ( !tagData.tagName ) {
            setSuccess( false );
            return;
        }

        else {
            saveTagToMongoDb();
            setSuccess( true );
            window.location.reload();
        }
    }

    const handleNoteFormSubmit = e => {
        e.preventDefault();

        if ( !noteData.noteTitle || !noteData.noteData || !noteData.noteTag ) {
            setSuccess( false );
            alert( "Please enter the data correctly!" );
            return;
        }

        else {
            saveNoteToMongoDb();
            setSuccess( true );
            window.location.reload();
        }
    }

    return (
        <Container sx={ { my: 10 } }>
            <Grid container spacing={ 2 }>
                <Grid sx={ { border: 1, p: 4 } } item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Typography variant="h6" sx={ { fontWeight: 'bold', color: "#3B4DA0", textAlign: "left", mb: 4 } }>Please Add a Tag Below</Typography>
                    <form onSubmit={ handleTagFormSubmit }>
                        <TextField
                            sx={ { width: 1, mb: 4 } }
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
                <Grid sx={ { border: 1, p: 4 } } item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Typography variant="h6" sx={ { fontWeight: 'bold', color: "#3B4DA0", textAlign: "left", mb: 4 } }>Please Add a Note Below</Typography>
                    <form onSubmit={ handleNoteFormSubmit }>
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
                                onChange={ handleNoteInputChange }
                            >
                                {
                                    tags?.map( tag => <MenuItem key={ tag?._id } defaultValue={ tag?.tagName } value={ tag?.tagName }>{ tag?.tagName }</MenuItem> )
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