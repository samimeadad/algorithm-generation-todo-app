import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import DisplaySingleNote from './DisplaySingleNote';
import useNotes from '../../Hooks/useNotes';

const DisplayNotes = () => {
    const [ notes ] = useNotes();

    return (
        <Container>
            {
                !notes?.length && <Box variant='h3' sx={ { color: "red" } }>
                    <h3>No Note Found! Please add a new note!</h3>
                </Box>
            }
            <Typography variant="h4" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#3B4DA0' } }>Total Notes: { notes?.length }</Typography>
            <Grid container spacing={ 4 }>
                {
                    notes?.map( note => <DisplaySingleNote
                        key={ note.noteId }
                        note={ note }>
                    </DisplaySingleNote> )
                }
            </Grid>
        </Container>
    );
};

export default DisplayNotes;