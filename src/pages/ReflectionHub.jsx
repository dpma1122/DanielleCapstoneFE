import { useEffect, useState } from 'react';
import axios from 'axios';
 
export default function ReflectionHub() {
    const [journals, setJournals] = useState([]);
    const [newJournal, setNewJournal] = useState({ title: '', content: '' });
 
    useEffect(() => {
        fetchJournals();
    }, []);
 
    const fetchJournals = async () => {
        try {
            const res = await axios.get('http://localhost:3000/journal');
            setJournals(res.data);
        } catch (error) {
            console.error('Error fetching journal data:', error);
        }
    };
 
    const handleInputChange = (e) => {
        setNewJournal({ ...newJournal, [e.target.name]: e.target.value });
    };
 
    const handleAddJournal = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/journal', newJournal);
            setJournals([...journals, res.data]);
            setNewJournal({ title: '', content: '' });
        } catch (error) {
            console.error('Error adding new journal:', error);
        }
    };
 
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/journal/${id}`);
            setJournals(journals.filter(journal => journal._id !== id));
        } catch (error) {
            console.error('Error deleting journal:', error);
        }
    };
 
    const handleUpdate = async (id, updatedData) => {
        try {
            const res = await axios.put(`http://localhost:3000/journal/${id}`, updatedData);
            setJournals(journals.map(journal => journal._id === id ? res.data : journal));
        } catch (error) {
            console.error('Error updating journal:', error);
        }
    };
 
    return (
        <>
            <h1>Your Journey Begins Here</h1>
 
            <form onSubmit={handleAddJournal}>
                <input
                    type="text"
                    name="title"
                    value={newJournal.title}
                    onChange={handleInputChange}
                    placeholder="Enter journal title"
                    required
                />
                <textarea
                    name="content"
                    value={newJournal.content}
                    onChange={handleInputChange}
                    placeholder="Enter journal content"
                    required
                />
                <button type="submit">Add Journal</button>
            </form>
 
            {journals.map((journal) => (
                <JournalEntry
                    key={journal._id}
                    journal={journal}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            ))}
        </>
    );
}
 
function JournalEntry({ journal, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedJournal, setEditedJournal] = useState(journal);
 
    const handleInputChange = (e) => {
        setEditedJournal({ ...editedJournal, [e.target.name]: e.target.value });
    };
 
    const handleUpdate = () => {
        onUpdate(journal._id, editedJournal);
        setIsEditing(false);
    };
 
    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="title"
                        value={editedJournal.title}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="content"
                        value={editedJournal.content}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h2>{journal.title}</h2>
                    <p>{journal.content}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(journal._id)}>Delete</button>
                </>
            )}
        </div>
    );
}

