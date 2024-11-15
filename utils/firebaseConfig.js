import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

require('dotenv').config();

console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "carls-helpdesk.firebaseapp.com",
    projectId: "carls-helpdesk",
    storageBucket: "carls-helpdesk.firebasestorage.app",
    messagingSenderId: "835188372947",
    appId: "1:835188372947:web:53733f511892b0af72ab26"
  };
  
  //initialize firebase
  const app = initializeApp(firebaseConfig);

    //initialize services
    const db = getFirestore();

    export { db };

    // //collection ref
    // const colRef = collection(db, 'Tickets')



//   // get collection data
//   getDocs(colRef)
//     .then((snapshot) => {
//         let Tickets = []
//         snapshot.docs.forEach((doc) => {
//             Tickets.push({ ...doc.data(), id:doc.id})
//         })
//         console.log(Tickets)   })
//     .catch(err => {
//         console.error(err.message)
//     })
    

    


    export default app;