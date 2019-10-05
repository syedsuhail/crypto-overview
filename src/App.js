import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';

function App() {

  let [limit, updateLimit] = useState('10');
  return (
    <div className="App">
      <Header limit={limit} updateLimit={updateLimit}></Header>
    </div>
  );
}

export default App;
