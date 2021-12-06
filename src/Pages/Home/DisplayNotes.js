import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import DisplaySingleNote from './DisplaySingleNote';

const DisplayNotes = () => {
    const allNotesFromLocalStorage = JSON.parse( localStorage.getItem( 'notes' ) );

    return (
        <Container>
            <Typography variant="h4" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#CD5C5C' } }>Total Notes: { allNotesFromLocalStorage?.length }</Typography>
            <Grid container spacing={ 4 }>
                {
                    allNotesFromLocalStorage.map( note => <DisplaySingleNote
                        key={ note.noteData }
                        note={ note }>
                    </DisplaySingleNote> )
                }

            </Grid>
        </Container>
    );
};

export default DisplayNotes;