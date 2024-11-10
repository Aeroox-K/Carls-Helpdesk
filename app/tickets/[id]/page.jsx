import { notFound } from "next/navigation"
import { Suspense } from "react"
import Loading from "../../loading";


export const dynamicParams = true


export async function generateStaticParams() {
    
    const res = await fetch ('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}



async function getTickets(id) {
        //imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 10
            // revalidate: 60 * 60 * 12
        }
    })
    if (!res.ok) {
        notFound()
    }

    return res.json()
}   

export default async function TicketDetails({ params }) {
    const ticket = await getTickets(params.id)

 
    return (
    <main>
        
        <nav>
            <h2>Tickets Details</h2>
        </nav>

        <Suspense fallback={<Loading />}>
            <div className="card">
                <h2>{ticket.title}</h2>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className= {`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>

            <button className="btn-primary" >
                <p className="text-white" >Delete Ticket</p>
            </button>

        </Suspense>

    </main>
  )
}
