import { useEffect, useState } from "react";

// custom hook for notes api call from the backend server to display the notes on UI
const useNotes = () => {
    //Declare the state variables for notes to be stored
    const [ notes, setNotes ] = useState( [] );

    //useEffect hook to fetch the notes data from the backend server
    useEffect( () => {
        fetch( 'https://enigmatic-coast-44636.herokuapp.com/notes' )
            .then( res => res.json() )
            .then( data => setNotes( data ) );
    }, [] );

    //return notes state variable and setNotes function for external use
    return [ notes, setNotes ];
}

//export the entire function for external use
export default useNotes;