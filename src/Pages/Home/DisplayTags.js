import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useTags from '../../Hooks/useTags';
import DisplaySingleTag from './DisplaySingleTag';

const DisplayTags = () => {
    const [ tags ] = useTags();

    return (
        <Container>
            {
                !tags?.length && <Box variant='h3' sx={ { color: "red" } }>
                    <h3>No Tag Found! Please add a new tag!</h3>
                </Box>
            }
            <Typography variant="h4" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#3B4DA0' } }>Total Tags: { tags?.length }</Typography>
            <Grid container spacing={ 4 }>
                {
                    tags?.map( tag => <DisplaySingleTag
                        key={ tag._id }
                        tag={ tag }>
                    </DisplaySingleTag> )
                }
            </Grid>
        </Container>
    );
};

export default DisplayTags;