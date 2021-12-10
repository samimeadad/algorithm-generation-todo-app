import { useEffect, useState } from "react";

// custom hook for notes api call
const useNotes = () => {
    const [ notes, setNotes ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:5001/notes' )
            .then( res => res.json() )
            .then( data => setNotes( data ) );
    }, [] );

    //return notes state variable and setNotes function
    return [ notes, setNotes ];
}

//export the entire function for external use
export default useNotes;