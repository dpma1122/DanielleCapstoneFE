import { useEffect, useState } from 'react';
import axios from 'axios';
import JournalItem from '../components/JournalItem';
 
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
            {journals && journals.map((journal) => {
                console.log(journal)
                return (
                    <JournalItem journal={journal} key={journal._id} />
                   
                   )
            })}
        
          
        </>
    );
}
