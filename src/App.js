import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(15)
  const [split, setSplit] = useState(1)

  return (
    <div className="App">
      <header>
        <h1>Tip Calculator</h1>
      </header>
      <main className="App-main">
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          split={split}
          setSplit={setSplit}
        />
        <Display
          bill={bill}
          tip={tip}
          split={split}
        />

      </main>
    </div>
  );
}

export default App;
