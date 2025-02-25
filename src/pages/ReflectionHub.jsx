import { useEffect, useState } from 'react';
import axios from 'axios';
 
export default function ReflectionHub() {
    const [journals, setJournals] = useState([]);
    const [newJournalTitle, setNewJournalTitle] = useState('');
    const [newJournalContent, setNewJournalContent] = useState('');
 
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('http://localhost:3000/journal');
                setJournals(res.data); 
                setNewJournalTitle;
                setNewJournalContent; 
            } catch (error) {
                console.error('Error fetching journal data:', error);
            }
        }
        getData();
    }, []);
   

    return (
        <>
            <h1>Edit</h1>
            {journals && journals.map((el) => (
                <p key={el.id || `journal-${el._id}`}>{el.journal}</p>
            ))}
            <div>
            

            </div>
        </>
    );
}
