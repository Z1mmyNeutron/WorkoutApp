
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>This is going to be my home page</h1>
      <br></br>
      <h1 style={{ "padding": "20%", "justifyContent": "center", "alignItems": "center", }}>{message}</h1>
    </div>
  );
}
export default App;
