'use client'
import Link from "next/link"
import { db,  } from "../../utils/firebaseConfig"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function TicketsLists() {

    const [tickets, setTickets] = useState([]);

    const colRef = collection(db, 'tickets')

    const q = query(colRef, orderBy("createdAt", "desc") )


    useEffect(() => {
        const getTickets = async () => {
            onSnapshot(q, (snapshot) => {
                setTickets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
            })
        }
        getTickets() 
    }, []) 


  return ( 
   <>
   {tickets.map((ticket) => (
    <div key={ticket.id} className="card my-5" >
        <Link href ={`/tickets/${ticket.id}`}>
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0,200)}...</p>
        <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
        </div>
        </Link>
    </div>
   ))}
   {tickets.length === 0 && (
    <p className="text-center">There are no open tickets</p>
   )}
   </>
  )
}