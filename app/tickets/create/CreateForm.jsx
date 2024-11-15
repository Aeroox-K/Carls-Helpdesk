"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../../utils/firebaseConfig"

async function addTickets(title, body, priority) {
    try {
        const docRef = await addDoc(collection(db, "tickets"), {
          title: title,
          body: body,
          priority: priority,
          createdAt: serverTimestamp(),
        });
        console.log("Tickets by", docRef.id);
        return true;
    } catch (error) {
        console.log("Error adding Ticket", error)
        return false;
    }
}

export default function CreateForm() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState('false')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const added = await addTickets(title, body, priority)
            if (added) {
                setTitle("");
                setBody("");
                setPriority("");
                router.refresh
                router.push('/tickets')


                // alert ('ticket added to firestore db')
            }
    }


  return (
    <form onSubmit={handleSubmit} className="w-1/2 p-10">     
        <label>
            <span>Title:</span>
            <input 
            required
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="py-3"

            />
        </label>
        <label>
            <span>Body:</span>
            <textarea
                type= "text"
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                className="py-10"
            />
        </label>
        <label>
            <span>Priority:</span>
            <select 
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                className="py-3"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>



        <button
        type="submit"
        className="btn-primary mt-10"
        disabled = {!isLoading}
        >
            {!isLoading && <span>Adding...</span>}
            {isLoading && <span>Add Ticket</span>}
        </button>

    </form>
  )
}
