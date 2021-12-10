import { useEffect, useState } from "react";

// custom hook for tags api call
const useTags = () => {
    const [ tags, setTags ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:5001/tags' )
            .then( res => res.json() )
            .then( data => setTags( data ) );
    }, [] );

    //return tags state variable and setTags function
    return [ tags, setTags ];
}

//export the entire function for external use
export default useTags;