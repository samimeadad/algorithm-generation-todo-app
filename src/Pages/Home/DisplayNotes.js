import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import DisplaySingleNote from './DisplaySingleNote';

const DisplayNotes = () => {
    const allNotesFromLocalStorage = JSON.parse( localStorage.getItem( 'notes' ) );

    return (
        <Container>
            {
                !allNotesFromLocalStorage?.length && <Box variant='h3' sx={ { color: "red" } }>
                    <h3>No Note Found! Please add a new note!</h3>
                </Box>
            }
            <Typography variant="h4" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#3B4DA0' } }>Total Notes: { allNotesFromLocalStorage?.length }</Typography>
            <Grid container spacing={ 4 }>
                {
                    allNotesFromLocalStorage?.map( note => <DisplaySingleNote
                        key={ note.noteData }
                        note={ note }>
                    </DisplaySingleNote> )
                }

            </Grid>
        </Container>
    );
};

export default DisplayNotes;