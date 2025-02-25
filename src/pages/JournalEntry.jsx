import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'; 



export default function JournalEntry() {
    const nav = useNavigate();
    const [formData, setFormData] = useState({ journal: '' })
    
     async function handleChange(e) {setFormData({...formData, [e.target.name]:e.target.value}) }
    async function handleSubmit(e) {
        e.preventDefault();
         try {
             let res = axios.post('http://localhost:3000/journal', formData)
             console.log (res.data)
         } catch (error) {
                console.log (error)
            }
        }
    
    return (<>
        <form onSubmit={handleSubmit}>
            <input onChange= {handleChange} type='text' name='journal' />
            <input type= 'submit'/>
        </form>
        <h1>Add Entry</h1>
    </>)
}