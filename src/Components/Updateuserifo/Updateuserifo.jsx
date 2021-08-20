import React from 'react'
import Firebase from '../Firebase/Firebase'

const Updateuserifo = ({userId}) => {
    const db = Firebase.firestore();
    return ( <div className="Updateuserifo">
        {userId}
    </div> );
}
 
export default Updateuserifo;