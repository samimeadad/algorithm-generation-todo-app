import { Button, Grid } from '@mui/material';
import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useTags from '../../Hooks/useTags';
import useNotes from '../../Hooks/useNotes';

//Declare the component to display a single tag in the home page
const DisplaySingleTag = ( { tag } ) => {
    const [ tags, setTags ] = useTags();
    const [ notes ] = useNotes();

    const handleDeleteTag = ( id ) => {

        //find the required tag to be deleted from the tags array by Array.find() method
        const tagToBeDeleted = tags.find( tag => tag?._id === id );

        //check the tagToBeDeleted is used in any note or not
        const notesToBeUpdated = notes?.filter( note => note?.noteTag?.includes( tagToBeDeleted.tagName ) );

        //if the tag is used in any note then show the alert message that you cannot delete the tag. it is already used my some notes
        if ( notesToBeUpdated.length > 0 ) {
            alert( 'This tag is being used by notes. Please remove it from those notes before deleting it.' );
            return;
        }

        //get the alert message for tag delete. if proceed is true then delete the tag from the local storage
        const proceed = window.confirm( "Are you sure to delete the tag?" );
        if ( proceed ) {
            const url = `https://enigmatic-coast-44636.herokuapp.com/tags/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        const remainingTags = tags.filter( tag => tag._id !== id );
                        setTags( remainingTags );
                        alert( 'Your tag has been deleted successfully' );
                        window.location.reload( false );
                    }
                } )
        }
    }

    //render the UI as required
    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
            <FormGroup>
                <FormControlLabel control={ <Checkbox /> } label={ tag.tagName }></FormControlLabel>
                <Button onClick={ () => handleDeleteTag( tag._id ) }>Delete { tag.tagName }</Button>
            </FormGroup>
        </Grid>
    );
};

export default DisplaySingleTag;