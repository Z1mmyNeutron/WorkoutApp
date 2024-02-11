
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/client')

      .then((res) => {
        const t = res.text()
        console.log(t)
        return t
      })
      .then((data) => {
        return setMessage(data)
      })
      .catch((err) => {
        return console.log(err)
      });
  }, []);
  return (
    <div>
      <h1>This is going to be my home page</h1>
      <div> <p> see if you can get push and post requests here</p></div>
      <br></br>
      <h1 style={{ "padding": "20%", "justifyContent": "center", "alignItems": "center", }}>{message}</h1>
    </div>
  );
}
export default App;
