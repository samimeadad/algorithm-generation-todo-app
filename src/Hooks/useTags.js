import { useEffect, useState } from "react";

// custom hook for tags api call from the backend server to display the tags on UI
const useTags = () => {
    //Declare the state variables for tags to be stored
    const [ tags, setTags ] = useState( [] );

    //useEffect hook to fetch the tags data from the backend server
    useEffect( () => {
        fetch( 'https://enigmatic-coast-44636.herokuapp.com/tags' )
            .then( res => res.json() )
            .then( data => setTags( data ) );
    }, [] );

    //return tags state variable and setTags function for external use
    return [ tags, setTags ];
}

//export the entire function for external use
export default useTags;