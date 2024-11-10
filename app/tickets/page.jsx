import { Suspense } from "react";
import TicketsLists from "./TicketsLists";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
    return (
      <main>
         <nav className="flex flex-row pt-5 px-0 justify-between" >
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets</small></p>
          </div>

          <button className="btn-primary">
            <Link href="/tickets/create"><p className="text-white">Create a Ticket</p></Link>
          </button>
         </nav>

      <Suspense fallback={<Loading />}>
        <TicketsLists />
      </Suspense>
      </main>
    )
  }
  