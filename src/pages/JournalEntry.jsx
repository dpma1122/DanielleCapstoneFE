import axios from 'axios'

import { useEffect } from 'react'; 






export default function JournalEntry() {
    useEffect(() => {
       async function getData(){
                let res = await axios.get ('http://localhost:3000/journal')
           console.log(res)
        } 
        getData()
    })
    return(<><h1>Add Entry</h1></>)
}