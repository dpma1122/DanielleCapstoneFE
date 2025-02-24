import './App.css'
import Home from './pages/Home'; 
import JournalEntry from './pages/JournalEntry'; 
import MindfulMoments from './pages/MindfulMoments';
import ReflectionHub from './pages/ReflectionHub';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<JournalEntry /> } />
      <Route path='/update' element={<ReflectionHub />} />
      <Route path ='/mindfulMoments' element= {<MindfulMoments/>} />
      <Route path='*' element={<h1> 404: Not Found</h1>} />
    
  </Routes>
  
  </>
 
  )
}


export default App
