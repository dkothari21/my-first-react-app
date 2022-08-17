import './App.css';
import React, {useState} from 'react'
import Title from './compnents/Title';
import Modal from './compnents/Modal';

function App() {

  const[showModal, setShowModal] = useState(false)

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

  const handleClose = () => {
      setShowModal(false)
  }


  const subtitle = "All the latest events in ROC"
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />

      {showEvents && (
      <div>
        <button onClick={() => 
              setShowEvents(false)}>hide event</button>
      </div>
      )
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
          <React.Fragment key={event.id}>
            <h2>{index} - {event.title} - with id {event.id}</h2>
            <button onClick={() => {
              handleClick(event.id)}}>delete event</button>
          </React.Fragment>
        )
      )}

    <button onClick={() => 
              setShowModal(true)}>Open</button>

    {showModal && <Modal handleClose={handleClose}>
      <h2>Test for the h2</h2>

      <p> This is simple text and it is paragraph</p>

      <button onClick={handleClose}>close</button>
    </Modal>}

    </div>
  );
}

export default App;
