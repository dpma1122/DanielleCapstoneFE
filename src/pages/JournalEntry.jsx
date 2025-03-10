import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
 
export default function JournalEntry(props) {
    const nav = useNavigate();
    const [formData, setFormData] = useState({ title: '', content: '' });
 
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
 
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await axios.post('http://localhost:3000/journal', formData);
            nav('/');
        } catch (error) {
            console.log(error);
        }
    }
 
    function handleEdit() {
        props.setIsEditing(true);
        props.setSelectedJournal(props.journal);
    }
 
    function handleDelete() {
        // Implement delete functionality here
        console.log('Delete functionality not implemented');
    }
 
    return (
        <>
            <h1>Share Your Thoughts</h1>
 
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter journal title"
                    />
                    <br/>
                </div>
                <div>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Enter journal content"
                        rows="4"
                    />
                </div>
                <button type="submit">Save Journal Entry</button>
            </form>
 
            {props.journal && (
                <div>
                    <p>{props.journal.title}</p>
                    <p>{props.journal.content}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <br />
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </>
    );
}
