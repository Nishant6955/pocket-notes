
import React, { useState } from 'react';
import Sidebarr from './Sidebarr';
import img from '../assest/img.png';
import './Home.css';
import CreateNewForm from './CreateNewForm';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (groupName, groupColor) => {
    const newItem = { groupName, groupColor };
    setItems([...items, newItem]);
    setShowForm(false); 
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <Sidebarr items={items} onDelete={handleDelete} />

      <div className="mainn">
        <img src={img} alt="Background" className="image" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online.<br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <div className="buttondiv">
        {!showForm ? (
          <button className="Addition" onClick={toggleForm}>
            <p className="text">+</p>
          </button>
        ) : (
          <CreateNewForm
            toggleForm={toggleForm}
            showForm={showForm}
            onSubmit={handleFormSubmit} 
          />
        )}
      </div>

      <div className="Encryption">
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default Home;
