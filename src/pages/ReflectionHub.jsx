import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReflectionHub() {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        async function getData(){
            let res = await axios.get('http://localhost:3000/journal')
            
            setJournals(res.data)
         } 
         getData();
     }, [])
    return (<>
    <h1>Edit</h1></>)
}