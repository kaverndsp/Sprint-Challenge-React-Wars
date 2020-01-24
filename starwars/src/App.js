import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from "./components/Characters";
import './App.css';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [chars, setChars] = useState([]);

    useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then((response) => {
      // console.log(response.data.results);
        setChars(response.data.results);
    }).catch(error => {
      console.log("The data could not be returned. ", error);
    })
}, [])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {chars.map((item) => {
         return (
            <Characters people={item}/>
          );
        })}
    </div>
  );
}

export default App;
