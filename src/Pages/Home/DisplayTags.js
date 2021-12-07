import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import DisplaySingleTag from './DisplaySingleTag';

const DisplayTags = () => {
    const allTagsFromLocalStorage = JSON.parse( localStorage.getItem( 'tags' ) );

    return (
        <Container>
            {
                !allTagsFromLocalStorage?.length && <Box variant='h3' sx={ { color: "red" } }>
                    <h3>No Tag Found! Please add a new tag!</h3>
                </Box>
            }
            <Typography variant="h4" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#3B4DA0' } }>Total Tags: { allTagsFromLocalStorage?.length }</Typography>
            <Grid container spacing={ 4 }>
                {
                    allTagsFromLocalStorage?.map( tag => <DisplaySingleTag
                        key={ tag.tagId }
                        tag={ tag }>
                    </DisplaySingleTag> )
                }
            </Grid>
        </Container>
    );
};

export default DisplayTags;