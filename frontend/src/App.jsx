import './App.css';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Editor from './components/editor';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/docs/:id" element={<Editor />} />
        <Route path="/" element={<Navigate replace to={`/docs/${uuid()}`}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
