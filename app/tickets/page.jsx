import { Suspense } from "react";
import TicketsLists from "./TicketsLists";
import Loading from "../loading";
import Link from "next/link";
import { FileInput } from "lucide-react";

export default function Tickets() {
    return (
      <main>
         <nav className="flex flex-row pt-5 px-0 justify-between" >
          <div>
            <h2 className="md:text-3xl text-xl">Tickets</h2>
            <p><small className="md:text-sm text-xs">Currently open tickets</small></p>
          </div>

          <button className=" bg-primary p-4 text-white">
          <Link href="/tickets/create"><p className="text-white flex text-sm items-center">Create a Ticket<FileInput className="ml-2 h-4 w-4" /></p></Link>
          </button>
         </nav>

      <Suspense fallback={<Loading />}>
        <TicketsLists />
      </Suspense>
      </main>
    )
  }
  