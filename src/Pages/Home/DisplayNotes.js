import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import DisplaySingleNote from './DisplaySingleNote';
import useNotes from '../../Hooks/useNotes';

//Declare the component to display all notes on the UI
const DisplayNotes = () => {
    //Call the state variable from the hook by which we can get all the note data
    const [ notes ] = useNotes();

    //Render the component as required
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
                        key={ note._id }
                        note={ note }
                    ></DisplaySingleNote> )
                }
            </Grid>
        </Container>
    );
};

export default DisplayNotes;