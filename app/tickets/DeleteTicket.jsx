import { useRouter } from "next/navigation";
import { db } from "../../utils/firebaseConfig"; 
import { doc, deleteDoc } from "firebase/firestore";
import { Trash2 } from "lucide-react";

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
            <p className="text-white flex items-center">Delete Ticket <Trash2 className="ml-2 h-4 w-4" /></p>
        </button>
    );
};

