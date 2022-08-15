import './App.css';
import {useState} from 'react'
import Title from './compnents/Title';

function App() {

  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([
    {title:"Test 1", id: 1},
    {title:"Test 2", id: 2},
    {title:"Test 3", id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {

    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  return (
    <div className="App">
      <Title />
      {showEvents && <div>
        <button onClick={() => 
              setShowEvents(false)}>hide event</button>
      </div>
      } 
      { !showEvents &&
      <div>
        <button onClick={() => 
              setShowEvents(true)}>show event</button>
      </div>
      } 
      {showEvents && events
      .map((event, index) =>
        (
          <div key={event.id}>
            <h2>{index} - {event.title} - with id {event.id}</h2>
            <button onClick={() => {
              handleClick(event.id)}}>delete event</button>
          </div>
        )
      )}
    </div>
  );
}

export default App;
