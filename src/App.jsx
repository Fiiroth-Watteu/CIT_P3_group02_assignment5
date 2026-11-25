import { useState, useEffect } from 'react'
//import './App.css'

//API key for assignment: 89839239636e4de255b7bb6fea6d2a80
//api url: https://api.themoviedb.org/3/search/person?query=Q&api_key=K

function main() {
  return (
    <p>return results for </p>
  )
}

function Person({person_input}) {
  return (
    <div>
      name: {person_input.name} <br/>
      department: {person_input.known_for_department}
    </div>
  )
}

function App() {
  const [person, setPerson] = useState([])
  const K = "89839239636e4de255b7bb6fea6d2a80";
  const Q = "spielberg";

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/search/person?query=" + Q + "&api_key=" + K)
      .then(res => res.json())
      .then(data => {console.log(data.results);setPerson(data.results)});
    }, []);

  return (
    <div>
      <h1>i have now {person.length} person objects for the input of "{Q}"</h1>
      <p>first result: </p> <Person person_input={person[0]}/>
    </div>
  )
}

export default App
