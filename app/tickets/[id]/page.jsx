'use client'
import { notFound } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import Loading from "../../loading";
import { db } from "../../../utils/firebaseConfig"
import { doc, onSnapshot } from "firebase/firestore";
import DeleteTicket from "../DeleteTicket"

export default function TicketDetails({ params }) {
    const { id } = params; 
        const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const docRef = doc(db, 'tickets', id);

        const getTickets = async () => {
            onSnapshot(docRef, (snapshot) => {
                if (snapshot.exists()) {
                    setTickets(snapshot.data());
                } else {
                    console.log("Ticket deleted");
                }
            });
        };
        getTickets();
    }, [id]);

    return (
        <main>
            <nav>
                <h2 className="md:-ml-16 -ml-2 text-2xl ">Tickets Details</h2>
            </nav>

            <Suspense fallback={<Loading />}>
                <div className="card">
                    <h2>{tickets.title}</h2>
                    <small>Created by guest_user</small>
                    <p>{tickets.body}</p>
                    <div className={`pill ${tickets.priority}`}>
                        {tickets.priority} priority
                    </div>
                </div>

                <div>
                        <DeleteTicket id={id} /> 
                </div>
            </Suspense>
        </main>
    );
}