import { useRouter } from "next/navigation";
import { db } from "../../utils/firebaseConfig"; 
import { doc, deleteDoc } from "firebase/firestore";

 export default function DeleteTicket ({ id })  {
    const router = useRouter();

    const handleDelete = async () => {
        if (!id) {
            console.error("No ID provided for deletion");
            alert('No ID provided for deletion');
            return;
        }
        const itemRef = doc(db, 'tickets', id);
        try {
            await deleteDoc(itemRef) ;
            router.push('/tickets')
        } catch (error) {
            console.error("Error deleting ticket", error);
            alert('Error deleting ticket');
        }
    };

    return (
        <button className="btn-delete" onClick={handleDelete}>
            <p className="text-white">Delete Ticket</p>
        </button>
    );
};

