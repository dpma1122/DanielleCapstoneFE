import { useEffect, useState } from 'react';
import axios from 'axios';
import Journal from '../components/Journal';
 
export default function ReflectionHub() {
    const [journals, setJournals] = useState([]);
    const [newJournalTitle, setNewJournalTitle] = useState('');
    const [newJournalContent, setNewJournalContent] = useState('');
 
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('http://localhost:3000/journal');
                setJournals(res.data);
            } catch (error) {
                console.error('Error fetching journal data:', error);
            }
        }
        getData();
    }, []);
 
    const handleTitleChange = (e) => {
        setNewJournalTitle(e.target.value);
    };
 
    const handleContentChange = (e) => {
        setNewJournalContent(e.target.value);
    };
 
    return (
        <>
            <h1>Your Journey Begins Here</h1>
            {journals && journals.map((el) => (
                <p key={el.id || `journal-${el._id}`}>{el.journal}</p>
            ))}
            <div>
                <input
                    type="text"
                    value={newJournalTitle}
                    onChange={handleTitleChange}
                    placeholder="Enter journal title"
                    
                /> 
                <br/>
                <textarea
                    value={newJournalContent}
                    onChange={handleContentChange}
                    placeholder="Enter journal content"
                    rows="4"
                />
            </div>
        </>
    );
}
