import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import useNotes from '../../Hooks/useNotes';

const DisplaySingleNote = ( { note } ) => {
    const [ notes, setNotes ] = useNotes( {} );
    const [ success, setSuccess ] = useState( false );

    const handleDeleteNote = ( id ) => {
        //get the alert message for note delete. if proceed is true then delete the note from the local storage
        const proceed = window.confirm( "Are you sure to delete the note?" );

        if ( proceed ) {
            const notesFromLocalStorage = JSON.parse( localStorage.getItem( 'notes' ) );
            const filteredNotes = notesFromLocalStorage?.filter( note => note.noteId !== id );
            setNotes( filteredNotes );
            localStorage.setItem( 'notes', JSON.stringify( filteredNotes ) );
            setSuccess( true );
            window.location.reload();
        }
    }

    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
            <Card sx={ { minWidth: 350 } }>
                <CardContent>
                    <Typography variant='h5' sx={ { color: '#3B4DA0', fontWeight: 'bold' } } gutterBottom>
                        { note?.noteTitle }
                    </Typography>
                    <Typography variant="body">
                        { note?.noteData }
                    </Typography>
                    <Typography variant="h6" sx={ { color: '#3B4DA0', fontWeight: 'bold', mt: 1 } }>
                        Tag: { note?.noteTag }
                    </Typography>
                </CardContent>
                <CardActions sx={ { display: 'flex', justifyContent: 'space-between' } }>
                    <Button onClick={ () => handleDeleteNote( note?.noteId ) } size="small">Delete Note</Button>
                    <Link style={ { textDecoration: 'none' } } to={ `/notes/update/${ note?.noteId }` }><Button size="small">Edit Note</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default DisplaySingleNote;