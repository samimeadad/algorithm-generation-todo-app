import { Grid } from '@mui/material';
import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const DisplaySingleTag = ( { tag } ) => {
    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
            <FormGroup>
                <FormControlLabel control={ <Checkbox /> } label={ tag.tagName } />
            </FormGroup>
        </Grid>
    );
};

export default DisplaySingleTag;