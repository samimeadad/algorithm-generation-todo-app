import { Box } from '@mui/material';
import React from 'react';
//import 404 image from the /src/images folder
import errorPage from '../../images/404.png';

const PageNotFound = () => {
    return (
        <Box sx={ { textAlign: 'center' } }>
            <img style={ { maxHeight: '100vh' } } src={ errorPage } alt="errorPageImage" />
        </Box>
    );
};

export default PageNotFound;